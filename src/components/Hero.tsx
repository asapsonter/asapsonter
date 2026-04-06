import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { HiArrowRight } from 'react-icons/hi'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-8 md:px-12 overflow-hidden">
      {/* Ambient vibranium glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] rounded-full bg-vibranium/[0.03] blur-[150px]" />
        <div className="absolute bottom-[10%] left-[5%] w-[400px] h-[400px] rounded-full bg-gold/[0.02] blur-[130px]" />
      </div>

      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-16 items-center">
          {/* Left content */}
          <div>
            {/* Status */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="flex items-center gap-3 mb-10"
            >
              <span className="w-2 h-2 rounded-full bg-naija-green pulse-live" />
              <span className="text-[13px] text-text-muted tracking-wide font-mono">
                Available for projects
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="font-heading text-5xl sm:text-6xl md:text-7xl font-bold text-text-primary leading-[1.05] tracking-tight mb-4"
            >
              Sam
              <br />
              <span className="vibranium-text">Sonter</span>
            </motion.h1>

            {/* Typing */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="mb-8 h-7 flex items-center gap-2"
            >
              <span className="w-4 h-[1px] bg-gold/40" />
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
                className="text-lg text-gold/70 font-light font-mono"
              />
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="text-text-secondary text-base leading-[1.8] max-w-lg mb-12"
            >
              Senior engineer with 8+ years building scalable systems across
              regulated industries. I work at the intersection of IoT, machine
              learning, and system integration — engineering intelligent solutions
              from Lagos to the world.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 }}
              className="flex flex-wrap items-center gap-4 mb-14"
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 px-7 py-3.5 bg-vibranium text-white text-sm font-medium rounded-full hover:bg-vibranium-light transition-all duration-300 hover:shadow-lg hover:shadow-vibranium/20"
              >
                View work
                <HiArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-border-gold text-gold text-sm rounded-full hover:bg-gold-dim hover:border-gold/30 transition-all duration-300"
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
                  className="text-text-muted hover:text-vibranium-light transition-colors duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right - Geometric tribal emblem */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 1.2, ease: 'easeOut' }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative w-[360px] h-[360px]">
              <svg viewBox="0 0 360 360" className="w-full h-full animate-[spin_60s_linear_infinite]">
                {/* Outer ring */}
                <path d="M180 20L340 180L180 340L20 180Z" fill="none" stroke="rgba(123,47,242,0.15)" strokeWidth="1" />
                <path d="M180 40L320 180L180 320L40 180Z" fill="none" stroke="rgba(212,168,67,0.1)" strokeWidth="0.5" />
                {/* Mid ring */}
                <path d="M180 70L290 180L180 290L70 180Z" fill="none" stroke="rgba(123,47,242,0.12)" strokeWidth="1" />
                <path d="M180 90L270 180L180 270L90 180Z" fill="none" stroke="rgba(0,135,81,0.08)" strokeWidth="0.5" />
                {/* Inner */}
                <path d="M180 110L250 180L180 250L110 180Z" fill="none" stroke="rgba(212,168,67,0.15)" strokeWidth="1" />
                <path d="M180 130L230 180L180 230L130 180Z" fill="none" stroke="rgba(123,47,242,0.2)" strokeWidth="1.5" />
                {/* Cross lines */}
                <line x1="180" y1="20" x2="180" y2="340" stroke="rgba(123,47,242,0.06)" strokeWidth="0.5" />
                <line x1="20" y1="180" x2="340" y2="180" stroke="rgba(123,47,242,0.06)" strokeWidth="0.5" />
                {/* Center dot */}
                <circle cx="180" cy="180" r="3" fill="rgba(212,168,67,0.4)" />
                <circle cx="180" cy="180" r="8" fill="none" stroke="rgba(212,168,67,0.15)" strokeWidth="0.5" />
              </svg>
              {/* Inner label */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="font-mono text-[11px] text-vibranium/40 tracking-[6px] uppercase">Build</div>
                  <div className="font-mono text-[11px] text-gold/30 tracking-[6px] uppercase mt-1">Deploy</div>
                  <div className="font-mono text-[11px] text-naija-green/30 tracking-[6px] uppercase mt-1">Scale</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
