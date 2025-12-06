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

**Auto-Responder Email (Includes Download Link):**

The form automatically sends the `downloadUrl` field to FormSpark. To set up the auto-responder:

1. Go to your FormSpark dashboard
2. Click on your form → **Email** tab
3. Enable **"Send auto-reply email to submitter"**
4. Customize your email template and include the download link:

```
Subject: Download Your CAGE Code Requirements Checklist

Hi there!

Thanks for downloading the CAGE Code Requirements Checklist. 

Click here to download your checklist:
{{downloadUrl}}

This comprehensive checklist includes:
- All required business documents
- Tax information needed
- Banking requirements
- Step-by-step application process

Need help with your CAGE Code application? 
Check out our free resources at guides.govcongiants.org

Best regards,
GovCon Giants Team

---

You're receiving this because you requested a download from GovCon Giants.
```

**Important:** Use `{{downloadUrl}}` in your template to include the download link. FormSpark will automatically replace it with the actual URL sent from the form.

**Alternative Setup Options:**
- Use FormSpark's integrations to send emails via your email service (Mailchimp, ConvertKit, etc.)
- Connect to Zapier/Make for advanced automation workflows

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
