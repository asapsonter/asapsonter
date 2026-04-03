import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const skillGroups = [
  {
    title: 'IoT & Embedded',
    skills: ['Hikvision ISAPI / AX PRO', 'RTSP / MJPEG Streaming', 'MQTT / CoAP', 'Sensor Networks', 'Embedded C/C++'],
  },
  {
    title: 'ML / AI',
    skills: ['YOLOv8 / Computer Vision', 'Python / NumPy / Pandas', 'OpenCV', 'TensorFlow / PyTorch', 'EasyOCR / NLP'],
  },
  {
    title: 'Full-Stack',
    skills: ['React / TypeScript', 'FastAPI / Python', 'Node.js', 'PostgreSQL / Supabase', 'WebSockets / REST'],
  },
  {
    title: 'System Integration',
    skills: ['API Design & Integration', 'SCADA / Industrial Protocols', 'Multi-Protocol Orchestration', 'Redis / Message Queues', 'Docker / Linux / CI-CD'],
  },
]

export default function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="skills" className="py-24 md:py-32 px-8 md:px-12" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="text-[13px] text-text-muted tracking-wide mb-4">Tech Stack</p>
          <h2 className="text-3xl md:text-4xl font-medium text-text-primary tracking-tight">
            Tools & technologies
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * gi, duration: 0.6 }}
            >
              <h3 className="text-[13px] text-text-muted tracking-wide uppercase mb-6">
                {group.title}
              </h3>
              <ul className="space-y-0">
                {group.skills.map((skill, si) => (
                  <motion.li
                    key={skill}
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.1 * gi + 0.05 * si, duration: 0.4 }}
                    className="flex items-center gap-3 py-3 border-b border-border group"
                  >
                    <span className="w-1 h-1 rounded-full bg-text-muted group-hover:bg-text-primary transition-colors" />
                    <span className="text-sm text-text-secondary group-hover:text-text-primary transition-colors duration-300">
                      {skill}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
