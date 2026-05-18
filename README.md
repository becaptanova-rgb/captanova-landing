# Captanova — Live Masterclass Landing Page

Premium, conversion-focused Next.js landing page for the Captanova live masterclass.

---

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** — scroll animations, modal transitions
- **React Hook Form + Zod** — form validation
- **Resend** — transactional email
- **Razorpay** — payment gateway

---

## Quick Start

### 1. Install dependencies

```bash
npm install
```

### 2. Set up environment variables

Copy the example file and fill in your real credentials:

```bash
cp .env.example .env.local
```

Then open `.env.local` and add:

| Variable | Description |
|---|---|
| `RAZORPAY_PAYMENT_LINK` | Your Razorpay payment link URL |
| `RESEND_API_KEY` | From [resend.com](https://resend.com) |
| `FROM_EMAIL` | Verified sender email in Resend |
| `ADMIN_EMAIL` | Where lead notifications go |
| `WEBHOOK_SECRET` | From Razorpay webhook settings |

### 3. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Project Structure

```
captanova/
├── app/
│   ├── layout.tsx          # Root layout, fonts, SEO metadata
│   ├── page.tsx            # Main page (assembles all sections)
│   ├── globals.css         # Global styles + Tailwind
│   └── api/
│       ├── enroll/         # POST — lead capture + email trigger
│       └── webhook/        # POST — Razorpay payment webhook
│
├── components/
│   ├── sections/           # Page sections (Hero, Why, Transform…)
│   └── ui/                 # Reusable UI (Navbar, Modal, Timer…)
│
├── emails/
│   └── templates.ts        # All email HTML templates (Resend)
│
├── lib/
│   └── modal-context.tsx   # Global modal open/close state
│
├── .env.example            # Environment variable template
└── tailwind.config.ts
```

---

## Lead Capture Flow

1. User clicks any **CTA button** → modal opens
2. User fills in **Name, Email, Phone, Country, Pain Point**
3. Form submits to `POST /api/enroll`
4. API:
   - Validates input with Zod
   - Sends **confirmation email** to user (Resend)
   - Sends **admin notification** to your email
   - Returns the **Razorpay payment link**
5. Frontend redirects user to Razorpay
6. After payment, Razorpay calls `POST /api/webhook`
7. Webhook sends **welcome + access email**

---

## Customisation Checklist

- [ ] Replace coach image placeholder in `HeroSection.tsx` and `CoachSection.tsx` with `<Image src="/coach.jpg" ... />`
- [ ] Add your real coach name, title, and story
- [ ] Set real masterclass date/time in `HeroSection.tsx`
- [ ] Update `RAZORPAY_PAYMENT_LINK` in `.env.local`
- [ ] Verify sender domain in Resend and set `FROM_EMAIL`
- [ ] Add video testimonial URLs to `TestimonialsSection.tsx`
- [ ] Update metadata (OG image, site URL) in `app/layout.tsx`
- [ ] Set `ADMIN_EMAIL` to receive lead notifications

---

## Deploying to Vercel

```bash
npx vercel
```

Add all `.env.local` variables in the Vercel project dashboard under **Settings → Environment Variables**.

Set your Razorpay webhook URL to:
```
https://your-domain.com/api/webhook
```

---

## Email Sequences (Resend)

All email templates live in `emails/templates.ts`:

| Template | Trigger |
|---|---|
| `sendConfirmationEmail` | Immediately after form submit |
| `sendAdminNotification` | Same time — alerts you of new lead |
| `sendWelcomeEmail` | After successful Razorpay payment |

To add drip sequences (reminders, countdowns), use [Resend Broadcasts](https://resend.com/broadcasts) or schedule additional API calls.
