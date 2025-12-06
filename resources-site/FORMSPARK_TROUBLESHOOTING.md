# FormSpark Auto-Reply Email Troubleshooting

## Quick Checklist

### 1. ✅ Enable Auto-Reply Email in FormSpark

Go to your FormSpark dashboard:
1. Select your form (ID: `xP0d3G9C7`)
2. Go to **"Email"** tab
3. Enable **"Send auto-reply email to submitter"**
4. Make sure the toggle is ON (green/enabled)

### 2. ✅ Set the Email Field Name

FormSpark needs to know which field contains the email address:

1. In FormSpark dashboard → **Email** tab
2. Look for **"Email field name"** or **"Reply-to field"**
3. Set it to: `email` (exactly this - lowercase, no spaces)

   OR if there's a dropdown, select the field that contains the email address.

### 3. ✅ Check Spam Folder

- Check your spam/junk folder
- Check promotions tab (if using Gmail)
- Wait 1-2 minutes after submission (emails aren't instant)

### 4. ✅ Whitelist FormSpark Email Addresses

Add these to your email whitelist/safe sender list:
- `noreply@formspark.io`
- `notifications@formspark.io`

### 5. ✅ Verify Email Template is Saved

1. Make sure your email template is saved (click "Save template")
2. Check that the template includes `{{downloadUrl}}` variable
3. Make sure template isn't empty

### 6. ✅ Test with Different Email

Try submitting the form with:
- A different email address
- A Gmail account
- A different email provider

---

## Common Issues & Solutions

### Issue: "I see submissions but no emails"

**Solution:** 
- Auto-reply might not be enabled
- Email field name might not be set correctly
- Check FormSpark dashboard → Email tab → "Send auto-reply email to submitter" is ON

### Issue: "Email goes to spam"

**Solution:**
- Add FormSpark email addresses to whitelist
- Use a professional email domain (not free email like Gmail for testing)
- Wait a few minutes and check spam folder

### Issue: "Email field not recognized"

**Solution:**
The form sends email in a field named `email`. Make sure FormSpark knows this:
- In Email settings, set "Email field name" to: `email`
- Or in form settings, make sure the field name matches

---

## FormSpark Settings to Check

### In FormSpark Dashboard:

1. **Form Settings → Email Tab:**
   - ✅ "Send auto-reply email to submitter" = **Enabled**
   - ✅ "Email field name" = **email** (or select from dropdown)
   - ✅ Email template is saved and not empty

2. **Form Settings → Fields:**
   - Verify that FormSpark recognizes the `email` field
   - If using form builder, make sure email field is marked as "Email" type

3. **Account Settings:**
   - Verify your FormSpark account email is verified
   - Check that your account isn't in test mode or limited mode

---

## How to Test

1. **Submit test form:**
   - Go to: https://guides.govcongiants.org/cage-code#free-checklist
   - Enter your email
   - Click Download

2. **Check immediately:**
   - Wait 30-60 seconds
   - Check inbox
   - Check spam folder

3. **Check FormSpark dashboard:**
   - Go to Submissions tab
   - Verify the submission was received
   - Check if email was sent (some dashboards show email status)

4. **Try different email:**
   - Use a Gmail account
   - Use a work email
   - See if any of them receive the email

---

## What Our Form Sends

Our form sends this data to FormSpark:
```json
{
  "email": "user@example.com",
  "leadMagnet": "CAGE Code Requirements Checklist",
  "downloadUrl": "https://guides.govcongiants.org/downloads/cage-code-checklist.pdf",
  "source": "GovCon Resources Site",
  "timestamp": "2025-12-04T..."
}
```

The email address is in the `email` field - make sure FormSpark is configured to use this field for auto-reply.

---

## Still Not Working?

1. **Contact FormSpark Support:**
   - Go to: https://formspark.io/support
   - Tell them: "Auto-reply emails not sending, but submissions are being received"
   - Share your form ID: `xP0d3G9C7`

2. **Alternative: Use Direct Download**
   - The form already downloads the PDF automatically when submitted
   - Users get immediate access even without email
   - You can still collect emails in FormSpark dashboard

3. **Check FormSpark Status:**
   - Visit: https://status.formspark.io
   - See if there are any service issues

---

## Quick Fix: Verify Configuration

Run through this checklist in order:

- [ ] FormSpark dashboard → Email tab → "Send auto-reply" is **ENABLED**
- [ ] Email field name is set to **"email"**
- [ ] Email template is saved and includes `{{downloadUrl}}`
- [ ] Checked spam folder
- [ ] Waited 1-2 minutes after submission
- [ ] Tried with different email address
- [ ] FormSpark account email is verified

