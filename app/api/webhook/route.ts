import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { Resend } from "resend";
import { sendWelcomeEmail } from "@/emails/templates";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.text();
    const signature = request.headers.get("x-razorpay-signature");

    // ── Verify webhook signature ─────────────────────────────────────────
    if (!signature || !process.env.WEBHOOK_SECRET) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const expectedSignature = crypto
      .createHmac("sha256", process.env.WEBHOOK_SECRET)
      .update(body)
      .digest("hex");

    if (expectedSignature !== signature) {
      return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
    }

    const event = JSON.parse(body);

    // ── Handle payment captured event ───────────────────────────────────
    if (event.event === "payment_link.paid" || event.event === "payment.captured") {
      const payment = event.payload?.payment?.entity || event.payload?.payment_link?.entity;
      const customerEmail = payment?.email;
      const customerName = payment?.notes?.name || "Valued Student";

      if (customerEmail) {
        await resend.emails.send({
          from: process.env.FROM_EMAIL || "noreply@captanova.com",
          to: customerEmail,
          subject: "🎓 Welcome to Captanova Masterclass — You're Officially Enrolled!",
          html: sendWelcomeEmail(customerName),
        });
      }
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("Webhook error:", error);
    return NextResponse.json({ error: "Webhook processing failed" }, { status: 500 });
  }
}
