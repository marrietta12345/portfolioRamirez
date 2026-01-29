# Backend Email Setup (Optional Alternative)

If you prefer a more traditional backend approach with Node.js and Nodemailer, follow this guide.

## Option A: Using Express + Nodemailer (Recommended for Production)

### Installation

1. Create a backend folder:
```bash
mkdir backend
cd backend
npm init -y
```

2. Install dependencies:
```bash
npm install express nodemailer cors dotenv body-parser
npm install --save-dev nodemon typescript @types/node
```

### Setup Express Server

Create `backend/index.js`:

```javascript
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173', // Your React app URL
  credentials: true
}));

// Create Nodemailer transporter for Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASSWORD // Use App Password, not regular password
  }
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({ 
        success: false, 
        message: 'Missing required fields' 
      });
    }

    // Send email to your Gmail
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER, // Send to yourself
      replyTo: email,
      subject: `New Portfolio Contact from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `
    });

    // Optional: Send confirmation email to visitor
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: email,
      subject: 'We received your message',
      html: `
        <h2>Thank you for reaching out!</h2>
        <p>Hi ${name},</p>
        <p>We've received your message and will get back to you as soon as possible.</p>
        <p>Best regards,<br>Your Portfolio Owner</p>
      `
    });

    res.json({ 
      success: true, 
      message: 'Email sent successfully' 
    });

  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to send email' 
    });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
```

### Backend Environment Setup

Create `backend/.env`:

```env
GMAIL_USER=your-email@gmail.com
GMAIL_PASSWORD=your-app-password
PORT=5000
```

### Get Gmail App Password

1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Enable 2-Factor Authentication
3. Go to "App passwords"
4. Select "Mail" and "Windows Computer"
5. Google will generate a 16-character password
6. Use this in `GMAIL_PASSWORD`

### Update React Contact Component

Create a new email service for backend:

```typescript
// src/services/emailServiceBackend.ts
export const sendContactEmail = async (formData: {
  name: string
  email: string
  message: string
}) => {
  try {
    const response = await fetch('http://localhost:5000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Failed to send email',
    };
  }
};
```

### Run Backend

```bash
cd backend
npm start
```

## Option B: Using Third-Party Services

### Alternatives to EmailJS:

1. **SendGrid**
   - Free tier: 100 emails/day
   - API-based, very reliable
   - https://sendgrid.com

2. **Mailgun**
   - Free tier: 5,000 emails/month
   - Great for developers
   - https://www.mailgun.com

3. **Postmark**
   - Free trial available
   - Excellent transactional email service
   - https://postmarkapp.com

4. **AWS SES**
   - Pay-as-you-go
   - Highly scalable
   - https://aws.amazon.com/ses/

## Deployment Considerations

### EmailJS (Client-side)
- **Pros:** No backend needed, easier deployment
- **Cons:** Public key visible, rate limited on free tier

### Backend with Nodemailer
- **Pros:** More secure, full control, unlimited emails
- **Cons:** Requires server deployment (Heroku, Railway, Render, etc.)

### Recommended Deployment Stacks:

**Frontend (Vercel/Netlify):**
- React portfolio on Vercel or Netlify (free tier available)

**Backend (Choose one):**
- [Railway.app](https://railway.app) - Simple, $5/month
- [Render](https://render.com) - Free tier available
- [Heroku](https://heroku.com) - Paid plans
- [AWS EC2](https://aws.amazon.com/ec2/) - Very scalable

## Comparison Table

| Feature | EmailJS | Backend (Nodemailer) |
|---------|---------|---------------------|
| Setup Difficulty | Easy | Medium |
| Cost | Free (200/mo) | Free (backend hosting) |
| Security | Good | Better |
| Scalability | Limited | Unlimited |
| Complexity | Low | Medium |
| Development Time | 10 mins | 30 mins |

## Recommendation

For a **portfolio**, start with **EmailJS**:
- Quick to set up
- Free tier is sufficient
- No backend infrastructure needed
- Easy to maintain

Switch to **backend** when:
- You need unlimited emails
- You want extra security
- You're building a real application
- You need email logging/analytics
