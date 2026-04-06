import { useEffect, useRef } from 'react'

export default function AdireBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number
    let time = 0

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resize()
    window.addEventListener('resize', resize)

    // Draw Adire-inspired concentric diamond patterns that pulse subtly
    const drawPattern = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      time += 0.003

      const spacing = 120
      const cols = Math.ceil(canvas.width / spacing) + 1
      const rows = Math.ceil(canvas.height / spacing) + 1

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const cx = c * spacing + (r % 2 === 0 ? 0 : spacing / 2)
          const cy = r * spacing

          // Pulse based on distance from center and time
          const distFromCenter = Math.sqrt(
            Math.pow((cx - canvas.width / 2) / canvas.width, 2) +
            Math.pow((cy - canvas.height / 2) / canvas.height, 2)
          )
          const pulse = Math.sin(time * 2 + distFromCenter * 8) * 0.5 + 0.5

          // Outer diamond
          ctx.beginPath()
          const s1 = 20 + pulse * 4
          ctx.moveTo(cx, cy - s1)
          ctx.lineTo(cx + s1, cy)
          ctx.lineTo(cx, cy + s1)
          ctx.lineTo(cx - s1, cy)
          ctx.closePath()
          ctx.strokeStyle = `rgba(123, 47, 242, ${0.03 + pulse * 0.015})`
          ctx.lineWidth = 0.5
          ctx.stroke()

          // Inner diamond
          ctx.beginPath()
          const s2 = 8 + pulse * 2
          ctx.moveTo(cx, cy - s2)
          ctx.lineTo(cx + s2, cy)
          ctx.lineTo(cx, cy + s2)
          ctx.lineTo(cx - s2, cy)
          ctx.closePath()
          ctx.strokeStyle = `rgba(212, 168, 67, ${0.02 + pulse * 0.01})`
          ctx.lineWidth = 0.5
          ctx.stroke()

          // Center dot
          ctx.beginPath()
          ctx.arc(cx, cy, 1, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(123, 47, 242, ${0.04 + pulse * 0.03})`
          ctx.fill()
        }
      }

      animationId = requestAnimationFrame(drawPattern)
    }

    drawPattern()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ opacity: 0.7 }}
    />
  )
}
