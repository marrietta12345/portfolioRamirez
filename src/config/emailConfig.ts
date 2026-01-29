// EmailJS Configuration
// To use EmailJS, follow these steps:
// 1. Sign up at https://www.emailjs.com/
// 2. Create an email service (Gmail, Outlook, etc.)
// 3. Create an email template
// 4. Replace the values below with your actual credentials

export const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID'
export const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID'
export const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY'

// Email template parameters
// Make sure these match your EmailJS template variable names
export const EMAIL_TEMPLATE_PARAMS = {
  to_email: import.meta.env.VITE_TO_EMAIL || 'your-email@gmail.com', // Your Gmail address
  from_name: 'user_name', // Template variable name
  from_email: 'user_email', // Template variable name
  message: 'message', // Template variable name
}
