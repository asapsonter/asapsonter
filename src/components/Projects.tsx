import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGithub } from 'react-icons/fa'
import { HiArrowUpRight } from 'react-icons/hi2'

interface Project {
  title: string
  description: string
  tags: string[]
  github?: string
  live?: string
  status: 'live' | 'in-progress' | 'completed'
}

const projects: Project[] = [
  {
    title: 'Tower Guard — Seismic Sentinel Watch',
    description:
      'Real-time telecom tower monitoring and C2 system for infrastructure across Nigeria. AI-driven threat detection, Hikvision AX PRO integration, RTSP camera streaming, energy telemetry, and WebSocket-based live alerting.',
    tags: ['React', 'FastAPI', 'YOLOv8', 'OpenCV', 'WebSocket', 'Supabase', 'IoT'],
    github: 'https://github.com/asapsonter/seismic-sentinel-watch',
    status: 'live',
  },
  {
    title: 'AX Pro Event Poller',
    description:
      'Python-based real-time monitoring for Hikvision AX Pro alarm hubs. Polls zone status, tamper alerts, and siren events via ISAPI with HTTP digest authentication.',
    tags: ['Python', 'Hikvision ISAPI', 'IoT', 'REST'],
    github: 'https://github.com/asapsonter',
    status: 'completed',
  },
  {
    title: 'AI License Plate Recognition',
    description:
      'Edge-deployed computer vision pipeline using EasyOCR and YOLOv8 for real-time license plate detection from RTSP camera feeds.',
    tags: ['Python', 'EasyOCR', 'YOLOv8', 'OpenCV', 'RTSP'],
    status: 'in-progress',
  },
  {
    title: 'Solar Energy Telemetry Dashboard',
    description:
      'Real-time energy management interface monitoring solar output, battery cycles, and generator status across distributed telecom tower sites.',
    tags: ['React', 'TypeScript', 'Recharts', 'WebSocket', 'IoT'],
    status: 'in-progress',
  },
]

const statusConfig: Record<string, { dot: string; text: string; ring?: string }> = {
  live: { dot: 'bg-naija-green', text: 'Live', ring: 'pulse-live' },
  'in-progress': { dot: 'bg-gold', text: 'In progress' },
  completed: { dot: 'bg-vibranium', text: 'Completed' },
}

export default function Projects() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 })

  return (
    <section id="projects" className="py-28 md:py-36 px-8 md:px-12" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="text-[13px] text-vibranium/60 tracking-[3px] mb-5 font-mono uppercase">Portfolio</p>
          <h2 className="font-heading text-3xl md:text-[42px] font-semibold text-text-primary tracking-tight">
            Selected<span className="vibranium-text"> work</span>
          </h2>
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => {
            const status = statusConfig[project.status]
            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.12 * i, duration: 0.6 }}
                className="wakanda-card p-8 flex flex-col group relative geo-corner"
              >
                {/* Status + Links */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2.5">
                    <span className={`w-2 h-2 rounded-full ${status.dot} ${status.ring ?? ''}`} />
                    <span className="text-[12px] text-text-muted tracking-wide font-mono">
                      {status.text}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text-muted hover:text-vibranium-light transition-colors"
                        aria-label="GitHub"
                      >
                        <FaGithub size={15} />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text-muted hover:text-vibranium-light transition-colors"
                        aria-label="Live demo"
                      >
                        <HiArrowUpRight size={14} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-heading text-lg font-semibold text-text-primary group-hover:text-vibranium-light transition-colors duration-400 mb-4">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-text-secondary leading-[1.8] mb-8 flex-1">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-[11px] text-vibranium/60 border border-vibranium/10 rounded-full tracking-wide font-mono bg-vibranium-dim"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
