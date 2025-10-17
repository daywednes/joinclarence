# 🚀 Clarence Landing Page - Setup Guide

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

or if you prefer yarn:

```bash
yarn install
```

### 2. Run Development Server

```bash
npm run dev
```

Your site will be available at [http://localhost:3000](http://localhost:3000)

### 3. Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
clarence-2/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles & Tailwind
│   ├── layout.tsx         # Root layout with SEO metadata
│   └── page.tsx           # Main landing page
│
├── components/            # React components (all sections)
│   ├── Header.tsx        # Sticky header with menu
│   ├── Hero.tsx          # Hero section with main CTA
│   ├── QueryBox.tsx      # Interactive search with suggestions
│   ├── ValueProp.tsx     # Carrier logos section
│   ├── ChatSection.tsx   # Chat demo
│   ├── ChatBubble.tsx    # Chat message component
│   ├── HumanHelp.tsx     # Human broker support
│   ├── Memory.tsx        # Policy tracking
│   ├── Privacy.tsx       # Security messaging
│   ├── CTA.tsx          # Bottom call-to-action
│   ├── Footer.tsx       # Footer links
│   └── Icons.tsx        # SVG icon components
│
├── public/               # Static assets
│   ├── carriers/        # Insurance carrier logos
│   └── icons/          # Icon assets
│
└── config files         # Next.js, TypeScript, Tailwind configs
```

## 🎨 Customization

### Brand Colors

Edit `tailwind.config.ts` to change colors:

```typescript
colors: {
  clarence: {
    primary: "#0057d9",    // Main blue
    secondary: "#00bcd4",  // Accent cyan
  },
}
```

These colors are used throughout:
- Primary buttons: `bg-[#0057d9]`
- Hover states: `hover:opacity-90`

### Content

All content is in the component files. Each section is self-contained:

- **Hero text**: `components/Hero.tsx`
- **Section headings**: Individual component files
- **Chat examples**: `components/ChatSection.tsx`
- **Bullet points**: `components/HumanHelp.tsx`
- **Footer links**: `components/Footer.tsx`

### Interactive Elements

#### Search Box
The `QueryBox` component has:
- Autocomplete suggestions
- Focus/blur states
- Icon transitions
- Submit handling (console.log by default)

To connect to your backend, edit the `submit()` function in `components/QueryBox.tsx`.

#### Call-to-Action
The bottom CTA form is in `components/CTA.tsx`. Update the `handleSubmit()` function to integrate with your API.

### Images & Logos

See `public/ASSETS.md` for asset guidelines.

Currently using:
- Text logo ("Clarence" in header)
- Text placeholders for carriers
- Inline SVG for lock icon

Add your assets to `/public/` and update the image paths in components.

## 🔧 Advanced Configuration

### SEO & Metadata

Edit `app/layout.tsx` to update:
- Page title
- Description
- Open Graph tags
- Keywords

### Analytics

Add your analytics in `app/layout.tsx`:

```tsx
// Add to <head> or <body>
<Script src="your-analytics-url" />
```

### Environment Variables

Create `.env.local` for environment-specific config:

```env
NEXT_PUBLIC_API_URL=https://api.clarence.com
```

Access in components:
```typescript
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
```

## 📱 Responsive Design

The site is fully responsive with Tailwind breakpoints:
- `sm:` - 640px and up
- `md:` - 768px and up
- `lg:` - 1024px and up

Most sections use a max-width container: `max-w-6xl mx-auto`

## 🚢 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Deploy (auto-configured for Next.js)

### Other Platforms

Build command: `npm run build`
Output directory: `.next`
Install command: `npm install`

## 🛠 Troubleshooting

### Port already in use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use a different port
npm run dev -- -p 3001
```

### TypeScript errors
```bash
# Type check without building
npx tsc --noEmit
```

### Clear Next.js cache
```bash
rm -rf .next
npm run dev
```

## 📦 Dependencies

- **Next.js 14** - React framework with App Router
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling

## 🤝 Support

For questions or issues with this landing page, refer to:
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)

---

**Ready to launch!** 🎉

Run `npm install && npm run dev` to get started.

