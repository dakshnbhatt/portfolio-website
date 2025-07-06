# Formspree Setup Instructions

## Step 1: Get Your Formspree Form ID

1. Go to [Formspree.io](https://formspree.io) and log in to your account
2. Create a new form or use an existing one
3. Copy your Form ID (it looks like `xpznvlnq` or similar)

## Step 2: Update Your Contact Form

1. Open `src/pages/Contact.tsx`
2. Find line 47 where it says `'https://formspree.io/f/YOUR_FORM_ID'`
3. Replace `YOUR_FORM_ID` with your actual Formspree form ID

For example, if your form ID is `xpznvlnq`, change:
```javascript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
```

To:
```javascript
const response = await fetch('https://formspree.io/f/xpznvlnq', {
```

## Step 3: Test Your Form

1. Save the file and test the form locally
2. Fill out the form and submit it
3. Check your Formspree dashboard to see if the submission appears
4. Check your email to see if you received the message

## Step 4: Optional - Customize Formspree Settings

In your Formspree dashboard, you can:
- Set up custom email templates
- Configure reply-to addresses
- Set up notifications
- Add spam protection
- Configure redirects after form submission

## Features Already Implemented

✅ Form validation (required fields, email format)
✅ Loading state during submission
✅ Success/error notifications
✅ Form reset after successful submission
✅ Proper error handling

## Troubleshooting

If you encounter issues:
1. Check that your Formspree form ID is correct
2. Ensure your Formspree account is active
3. Check browser console for any error messages
4. Verify that your form fields match what Formspree expects

## Security Notes

- The form uses HTTPS for secure transmission
- Formspree handles spam protection
- No sensitive data is stored in your frontend code
- All submissions are processed through Formspree's secure servers
