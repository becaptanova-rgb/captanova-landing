import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";
import { sendConfirmationEmail, sendAdminNotification } from "@/emails/templates";

const resend = new Resend(process.env.RESEND_API_KEY);

const leadSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  country: z.string().optional(),
  message: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = leadSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Validation failed", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const lead = parsed.data;

    // ── 1. Send confirmation email to the user ──────────────────────────
    try {
      await resend.emails.send({
        from: process.env.FROM_EMAIL || "noreply@captanova.com",
        to: lead.email,
        subject: "🎯 You're In! Your Seat is Reserved — Captanova Masterclass",
        html: sendConfirmationEmail(lead.name),
      });
    } catch (emailError) {
      console.error("Failed to send confirmation email:", emailError);
      // Non-fatal — continue with the flow
    }

    // ── 2. Notify the admin ─────────────────────────────────────────────
    try {
      await resend.emails.send({
        from: process.env.FROM_EMAIL || "noreply@captanova.com",
        to: process.env.ADMIN_EMAIL || "admin@captanova.com",
        subject: `🔔 New Lead: ${lead.name} — Captanova Masterclass`,
        html: sendAdminNotification(lead),
      });
    } catch (adminError) {
      console.error("Failed to send admin notification:", adminError);
    }

    // ── 3. Optional: Save to Google Sheets ──────────────────────────────
    // Uncomment and configure if you want Google Sheets integration:
    //
    // await appendToGoogleSheet({
    //   name: lead.name,
    //   email: lead.email,
    //   phone: lead.phone,
    //   country: lead.country,
    //   message: lead.message,
    //   timestamp: new Date().toISOString(),
    // });

    // ── 4. Return Razorpay payment link ─────────────────────────────────
    const paymentLink = process.env.RAZORPAY_PAYMENT_LINK;

    if (!paymentLink) {
      console.warn("RAZORPAY_PAYMENT_LINK not set in environment variables");
    }

    return NextResponse.json({
      success: true,
      message: "Lead captured successfully",
      paymentLink: paymentLink || null,
    });
  } catch (error) {
    console.error("Enroll API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
