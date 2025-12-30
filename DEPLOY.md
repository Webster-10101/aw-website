# Deployment Guide

## Phase 1: Deploy to Vercel's Domain (Development)

Start with Vercel's free subdomain (e.g., `alistair-webster-site.vercel.app`) to test and refine before pointing your actual domain.

### Option 1: Vercel Dashboard (Easiest)

1. Push this code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - new personal site"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. Go to [vercel.com](https://vercel.com)
3. Click "Add New" → "Project"
4. Import your GitHub repository
5. Vercel will auto-detect Next.js - just click "Deploy"
6. Done! Your site will be live at `your-project-name.vercel.app` in ~1 minute

### Option 2: Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Deploy (first time)
vercel

# Follow the prompts:
# - Link to existing project? N
# - What's your project's name? alistair-webster-site
# - In which directory is your code located? ./
# - Want to modify settings? N

# Deploy to production
vercel --prod
```

**Your site will be live at:** `alistair-webster-site.vercel.app` (or similar)

Share this URL with others for feedback before going live on your actual domain.

---

## Phase 2: Connecting Your Domain (When Ready)

**Do this only when you're happy with the site and ready to go live.**

### Connecting alistairwebster.com

1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add `alistairwebster.com` and `www.alistairwebster.com`
4. Vercel will give you DNS instructions
5. Update your domain's DNS records (likely with your domain registrar)
6. Wait for DNS propagation (usually < 1 hour)

### DNS Records You'll Need:

For apex domain (alistairwebster.com):
- Type: `A` 
- Value: `76.76.21.21`

For www subdomain:
- Type: `CNAME`
- Value: `cname.vercel-dns.com`

Or use Vercel's nameservers for easier setup.

## Environment Variables

If you need any environment variables:

1. In Vercel dashboard → Settings → Environment Variables
2. Add variables there
3. Redeploy

## Testing on Vercel's Domain

After deploying to `your-project-name.vercel.app`, test:
- [ ] Home page loads and looks good
- [ ] Navigation works (all 3 pages)
- [ ] Footer link to Speak Up For Good works
- [ ] "Get in touch" email links work
- [ ] Mobile responsiveness (resize browser or test on phone)
- [ ] Share with trusted friends/colleagues for feedback
- [ ] Make any refinements needed
- [ ] When you're happy, connect your custom domain (Phase 2 above)

## Post-Deployment

Once live on your custom domain, consider:
- Setting up Vercel Analytics (free, privacy-friendly)
- Adding a custom 404 page (create `app/not-found.tsx`)
- Setting up redirects from old pages if needed (in `vercel.json`)
- Monitoring performance with Vercel's built-in tools

## Continuous Deployment

**The best part:** After initial setup, every time you push to GitHub, Vercel automatically rebuilds and deploys. No manual steps needed!

