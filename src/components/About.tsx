import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const domains = [
  {
    number: '01',
    title: 'IoT Engineering',
    icon: (
      <svg viewBox="0 0 40 40" className="w-10 h-10">
        <path d="M20 4L36 20L20 36L4 20Z" fill="none" stroke="currentColor" strokeWidth="1" />
        <path d="M20 12L28 20L20 28L12 20Z" fill="none" stroke="currentColor" strokeWidth="0.8" />
        <circle cx="20" cy="20" r="2" fill="currentColor" opacity="0.5" />
      </svg>
    ),
    description:
      'Connected device ecosystems from embedded firmware to cloud telemetry. Hikvision AX PRO, RTSP streaming, MQTT, sensor networks, and edge computing.',
  },
  {
    number: '02',
    title: 'ML / AI',
    icon: (
      <svg viewBox="0 0 40 40" className="w-10 h-10">
        <circle cx="20" cy="20" r="16" fill="none" stroke="currentColor" strokeWidth="1" />
        <circle cx="20" cy="20" r="8" fill="none" stroke="currentColor" strokeWidth="0.8" />
        <circle cx="20" cy="20" r="2" fill="currentColor" />
        <line x1="20" y1="4" x2="20" y2="36" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
        <line x1="4" y1="20" x2="36" y2="20" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
      </svg>
    ),
    description:
      'Computer vision with YOLOv8, real-time object detection, OCR pipelines, and intelligent alerting systems that transform raw sensor data into decisions.',
  },
  {
    number: '03',
    title: 'System Integration',
    icon: (
      <svg viewBox="0 0 40 40" className="w-10 h-10">
        <rect x="4" y="4" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1" />
        <rect x="12" y="12" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="0.8" />
        <line x1="4" y1="4" x2="12" y2="12" stroke="currentColor" strokeWidth="0.5" />
        <line x1="36" y1="4" x2="28" y2="12" stroke="currentColor" strokeWidth="0.5" />
        <line x1="4" y1="36" x2="12" y2="28" stroke="currentColor" strokeWidth="0.5" />
        <line x1="36" y1="36" x2="28" y2="28" stroke="currentColor" strokeWidth="0.5" />
      </svg>
    ),
    description:
      'Bridging hardware and software across complex stacks — REST, WebSockets, SCADA interfaces, and multi-protocol data orchestration at scale.',
  },
]

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="about" className="py-28 md:py-36 px-8 md:px-12" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="text-[13px] text-vibranium/60 tracking-[3px] mb-5 font-mono uppercase">About</p>
          <h2 className="font-heading text-3xl md:text-[42px] font-semibold text-text-primary tracking-tight leading-tight max-w-2xl">
            Engineering solutions where
            <span className="vibranium-text"> hardware meets intelligence</span>
          </h2>
          <p className="text-text-secondary mt-6 max-w-xl leading-[1.8]">
            Senior Software Engineer with 8+ years building scalable,
            high-availability systems across regulated industries. Now focused on
            the convergence of IoT, machine learning, and system integration.
          </p>
        </motion.div>

        {/* Domain cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {domains.map((domain, i) => (
            <motion.div
              key={domain.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 * i, duration: 0.6 }}
              className="wakanda-card p-8 relative geo-corner group"
            >
              <div className="text-vibranium/40 mb-6 group-hover:text-vibranium-light transition-colors duration-500">
                {domain.icon}
              </div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[12px] text-gold/30 font-mono">{domain.number}</span>
                <h3 className="font-heading text-lg font-semibold text-text-primary">
                  {domain.title}
                </h3>
              </div>
              <p className="text-sm text-text-secondary leading-[1.8]">
                {domain.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-12"
        >
          {[
            { value: '8+', label: 'Years Experience', accent: 'text-vibranium-light' },
            { value: '30+', label: 'Projects Delivered', accent: 'text-gold' },
            { value: '10+', label: 'IoT Deployments', accent: 'text-naija-green' },
            { value: '99.9%', label: 'System Uptime', accent: 'text-vibranium-light' },
          ].map((stat) => (
            <div key={stat.label}>
              <div className={`font-heading text-3xl md:text-4xl font-bold tracking-tight ${stat.accent}`}>
                {stat.value}
              </div>
              <div className="text-[13px] text-text-muted mt-2 tracking-wide font-mono">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
