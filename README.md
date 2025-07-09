# JoinClarence.com - Insurance Agency Acquisition Landing Page

This is a Next.js landing page designed to acquire insurance agencies by offering fast, AI-powered valuations and seamless transitions.

## Features

- **Hero Section** with compelling headline and call-to-action buttons
- **Benefits Snapshot** highlighting key advantages (7-Day Close, No Broker Fees, AI-Powered Valuations)
- **How It Works** section with 4-step process
- **Why Clarence AI** section with statistics and testimonials
- **Lead Capture Form** with Google Sheets integration
- **About Section** with company background
- Mobile-responsive design optimized for performance

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Set up Google Sheets integration:
   - Copy `.env.local.example` to `.env.local`
   - Follow the instructions in `google-apps-script.js` to set up Google Apps Script
   - Add your Google Apps Script URL to `.env.local`

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Google Sheets Integration

The form submissions are sent to Google Sheets via Google Apps Script. To set this up:

1. Create a new Google Apps Script project at [script.google.com](https://script.google.com)
2. Paste the code from `google-apps-script.js` into the script editor
3. Deploy as a web app with the following settings:
   - Execute as: Me
   - Who has access: Anyone
4. Copy the web app URL and add it to your `.env.local` file as `GOOGLE_SCRIPT_URL`
5. Create or link a Google Sheet to store the form submissions

## Form Data Structure

The form collects the following data:
- Timestamp
- Agency Name
- Contact Name
- Annual Revenue (dropdown options)
- Region (dropdown options)
- Email Address

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Tech Stack

- Next.js 15.3.5
- React 18
- TypeScript
- Tailwind CSS
- Google Apps Script (for form submissions)

## Performance Optimizations

- Mobile-first responsive design
- Optimized images and assets
- Minimal JavaScript bundle
- Fast loading times
- Smooth scrolling navigation

## Deployment

Recommended hosting platforms:
- Vercel (recommended)
- Netlify
- Any Node.js hosting provider

The project is configured for easy deployment on Vercel with automatic builds and optimizations.