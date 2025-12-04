# FormSpark Email Template for Auto-Responder

Copy and paste this template into your FormSpark email template editor:

## Subject Line
```
Download Your CAGE Code Requirements Checklist
```

## Email Body Template (Handlebars)

```handlebars
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  
  <div style="background: #f8f9fa; padding: 30px; border-radius: 8px; margin-bottom: 20px;">
    <h1 style="color: #2c3e50; margin-top: 0;">Thanks for Downloading!</h1>
    
    <p>Hi there,</p>
    
    <p>Thanks for requesting the <strong>CAGE Code Requirements Checklist</strong>. Your download is ready!</p>
    
    <div style="background: white; padding: 20px; border-radius: 6px; margin: 20px 0; text-align: center;">
      <a href="{{downloadUrl}}" 
         style="display: inline-block; background: #007bff; color: white; padding: 14px 28px; text-decoration: none; border-radius: 4px; font-weight: bold; font-size: 16px;">
        📥 Download Your Checklist
      </a>
    </div>
    
    <p><strong>What's included in your checklist:</strong></p>
    <ul style="padding-left: 20px;">
      <li>All required business documents</li>
      <li>Tax information needed</li>
      <li>Banking requirements</li>
      <li>Step-by-step application process</li>
      <li>Pro tips to avoid common mistakes</li>
    </ul>
    
    <p>Need more help? Visit <a href="https://guides.govcongiants.org">guides.govcongiants.org</a> for additional resources.</p>
    
    <p style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666;">
      You're receiving this because you requested a download from GovCon Giants.<br>
      <a href="{{unsubscribeUrl}}">Unsubscribe</a> if you no longer wish to receive these emails.
    </p>
  </div>
  
</body>
</html>
```

## Plain Text Version (Alternative)

If you prefer plain text, use this simpler version:

```handlebars
Subject: Download Your CAGE Code Requirements Checklist

Hi there!

Thanks for requesting the CAGE Code Requirements Checklist. Your download is ready!

📥 Download your checklist here:
{{downloadUrl}}

What's included:
• All required business documents
• Tax information needed
• Banking requirements
• Step-by-step application process
• Pro tips to avoid common mistakes

Need more help? Visit guides.govcongiants.org for additional resources.

Best regards,
GovCon Giants Team

---
You're receiving this because you requested a download from GovCon Giants.
```

## Available Variables

Based on what your form sends, these variables are available:

- `{{downloadUrl}}` - The direct link to download the PDF
- `{{email}}` - The user's email address
- `{{leadMagnet}}` - The name of the lead magnet (e.g., "CAGE Code Requirements Checklist")
- `{{source}}` - Where the submission came from
- `{{timestamp}}` - When the form was submitted

## How to Use in FormSpark

1. **In the Template (Handlebars) panel**: Paste one of the templates above
2. **Save the template**: Click "Save template"
3. **Test it**: Submit a test form to see how it looks

## Important Notes

- Make sure "Send auto-reply email to submitter" is enabled
- The `{{downloadUrl}}` variable will automatically be replaced with the actual download link
- The HTML version will render nicely in email clients
- The plain text version works everywhere but is simpler

