import { useState } from 'react'
import type { FormEvent } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { HiArrowUpRight } from 'react-icons/hi2'

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const mailto = `mailto:samuel.aarga@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${formData.email}`
    window.open(mailto)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="py-24 md:py-32 px-8 md:px-12" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="text-[13px] text-text-muted tracking-wide mb-4">Contact</p>
          <h2 className="text-3xl md:text-4xl font-medium text-text-primary tracking-tight max-w-lg">
            Let's build something together
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-16 md:gap-20">
          {/* Left - Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <p className="text-sm text-text-secondary leading-relaxed mb-10">
              Have a project in mind? Looking for an IoT/ML engineer to bring
              your vision to life? I'm always open to discussing new
              opportunities and challenging problems.
            </p>

            <div className="space-y-6 mb-10">
              <div>
                <p className="text-[13px] text-text-muted tracking-wide mb-1">Email</p>
                <a
                  href="mailto:samuel.aarga@gmail.com"
                  className="text-sm text-text-primary hover:text-accent-light transition-colors inline-flex items-center gap-1"
                >
                  samuel.aarga@gmail.com
                  <HiArrowUpRight size={12} className="text-text-muted" />
                </a>
              </div>
              <div>
                <p className="text-[13px] text-text-muted tracking-wide mb-1">Location</p>
                <p className="text-sm text-text-primary">Nigeria</p>
              </div>
            </div>

            <div className="flex items-center gap-5">
              {[
                { icon: <FaGithub size={16} />, href: 'https://github.com/asapsonter' },
                { icon: <FaLinkedin size={16} />, href: 'https://linkedin.com/in/aarga-sonter' },
                { icon: <FaXTwitter size={16} />, href: 'https://twitter.com/asapsonter' },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-muted hover:text-text-primary transition-colors duration-300"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label className="text-[13px] text-text-muted tracking-wide block mb-2">
                Name
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full bg-transparent border-b border-border px-0 py-3 text-sm text-text-primary focus:outline-none focus:border-text-muted transition-colors placeholder:text-text-muted/50"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-[13px] text-text-muted tracking-wide block mb-2">
                Email
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full bg-transparent border-b border-border px-0 py-3 text-sm text-text-primary focus:outline-none focus:border-text-muted transition-colors placeholder:text-text-muted/50"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="text-[13px] text-text-muted tracking-wide block mb-2">
                Message
              </label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full bg-transparent border-b border-border px-0 py-3 text-sm text-text-primary focus:outline-none focus:border-text-muted transition-colors resize-none placeholder:text-text-muted/50"
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              className="mt-4 px-8 py-3 bg-text-primary text-[#09090b] text-sm font-medium rounded-full hover:bg-text-secondary transition-colors duration-300"
            >
              {submitted ? 'Message sent' : 'Send message'}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
