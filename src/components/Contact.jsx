// components/Contact.jsx
import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const formRef = useRef();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // ✅ YOUR ACTUAL CREDENTIALS - ALL SET!
    const emailJsConfig = {
      serviceId: 'service_q9ral8t',
      templateId: 'template_60qmmc6', 
      publicKey: 'aAJ5SLhkczdN3Q9am',
    };

    try {
      const result = await emailjs.sendForm(
        emailJsConfig.serviceId,
        emailJsConfig.templateId,
        formRef.current,
        emailJsConfig.publicKey
      );

      console.log('Email sent successfully:', result);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'meryemebrahim.46@gmail.com',
      link: 'mailto:meryemebrahim.46@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+251 965 71 74 83',
      link: 'tel:+251965717483'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Hawassa University, Ethiopia',
      link: 'https://maps.google.com/?q=Hawassa,Ethiopia'
    },
    {
      icon: MessageCircle,
      label: 'Social',
      value: 'Connect with me',
      links: [
        { icon: Github, url: 'https://github.com/meryem-hub', label: 'GitHub' },
        { icon: Linkedin, url: 'https://linkedin.com/in/meryem-hub', label: 'LinkedIn' },
        { icon: Send, url: 'https://t.me/Leyan_leyuna', label: 'Telegram' }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="contact" className="relative py-20 bg-gradient-to-br from-[#0a0a0a] via-[#111] to-[#1a1a2e] overflow-hidden">
      
      {/* Floating Success Modal */}
      {submitStatus === 'success' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
          onClick={() => setSubmitStatus(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] border border-[#FFD700]/30 rounded-2xl p-8 mx-4 max-w-md text-center shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Animated Checkmark */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="w-20 h-20 bg-gradient-to-r from-[#FFD700] to-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <motion.svg
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="w-10 h-10 text-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </motion.svg>
            </motion.div>

            <h3 className="text-2xl font-bold text-white mb-3">Message Sent! 🎉</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Thank you for reaching out! I've received your message and will get back to you within 24 hours.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSubmitStatus(null)}
              className="bg-gradient-to-r from-[#FFD700] to-yellow-400 text-black font-bold py-3 px-8 rounded-lg hover:shadow-2xl hover:shadow-yellow-400/25 transition-all duration-300"
            >
              Awesome, Thanks!
            </motion.button>
          </motion.div>
        </motion.div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-6"
          >
            <MessageCircle className="text-[#FFD700] text-lg" />
            <span className="text-sm font-medium text-gray-300">Get In Touch</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-[#FFD700] via-yellow-300 to-[#FFD700] bg-clip-text text-transparent">
              Contact Me
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            Let's discuss your next project, collaborate on something amazing, 
            or just have a chat about technology and innovation.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8"
          >
            <motion.div
              variants={itemVariants}
              className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                I'm always open to discussing new opportunities, innovative projects, 
                or potential collaborations. Whether you're a company looking to hire, 
                a developer wanting to collaborate, or just someone who wants to chat 
                about tech, I'd love to hear from you!
              </p>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={item.label}
                    variants={itemVariants}
                    className="flex items-start gap-4 group cursor-pointer"
                  >
                    <div className="p-3 bg-gradient-to-r from-[#FFD700] to-yellow-400 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="w-5 h-5 text-black" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-semibold mb-1">{item.label}</h4>
                      {item.links ? (
                        <div className="flex gap-4 mt-2">
                          {item.links.map((social) => (
                            <motion.a
                              key={social.label}
                              href={social.url}
                              whileHover={{ scale: 1.1, y: -2 }}
                              whileTap={{ scale: 0.95 }}
                              className="p-2 bg-white/5 rounded-lg border border-white/10 hover:border-[#FFD700]/30 hover:bg-white/10 transition-all duration-300"
                              title={social.label}
                            >
                              <social.icon className="w-4 h-4 text-gray-300 hover:text-[#FFD700] transition-colors duration-300" />
                            </motion.a>
                          ))}
                        </div>
                      ) : (
                        <a
                          href={item.link}
                          className="text-gray-400 hover:text-[#FFD700] transition-colors duration-300"
                        >
                          {item.value}
                        </a>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Availability Status */}
            <motion.div
              variants={itemVariants}
              className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6"
            >
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                <div>
                  <h4 className="text-white font-semibold">Currently Available</h4>
                  <p className="text-gray-400 text-sm">For freelance projects and collaborations</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>
            
            {/* Error Message Only - Success message removed from here */}
            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400"
              >
                ❌ Failed to send message. Please try again or contact me directly via email.
              </motion.div>
            )}
            
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#FFD700] transition-all duration-300"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#FFD700] transition-all duration-300"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#FFD700] transition-all duration-300"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#FFD700] transition-all duration-300 resize-none"
                  placeholder="Tell me about your project or just say hello..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className="w-full bg-gradient-to-r from-[#FFD700] to-yellow-400 text-black font-bold py-4 px-6 rounded-lg hover:shadow-2xl hover:shadow-yellow-400/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">
            Prefer a more direct approach? Reach out on any platform!
          </p>
          <div className="flex justify-center gap-6">
            {contactInfo.find(item => item.label === 'Social').links.map((social) => (
              <motion.a
                key={social.label}
                href={social.url}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="p-4 bg-white/5 rounded-xl border border-white/10 hover:border-[#FFD700]/30 hover:bg-white/10 transition-all duration-300 group"
                title={social.label}
              >
                <social.icon className="w-6 h-6 text-gray-300 group-hover:text-[#FFD700] transition-colors duration-300" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12 mb-6"
        >
          <p className="text-gray-500 italic text-sm max-w-xl mx-auto mb-3">
  "Think. Code. Deploy. Repeat."
          </p>
          <div className="border-t border-white/10 pt-4">
            <p className="text-gray-400 text-xs">
              © 2025 Meryem Ebrahim • Built with passion in Ethiopia
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;