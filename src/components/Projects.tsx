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

const statusLabel: Record<string, { dot: string; text: string }> = {
  live: { dot: 'bg-status-live', text: 'Live' },
  'in-progress': { dot: 'bg-status-progress', text: 'In progress' },
  completed: { dot: 'bg-status-done', text: 'Completed' },
}

export default function Projects() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 })

  return (
    <section id="projects" className="py-24 md:py-32 px-8 md:px-12" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="text-[13px] text-text-muted tracking-wide mb-4">Portfolio</p>
          <h2 className="text-3xl md:text-4xl font-medium text-text-primary tracking-tight">
            Selected work
          </h2>
        </motion.div>

        {/* Projects list */}
        <div className="space-y-0">
          {projects.map((project, i) => {
            const status = statusLabel[project.status]
            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 * i, duration: 0.6 }}
                className="group border-t border-border py-10"
              >
                <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-6 md:gap-12">
                  {/* Left */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`w-1.5 h-1.5 rounded-full ${status.dot}`} />
                      <span className="text-[12px] text-text-muted tracking-wide">
                        {status.text}
                      </span>
                    </div>
                    <h3 className="text-xl font-medium text-text-primary group-hover:text-accent-light transition-colors duration-300 mb-4">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-4">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-[13px] text-text-muted hover:text-text-primary transition-colors"
                        >
                          <FaGithub size={14} />
                          Source
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[13px] text-text-muted hover:text-text-primary transition-colors"
                        >
                          Demo
                          <HiArrowUpRight size={12} />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Right */}
                  <div>
                    <p className="text-sm text-text-secondary leading-relaxed mb-6">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-[11px] text-text-muted border border-border rounded-full tracking-wide"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            )
          })}
          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  )
}
