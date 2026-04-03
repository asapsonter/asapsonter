import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { HiArrowRight } from 'react-icons/hi'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-end md:items-center pb-24 md:pb-0 px-8 md:px-12 overflow-hidden">
      {/* Subtle ambient gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[40%] -right-[20%] w-[700px] h-[700px] rounded-full bg-white/[0.015] blur-[120px]" />
        <div className="absolute -bottom-[30%] -left-[10%] w-[500px] h-[500px] rounded-full bg-white/[0.01] blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto w-full">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-status-live" />
            <span className="text-[13px] text-text-muted tracking-wide">
              Available for projects
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-text-primary leading-[1.1] tracking-tight mb-6"
          >
            Sam Sonter
          </motion.h1>

          {/* Typing role */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mb-8 h-7"
          >
            <TypeAnimation
              sequence={[
                'IoT Systems Engineer',
                3000,
                'ML / AI Developer',
                3000,
                'System Integration Specialist',
                3000,
                'Full-Stack Engineer',
                3000,
              ]}
              speed={40}
              repeat={Infinity}
              className="text-lg md:text-xl text-text-muted font-light"
            />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="text-text-secondary text-base md:text-lg leading-relaxed max-w-xl mb-12"
          >
            Senior engineer with 8+ years building scalable systems. I work at
            the intersection of IoT, machine learning, and system
            integration — turning complex hardware-software challenges into
            production-ready solutions.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 }}
            className="flex flex-wrap items-center gap-4 mb-16"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-text-primary text-[#09090b] text-sm font-medium rounded-full hover:bg-text-secondary transition-colors duration-300"
            >
              View work
              <HiArrowRight size={14} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border text-text-secondary text-sm rounded-full hover:border-border-hover hover:text-text-primary transition-all duration-300"
            >
              Contact me
            </a>
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
            className="flex items-center gap-5"
          >
            {[
              { icon: <FaGithub size={17} />, href: 'https://github.com/asapsonter', label: 'GitHub' },
              { icon: <FaLinkedin size={17} />, href: 'https://linkedin.com/in/aarga-sonter', label: 'LinkedIn' },
              { icon: <FaXTwitter size={17} />, href: 'https://twitter.com/asapsonter', label: 'X' },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-text-muted hover:text-text-primary transition-colors duration-300"
              >
                {social.icon}
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
