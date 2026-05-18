// ─────────────────────────────────────────────────────────────────
//  Captanova Email Templates
//  All emails use inline styles for maximum email client compat.
// ─────────────────────────────────────────────────────────────────

const baseStyle = `
  font-family: 'Helvetica Neue', Arial, sans-serif;
  background: #060810;
  color: #E8EEF8;
  max-width: 600px;
  margin: 0 auto;
  padding: 0;
`;

const headerHtml = `
  <div style="background: linear-gradient(135deg, #0C1120, #1A2035); padding: 40px 40px 30px; text-align: center; border-bottom: 1px solid rgba(201,169,110,0.2);">
    <h1 style="font-family: 'Georgia', serif; font-size: 28px; font-weight: 700; color: #C9A96E; margin: 0; letter-spacing: 4px; text-transform: uppercase;">CAPTANOVA</h1>
    <p style="color: #8E9AB5; font-size: 12px; margin: 8px 0 0; letter-spacing: 2px; text-transform: uppercase;">Unlock Your True Potential</p>
  </div>
`;

const footerHtml = `
  <div style="background: #060810; padding: 30px 40px; text-align: center; border-top: 1px solid rgba(255,255,255,0.05);">
    <p style="color: #8E9AB5; font-size: 12px; margin: 0 0 8px;">© 2025 Captanova · Copenhagen, Denmark</p>
    <p style="color: #8E9AB5; font-size: 11px; margin: 0; opacity: 0.5;">You're receiving this because you enrolled in the Captanova Masterclass.</p>
  </div>
`;

// ── 1. Instant confirmation ──────────────────────────────────────
export function sendConfirmationEmail(name: string): string {
  return `
    <div style="${baseStyle}">
      ${headerHtml}
      <div style="background: #0C1120; padding: 50px 40px;">
        <p style="color: #C9A96E; font-size: 13px; letter-spacing: 3px; text-transform: uppercase; margin: 0 0 16px;">Your Seat Is Reserved</p>
        <h2 style="font-size: 32px; font-weight: 800; color: #E8EEF8; margin: 0 0 20px; line-height: 1.2;">You took the first step, ${name}.</h2>
        <p style="color: #8E9AB5; font-size: 16px; line-height: 1.8; margin: 0 0 30px;">
          Most people read about transformation. You just did something about it.
          Your enrollment is confirmed and your spot is secured.
        </p>
        <div style="background: rgba(201,169,110,0.06); border: 1px solid rgba(201,169,110,0.2); border-radius: 12px; padding: 24px; margin: 30px 0;">
          <h3 style="color: #C9A96E; font-size: 14px; text-transform: uppercase; letter-spacing: 2px; margin: 0 0 16px;">Masterclass Details</h3>
          <p style="color: #E8EEF8; margin: 6px 0; font-size: 15px;">📅 <strong>Date:</strong> To be confirmed</p>
          <p style="color: #E8EEF8; margin: 6px 0; font-size: 15px;">⏱ <strong>Duration:</strong> 2 Hours Live</p>
          <p style="color: #E8EEF8; margin: 6px 0; font-size: 15px;">💻 <strong>Platform:</strong> Online (link sent closer to date)</p>
        </div>
        <p style="color: #8E9AB5; font-size: 15px; line-height: 1.8; margin: 0 0 30px;">
          Complete your enrollment by proceeding to the secure payment page. Once confirmed, you'll receive your masterclass access link and all bonus materials.
        </p>
        <div style="text-align: center; margin: 40px 0;">
          <a href="${process.env.RAZORPAY_PAYMENT_LINK || '#'}"
             style="display: inline-block; padding: 16px 48px; background: linear-gradient(135deg, #8B6A3E, #C9A96E, #E8CC94); color: #060810; font-weight: 800; font-size: 14px; letter-spacing: 2px; text-transform: uppercase; text-decoration: none; border-radius: 4px;">
            Complete Enrollment →
          </a>
        </div>
      </div>
      ${footerHtml}
    </div>
  `;
}

// ── 2. Welcome (post-payment) ────────────────────────────────────
export function sendWelcomeEmail(name: string): string {
  return `
    <div style="${baseStyle}">
      ${headerHtml}
      <div style="background: #0C1120; padding: 50px 40px;">
        <p style="color: #C9A96E; font-size: 13px; letter-spacing: 3px; text-transform: uppercase; margin: 0 0 16px;">Welcome to the Program</p>
        <h2 style="font-size: 32px; font-weight: 800; color: #E8EEF8; margin: 0 0 20px; line-height: 1.2;">You're officially in, ${name}.</h2>
        <p style="color: #8E9AB5; font-size: 16px; line-height: 1.8; margin: 0 0 30px;">
          Payment confirmed. Enrollment complete. The version of you that existed before this decision is already becoming a memory.
        </p>
        <div style="background: rgba(201,169,110,0.06); border: 1px solid rgba(201,169,110,0.2); border-radius: 12px; padding: 24px; margin: 30px 0;">
          <h3 style="color: #C9A96E; font-size: 14px; text-transform: uppercase; letter-spacing: 2px; margin: 0 0 16px;">What Happens Next</h3>
          <p style="color: #E8EEF8; margin: 8px 0; font-size: 15px;">✦ Your bonus materials are being prepared</p>
          <p style="color: #E8EEF8; margin: 8px 0; font-size: 15px;">✦ Live access link will be sent 24hrs before</p>
          <p style="color: #E8EEF8; margin: 8px 0; font-size: 15px;">✦ Reminder emails will guide you to the session</p>
          <p style="color: #E8EEF8; margin: 8px 0; font-size: 15px;">✦ Community access coming within 48 hours</p>
        </div>
        <p style="color: #8E9AB5; font-size: 15px; line-height: 1.8;">
          This masterclass will challenge how you see yourself and what you believe is possible. Show up fully. Come prepared to change.
        </p>
      </div>
      ${footerHtml}
    </div>
  `;
}

// ── 3. Admin notification ────────────────────────────────────────
export function sendAdminNotification(lead: {
  name: string;
  email: string;
  phone?: string;
  country?: string;
  message?: string;
}): string {
  return `
    <div style="${baseStyle}">
      ${headerHtml}
      <div style="background: #0C1120; padding: 40px;">
        <h2 style="color: #C9A96E; font-size: 20px; margin: 0 0 24px;">New Lead Captured 🔥</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="color: #8E9AB5; padding: 8px 0; font-size: 14px; width: 100px;">Name</td><td style="color: #E8EEF8; padding: 8px 0; font-size: 14px; font-weight: 600;">${lead.name}</td></tr>
          <tr><td style="color: #8E9AB5; padding: 8px 0; font-size: 14px;">Email</td><td style="color: #E8EEF8; padding: 8px 0; font-size: 14px;">${lead.email}</td></tr>
          <tr><td style="color: #8E9AB5; padding: 8px 0; font-size: 14px;">Phone</td><td style="color: #E8EEF8; padding: 8px 0; font-size: 14px;">${lead.phone || "—"}</td></tr>
          <tr><td style="color: #8E9AB5; padding: 8px 0; font-size: 14px;">Country</td><td style="color: #E8EEF8; padding: 8px 0; font-size: 14px;">${lead.country || "—"}</td></tr>
          <tr><td style="color: #8E9AB5; padding: 8px 0; font-size: 14px;">Pain Point</td><td style="color: #E8EEF8; padding: 8px 0; font-size: 14px; font-style: italic;">${lead.message || "—"}</td></tr>
          <tr><td style="color: #8E9AB5; padding: 8px 0; font-size: 14px;">Time</td><td style="color: #E8EEF8; padding: 8px 0; font-size: 14px;">${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST</td></tr>
        </table>
      </div>
      ${footerHtml}
    </div>
  `;
}
