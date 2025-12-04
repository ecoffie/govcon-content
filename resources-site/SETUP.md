# GovCon Resources Site - Setup Guide

## FormSpark Email Integration

The site uses FormSpark to capture email leads from the lead magnet forms.

### Step 1: Create FormSpark Account

1. Go to https://formspark.io
2. Sign up for a free account
3. Create a new form
4. Copy your Form ID (it looks like: `abc123xyz`)

### Step 2: Configure Environment Variables

**Local Development:**
1. Copy `.env.example` to `.env.local`
2. Replace `your_formspark_form_id_here` with your actual Form ID

**Vercel Production:**
1. Go to your Vercel project settings
2. Navigate to: Settings → Environment Variables
3. Add a new variable:
   - Name: `NEXT_PUBLIC_FORMSPARK_FORM_ID`
   - Value: Your FormSpark Form ID
   - Environment: Production, Preview, Development
4. Redeploy your site

### Step 3: Test the Integration

1. Run the site locally: `npm run dev`
2. Navigate to any CAGE Code page
3. Scroll to the lead magnet form
4. Submit your email
5. Check FormSpark dashboard for the submission

### Step 4: Set Up Email Automation

In FormSpark:
1. Go to your form settings
2. Set up email notifications to receive leads
3. (Optional) Connect to Zapier/Make for advanced automation
4. (Optional) Auto-respond with download link to users

## Adding Download Links

To add actual PDF downloads:

1. Upload PDFs to `/public/downloads/` folder
2. Update LeadMagnet components with `downloadUrl` prop:

```jsx
<LeadMagnet 
  title="Download: CAGE Code Checklist"
  description="..."
  leadMagnetName="CAGE Code Checklist"
  downloadUrl="/downloads/cage-code-checklist.pdf"
/>
```

## Deployment

```bash
# From resources-site directory
cd resources-site

# Deploy to Vercel
vercel --prod

# Or if already linked
vercel deploy --prod
```

## Support

- FormSpark Docs: https://formspark.io/docs
- Next.js Docs: https://nextjs.org/docs
- Vercel Docs: https://vercel.com/docs
