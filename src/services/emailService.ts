import emailjs from '@emailjs/browser'
import {
  EMAILJS_PUBLIC_KEY,
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
  EMAIL_TEMPLATE_PARAMS,
} from '../config/emailConfig'

// Initialize EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY)

interface ContactFormData {
  name: string
  email: string
  message: string
}

export const sendContactEmail = async (formData: ContactFormData) => {
  try {
    // Validate that credentials are configured
    if (!EMAILJS_SERVICE_ID || EMAILJS_SERVICE_ID === 'YOUR_SERVICE_ID') {
      throw new Error(
        'EmailJS is not configured. Please set up your EmailJS credentials in the .env file.'
      )
    }

    // Send email through EmailJS
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        [EMAIL_TEMPLATE_PARAMS.from_name]: formData.name,
        [EMAIL_TEMPLATE_PARAMS.from_email]: formData.email,
        [EMAIL_TEMPLATE_PARAMS.message]: formData.message,
        to_email: EMAIL_TEMPLATE_PARAMS.to_email,
      },
      EMAILJS_PUBLIC_KEY
    )

    return {
      success: true,
      message: 'Email sent successfully!',
      id: response.status,
    }
  } catch (error) {
    console.error('Email sending failed:', error)
    return {
      success: false,
      message:
        error instanceof Error ? error.message : 'Failed to send email. Please try again.',
    }
  }
}
