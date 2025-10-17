# Clarence - AI Insurance Broker Landing Page

A modern, beautiful landing page for Clarence, your private, personal AI insurance broker. Built with Next.js 14, React, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern, clean UI with smooth animations
- 📱 Fully responsive design
- ⚡ Built with Next.js 14 for optimal performance
- 🎯 Interactive query box with smart suggestions
- 💬 Chat interface demonstration
- 🔒 Privacy and security focused messaging
- ✨ Beautiful gradient effects and backdrop blur

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
clarence-doctronic/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main landing page component
│   └── globals.css         # Global styles and Tailwind imports
├── public/                 # Static assets (add your logo and images here)
├── package.json
├── next.config.js
├── tailwind.config.js
└── tsconfig.json
```

## Customization

### Adding Your Logo

Place your logo image in the `public/` directory and update the header section in `app/page.tsx`:

```tsx
<div className="justify-self-center">
  <img src="/your-logo.png" alt="Clarence Logo" className="h-8 w-auto" />
</div>
```

### Colors

The main brand colors are defined in `tailwind.config.js`:
- `clarence-blue`: #0057d9
- `clarence-cyan`: #00bcd4

You can customize these in the Tailwind config file.

### Content

All content can be edited directly in `app/page.tsx`. The page is structured in clear sections:
- Hero section
- Value proposition
- Chat demonstration
- Human support
- Feature tracking
- Privacy & security
- Call-to-action
- Footer

## Building for Production

```bash
npm run build
npm start
```

This creates an optimized production build and starts the production server.

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

You can also deploy to:
- Netlify
- AWS Amplify
- Google Cloud Platform
- Any Node.js hosting service

## Technologies Used

- **Next.js 14** - React framework with app router
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS processing
- **ESLint** - Code linting

## License

© 2025 Clarence Insurance Services

## Support

For questions or support, please contact your development team.

