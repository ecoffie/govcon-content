# Quick Fix: FormSpark Auto-Reply Not Sending

## Most Common Issue: Email Field Not Configured

FormSpark needs to know which field contains the email address to send the auto-reply.

### Fix This First:

1. **Go to FormSpark Dashboard:**
   - Visit: https://app.formspark.io
   - Select your form (ID: `xP0d3G9C7`)

2. **Go to Email Tab:**
   - Click on **"Email"** in the left sidebar
   - Look for **"Send auto-reply email to submitter"**
   - Make sure it's **ENABLED** (toggle should be ON/green)

3. **Set Email Field:**
   - Look for **"Email field name"** or **"Reply-to field"**
   - Set it to: `email` (exactly this - lowercase)
   - OR if there's a dropdown, select the field that contains the email

4. **Save Settings:**
   - Click **"Save"** or **"Save template"**

### Still Not Working? Check These:

- [ ] **Spam Folder:** Check your spam/junk folder (wait 1-2 minutes)
- [ ] **Different Email:** Try submitting with a different email address
- [ ] **Template Saved:** Make sure email template is saved (not empty)
- [ ] **Email Template:** Make sure template includes `{{downloadUrl}}` if you want the link

### Test Right Now:

1. Submit form at: https://guides.govcongiants.org/cage-code#free-checklist
2. Wait 60 seconds
3. Check inbox AND spam folder
4. Try with a Gmail address if your main email isn't working

### FormSpark Email Settings Location:

```
FormSpark Dashboard
  └── Your Form (xP0d3G9C7)
      └── Email Tab
          ├── Send auto-reply email to submitter: [ENABLED]
          ├── Email field name: "email"
          └── Email Template: [Your template with {{downloadUrl}}]
```

---

## What Our Form Sends:

```json
{
  "email": "user@example.com",  ← FormSpark uses this field for auto-reply
  "downloadUrl": "https://guides.govcongiants.org/downloads/cage-code-checklist.pdf",
  "leadMagnet": "CAGE Code Requirements Checklist",
  "source": "GovCon Resources Site",
  "timestamp": "2025-12-04T..."
}
```

The email address is in the `email` field - FormSpark needs to be told to use this field.

---

## Need Help?

If still not working after checking all above:
1. Contact FormSpark support: https://formspark.io/support
2. Tell them: "Auto-reply emails not sending despite being enabled"
3. Share your form ID: `xP0d3G9C7`

