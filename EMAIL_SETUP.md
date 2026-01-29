# Email Integration Setup Guide

This portfolio now includes email integration using EmailJS, allowing you to receive contact form submissions directly to your Gmail inbox.

## Setup Instructions

### Step 1: Create an EmailJS Account

1. Visit [EmailJS](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

### Step 2: Add Gmail Service

1. In the EmailJS dashboard, go to **Email Services**
2. Click **Add Service**
3. Select **Gmail**
4. Follow the authentication process:
   - You'll be redirected to Google to authorize EmailJS
   - Make sure to allow EmailJS access to your Gmail
5. Copy your **Service ID** (looks like: `service_xxxxx`)

### Step 3: Create Email Template

1. Go to **Email Templates** in EmailJS dashboard
2. Click **Create New Template**
3. Set up your template with these variables:

**Template Name:** (e.g., "Contact Form Template")

**Template Content Example:**
```
Subject: New Contact Form Submission from {{user_name}}

Name: {{user_name}}
Email: {{user_email}}

Message:
{{message}}
```

**Important Variable Names:**
- `user_name` - Visitor's name
- `user_email` - Visitor's email
- `message` - Message content

4. Save the template and copy your **Template ID** (looks like: `template_xxxxx`)

### Step 4: Get Your Public Key

1. Go to **Account** → **API Keys**
2. Copy your **Public Key** (starts with `pk_...`)

### Step 5: Configure Environment Variables

1. Open the `.env` file in the project root
2. Replace the placeholder values with your actual credentials:

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxx
VITE_EMAILJS_PUBLIC_KEY=pk_xxxxx
VITE_TO_EMAIL=your-email@gmail.com
```

### Step 6: Restart Development Server

1. Stop the dev server (Ctrl+C)
2. Run `npm run dev` again
3. Test the contact form

## How It Works

1. User fills out the contact form on your portfolio
2. Form data is validated on the client-side
3. EmailJS sends the message to your Gmail via the configured service
4. You receive an email notification with the visitor's information
5. User gets a success confirmation message

## Features

✅ **Client-side only** - No backend server needed
✅ **Secure** - Your Gmail credentials stay safe with EmailJS
✅ **Free tier** - EmailJS provides a generous free plan (200 emails/month)
✅ **Form validation** - Email format and required fields checked
✅ **Error handling** - User-friendly error messages
✅ **Loading states** - Visual feedback during sending
✅ **Responsive** - Works on mobile and desktop

## Testing the Form

1. Go to your portfolio (http://localhost:5173)
2. Scroll to the Contact section
3. Fill in the form with test data
4. Click "Send Message"
5. Check your Gmail inbox for the message

## Troubleshooting

### "EmailJS is not configured" Error
- Make sure you've updated the `.env` file with correct credentials
- Restart the dev server after updating `.env`

### Email not arriving
- Check your Gmail spam/trash folder
- Verify the Template ID and Variable names match exactly
- Test with the EmailJS dashboard first

### Authentication Issues
- Make sure you authorized EmailJS in Google account settings
- You may need to allow less secure apps or use an app password

## Upgrade & Limits

**Free Tier:**
- 200 emails/month
- Perfect for portfolio contact forms

**Paid Plans:**
- Unlimited emails
- Additional features like email logs, etc.

## Alternative: Backend Email Service (Optional)

If you prefer a backend solution with more control, see `BACKEND_SETUP.md` for Node.js + Nodemailer setup.

## Security Notes

- Your public key is intentionally public (for client-side use)
- Sensitive credentials (Service ID, Template ID) are stored in `.env`
- Never commit `.env` to version control (it's in `.gitignore`)
- EmailJS handles Gmail authentication securely

## Support

- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [EmailJS Help Center](https://www.emailjs.com/support/)
