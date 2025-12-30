# Alistair Webster - Personal Site

A calm, intentional personal site built with Next.js and Tailwind CSS.

## About

This site positions Alistair as a coach and consultant, with a focus on clarity of thought and voice. It's designed to feel quiet, confident, and editorial—not transactional or portfolio-like.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Vercel** (deployment)

## Getting Started

### Prerequisites

Make sure you have Node.js 18+ installed.

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Site Structure

- **Home** (`/`) - Main landing page with overview of work and approach
- **Working Together** (`/working`) - Detailed ways of working (coaching, advisory, workshops, AI)
- **About** (`/about`) - Background, experience, and values

## Deployment

### Deploy to Vercel

1. Push this repo to GitHub
2. Import the project in Vercel
3. Vercel will auto-detect Next.js and deploy
4. Connect your custom domain (alistairwebster.com)

Or use the Vercel CLI:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## Customization

- **Colors**: Edit `tailwind.config.ts` and `app/globals.css`
- **Content**: Edit the page files in `app/`
- **Navigation**: Modify `components/Navigation.tsx`
- **Footer**: Update `components/Footer.tsx`

## Design Principles

- Calm and considered, not flashy
- Editorial voice, not marketing speak
- Space to breathe (generous whitespace)
- Focus on clarity and readability
- No portfolios, no service grids, no transactional framing

