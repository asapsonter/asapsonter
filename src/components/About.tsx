import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const domains = [
  {
    number: '01',
    title: 'IoT Engineering',
    description:
      'Connected device ecosystems from embedded firmware to cloud telemetry. Hikvision AX PRO, RTSP streaming, MQTT, sensor networks, and edge computing.',
  },
  {
    number: '02',
    title: 'ML / AI',
    description:
      'Computer vision with YOLOv8, real-time object detection, OCR pipelines, and intelligent alerting systems that turn raw sensor data into decisions.',
  },
  {
    number: '03',
    title: 'System Integration',
    description:
      'Bridging hardware and software across complex stacks — REST, WebSockets, SCADA interfaces, and multi-protocol data orchestration at scale.',
  },
]

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="about" className="py-24 md:py-32 px-8 md:px-12" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="text-[13px] text-text-muted tracking-wide mb-4">About</p>
          <h2 className="text-3xl md:text-4xl font-medium text-text-primary tracking-tight leading-tight max-w-2xl">
            Engineering solutions where hardware meets intelligence
          </h2>
        </motion.div>

        {/* Domain rows */}
        <div className="space-y-0">
          {domains.map((domain, i) => (
            <motion.div
              key={domain.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 * i, duration: 0.6 }}
              className="group grid grid-cols-1 md:grid-cols-[80px_1fr_1.5fr] gap-4 md:gap-8 py-10 border-t border-border items-start"
            >
              <span className="text-[13px] text-text-muted font-mono">
                {domain.number}
              </span>
              <h3 className="text-lg font-medium text-text-primary group-hover:text-accent-light transition-colors duration-300">
                {domain.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {domain.description}
              </p>
            </motion.div>
          ))}
          <div className="border-t border-border" />
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-12"
        >
          {[
            { value: '8+', label: 'Years Experience' },
            { value: '30+', label: 'Projects Delivered' },
            { value: '10+', label: 'IoT Deployments' },
            { value: '99.9%', label: 'System Uptime' },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl md:text-4xl font-medium text-text-primary tracking-tight">
                {stat.value}
              </div>
              <div className="text-[13px] text-text-muted mt-2 tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
