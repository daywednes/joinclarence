## PRD: JoinClanRece.com – Landing Page for Insurance Agency Acquisition

### Overview

**JoinClanRece.com** is a landing page designed to acquire insurance agencies by offering fast, AI-powered valuations and seamless transitions. The primary goal is to **collect agency lead data** and **store it in a connected Google Sheet**, while clearly communicating our value proposition.

---

### 1. Objectives

* Convert agency owners into leads by highlighting speed, fairness, and AI-driven process.
* Collect and persist lead information in Google Sheets.
* Optimize for speed, responsiveness, and clarity.

---

### 2. Core Features

#### 2.1 Hero Section

* **Headline**: “We acquire top-performing insurance agencies”
* **Subtext**: “Fast, simple, and fair valuations powered by AI. Get your offer in 7 days with no broker fees and seamless transition support.”
* **CTA Buttons**:

  * `Request an Offer` → scrolls to lead form
  * `See How It Works` → scrolls to explainer section

#### 2.2 Benefits Snapshot

* ✓ 7-Day Close
* ✓ No Broker Fees
* ✓ AI-Powered Valuations

#### 2.3 How It Works (Steps)

1. Submit Your Agency
2. AI-Powered Valuation
3. Due Diligence
4. Close & Transition

Use visual icons or numbered steps layout.

#### 2.4 Why Clarence AI

* **Fair & Transparent**
* **Fast Closings**
* **Ongoing Support**
* **Proven Track Record**

  * 50+ Agencies Acquired
  * \$200M Premiums Managed
  * 98% Owner Satisfaction

Include testimonial:

> “Clarence AI made the acquisition process incredibly smooth…” – *Sarah Mitchell*

#### 2.5 About Section

Short paragraph about Clarence AI Rollup (team background, mission, investors).

---

### 3. Lead Capture Form

#### Fields

* Agency Name (text)
* Your Name (text)
* Annual Revenue (dropdown or numeric range)
* Region (dropdown of states/regions)
* Email (email field)

#### Behavior

* Submit → Validate required fields
* On success → Push to **Google Sheet**
* Optional: Display success message or redirect to thank-you page

#### Google Sheets Integration

* Use Google Apps Script webhook or backend (e.g., Firebase/Node/Next.js) to append form data to a specific Google Sheet
* Columns: Timestamp, Agency Name, Contact Name, Revenue, Region, Email

---

### 4. Technical Requirements

#### Frontend

* **Framework**: Next.js (or your stack of choice)
* **Design**: Clean, modern, mobile-friendly, fast-loading
* **Animation**: Minimal, CTA-focused (optional)

#### Backend (for form submission)

* **Option 1**: Google Apps Script endpoint
* **Option 2**: Node.js server with OAuth2 to Google Sheets API
* **Anti-spam**: Basic honeypot or reCAPTCHA v3

#### Hosting

* Vercel or Netlify (recommended for fast deployment)

---

### 5. Future Add-ons (Not in MVP)

* Exit-intent pop-up with lead magnet
* Calendly integration for optional intro call booking
* Testimonials carousel
* FAQ section for seller objections

---

### 6. Success Criteria

* Page live with form pushing to Google Sheet
* At least 10 qualified leads submitted within first 2 weeks
* Page load time < 2s on mobile
* Mobile responsiveness score > 95 on Lighthouse

