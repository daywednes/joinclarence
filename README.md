# Clarence - AI Insurance Broker Landing Page

A modern, beautiful landing page for Clarence, your private personal AI insurance broker.

## Features

- 🎨 Modern, clean design with Tailwind CSS
- ⚡ Built with Next.js 14+ (App Router)
- 📱 Fully responsive
- 🔍 Interactive search box with suggestions
- 💬 Chat interface demonstration
- 🔒 Privacy-focused messaging
- ✨ Smooth animations and transitions

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
clarence-2/
├── app/
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout with metadata
│   └── page.tsx          # Main page
├── components/
│   ├── Header.tsx        # Navigation header
│   ├── Hero.tsx          # Hero section
│   ├── QueryBox.tsx      # Interactive search box
│   ├── ValueProp.tsx     # Value proposition section
│   ├── ChatSection.tsx   # Chat demo section
│   ├── ChatBubble.tsx    # Chat message component
│   ├── HumanHelp.tsx     # Human support section
│   ├── Memory.tsx        # Policy tracking section
│   ├── Privacy.tsx       # Security section
│   ├── CTA.tsx           # Call-to-action section
│   ├── Footer.tsx        # Footer
│   └── Icons.tsx         # SVG icon components
├── public/               # Static assets (add logos here)
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

## Customization

### Colors

The main brand colors are defined in `tailwind.config.ts`:
- Primary: `#0057d9` (blue)
- Secondary: `#00bcd4` (cyan)

### Content

Edit the component files in the `components/` directory to update content.

### Images

Add your logo and carrier logos to the `public/` directory:
- `/clarence-logo.png` - Main logo
- `/carriers/` - Insurance carrier logos
- `/icons/` - Icon assets

## Technologies

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **React 18** - UI library

## License

© 2025 Clarence Insurance Services

