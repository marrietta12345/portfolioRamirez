import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Twitter, Send, AlertCircle, CheckCircle } from 'lucide-react'
import { useState } from 'react'
import { sendContactEmail } from '../services/emailService'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    setError('')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError('Please fill in all fields')
      setLoading(false)
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address')
      setLoading(false)
      return
    }

    try {
      const result = await sendContactEmail(formData)

      if (result.success) {
        setSubmitted(true)
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => setSubmitted(false), 4000)
      } else {
        setError(result.message)
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again later.')
      console.error('Form submission error:', err)
    } finally {
      setLoading(false)
    }
  }

  const socials = [
    { icon: Github, label: 'GitHub', link: '#' },
    { icon: Linkedin, label: 'LinkedIn', link: '#' },
    { icon: Twitter, label: 'Twitter', link: '#' },
    { icon: Mail, label: 'Email', link: 'mailto:your@email.com' },
  ]

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Get In Touch</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-green-400 mx-auto"></div>
          <p className="text-gray-400 mt-6 text-lg">Let's create something amazing together</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-300 font-semibold mb-2">Name</label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-blue-400 focus:outline-none transition-colors"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-gray-300 font-semibold mb-2">Email</label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-blue-400 focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-gray-300 font-semibold mb-2">Message</label>
                <motion.textarea
                  whileFocus={{ scale: 1.02 }}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-blue-400 focus:outline-none transition-colors resize-none"
                  placeholder="Your message here..."
                ></motion.textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={loading}
                className="w-full px-8 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 disabled:bg-gray-600 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <div className="animate-spin">
                      <Send size={20} />
                    </div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </motion.button>
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400 flex items-center gap-3"
                >
                  <AlertCircle size={20} />
                  <span>{error}</span>
                </motion.div>
              )}
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400 flex items-center gap-3 text-center"
                >
                  <CheckCircle size={20} className="flex-shrink-0" />
                  <span>Message sent successfully! I'll get back to you soon.</span>
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Contact Info & Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-gray-800/50 p-8 rounded-lg border border-gray-700">
              <h3 className="text-2xl font-bold mb-6 text-blue-400">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Mail className="text-blue-400 mt-1" size={24} />
                  <div>
                    <p className="text-gray-400">Email</p>
                    <a href="mailto:your@email.com" className="text-white hover:text-blue-400 transition-colors">
                      your@email.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-white">Connect With Me</h3>
              <div className="grid grid-cols-2 gap-4">
                {socials.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-3 p-4 bg-gray-800/50 border border-gray-700 rounded-lg hover:border-blue-400 hover:bg-blue-500/10 transition-all"
                  >
                    <social.icon className="text-blue-400" size={24} />
                    <span className="text-gray-300 font-semibold">{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
