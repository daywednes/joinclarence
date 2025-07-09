# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a new project for JoinClanRece.com - a landing page for insurance agency acquisition. The project is in the initial setup phase with only a PRD.md file currently present.

## Project Goals

- Build a landing page to acquire insurance agencies
- Collect agency lead data through a form
- Store lead information in Google Sheets
- Provide AI-powered valuations and seamless transitions
- Target: 7-day close process with no broker fees

## Technical Stack (Planned)

Based on the PRD, the planned tech stack includes:
- **Frontend**: Next.js (or alternative modern framework)
- **Backend**: Google Apps Script endpoint OR Node.js with Google Sheets API
- **Hosting**: Vercel or Netlify
- **Form Integration**: Google Sheets via API or Apps Script
- **Anti-spam**: Basic honeypot or reCAPTCHA v3

## Key Features to Implement

1. **Hero Section** with headline and CTA buttons
2. **Benefits Snapshot** (7-Day Close, No Broker Fees, AI-Powered Valuations)
3. **How It Works** section with 4 steps
4. **Why Clarence AI** section with stats and testimonials
5. **Lead Capture Form** with Google Sheets integration
6. **About Section** for company background

## Lead Form Requirements

Required fields:
- Agency Name (text)
- Your Name (text)
- Annual Revenue (dropdown/numeric range)
- Region (dropdown of states/regions)
- Email (email field)

Form should validate required fields and push to Google Sheet with columns: Timestamp, Agency Name, Contact Name, Revenue, Region, Email.

## Performance Requirements

- Page load time < 2s on mobile
- Mobile responsiveness score > 95 on Lighthouse
- Clean, modern, mobile-friendly design
- Fast-loading with minimal animations

## Success Criteria

- Functional form pushing to Google Sheet
- Target: 10+ qualified leads within first 2 weeks
- Meet performance benchmarks
- Mobile-responsive design