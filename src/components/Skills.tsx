import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const skillGroups = [
  {
    title: 'IoT & Embedded',
    accent: 'border-naija-green/20',
    dotColor: 'bg-naija-green/50',
    skills: ['Hikvision ISAPI / AX PRO', 'RTSP / MJPEG Streaming', 'MQTT / CoAP', 'Sensor Networks', 'Embedded C/C++'],
  },
  {
    title: 'ML / AI',
    accent: 'border-vibranium/20',
    dotColor: 'bg-vibranium/50',
    skills: ['YOLOv8 / Computer Vision', 'Python / NumPy / Pandas', 'OpenCV', 'TensorFlow / PyTorch', 'EasyOCR / NLP'],
  },
  {
    title: 'Full-Stack',
    accent: 'border-gold/20',
    dotColor: 'bg-gold/50',
    skills: ['React / TypeScript', 'FastAPI / Python', 'Node.js', 'PostgreSQL / Supabase', 'WebSockets / REST'],
  },
  {
    title: 'System Integration',
    accent: 'border-vibranium/20',
    dotColor: 'bg-vibranium-light/50',
    skills: ['API Design & Integration', 'SCADA / Industrial Protocols', 'Multi-Protocol Orchestration', 'Redis / Message Queues', 'Docker / Linux / CI-CD'],
  },
]

export default function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="skills" className="py-28 md:py-36 px-8 md:px-12" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="text-[13px] text-vibranium/60 tracking-[3px] mb-5 font-mono uppercase">Tech Stack</p>
          <h2 className="font-heading text-3xl md:text-[42px] font-semibold text-text-primary tracking-tight">
            Tools &<span className="vibranium-text"> technologies</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * gi, duration: 0.6 }}
              className={`wakanda-card p-7 border-l-2 ${group.accent}`}
            >
              <h3 className="text-[13px] text-text-muted tracking-[3px] uppercase mb-5 font-mono">
                {group.title}
              </h3>
              <ul className="space-y-0">
                {group.skills.map((skill, si) => (
                  <motion.li
                    key={skill}
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.1 * gi + 0.06 * si, duration: 0.4 }}
                    className="flex items-center gap-3 py-3.5 border-b border-border/50 last:border-b-0 group"
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${group.dotColor} group-hover:scale-150 transition-transform duration-300`} />
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
