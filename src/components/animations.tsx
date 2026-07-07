'use client'
import React, { useEffect, useRef } from 'react'

export function DotWave({ gap = 24, amp = 14, alpha = 1 }: { gap?: number; amp?: number; alpha?: number }) {
  const ref = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    const c = ref.current
    if (!c) return
    const ctx = c.getContext('2d')
    if (!ctx) return
    let run = true
    const fit = () => {
      const r = c.getBoundingClientRect()
      c.width = Math.max(2, r.width * 2)
      c.height = Math.max(2, r.height * 2)
    }
    fit()
    const ro = new ResizeObserver(fit)
    ro.observe(c)
    const g = gap * 2
    const a2 = amp * 2
    let t = Math.random() * 100
    const draw = () => {
      if (!run) return
      t += 0.012
      const w = c.width
      const h = c.height
      ctx.clearRect(0, 0, w, h)
      for (let x = g / 2; x < w; x += g) {
        for (let y = g / 2; y < h; y += g) {
          const n =
            Math.sin(x * 0.0022 + t * 1.6) +
            Math.sin(y * 0.0035 - t) +
            Math.sin((x + y) * 0.0016 + t * 0.7)
          const r = 0.9 + (n + 3) * 0.75
          const al = (0.05 + (n + 3) * 0.075) * alpha
          ctx.beginPath()
          ctx.arc(x, y + Math.sin(x * 0.003 + t * 1.6 + y * 0.0012) * a2, r, 0, 6.2832)
          ctx.fillStyle = 'rgba(159,217,198,' + al.toFixed(3) + ')'
          ctx.fill()
        }
      }
      requestAnimationFrame(draw)
    }
    draw()
    return () => {
      run = false
      ro.disconnect()
    }
  }, [gap, amp, alpha])
  return (
    <canvas
      ref={ref}
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block' }}
    />
  )
}

export function LineWave({ strands = 14, color = '10,74,63' }: { strands?: number; color?: string }) {
  const ref = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    const c = ref.current
    if (!c) return
    const ctx = c.getContext('2d')
    if (!ctx) return
    let run = true
    const fit = () => {
      const r = c.getBoundingClientRect()
      c.width = Math.max(2, r.width * 2)
      c.height = Math.max(2, r.height * 2)
    }
    fit()
    const ro = new ResizeObserver(fit)
    ro.observe(c)
    let t = Math.random() * 100
    const draw = () => {
      if (!run) return
      t += 0.008
      const w = c.width
      const h = c.height
      ctx.clearRect(0, 0, w, h)
      for (let i = 0; i < strands; i++) {
        ctx.beginPath()
        const base = h * 0.5 + (i - strands / 2) * (h / (strands * 1.6))
        for (let x = 0; x <= w; x += 16) {
          const y =
            base +
            Math.sin(x * 0.0035 + t * 1.4 + i * 0.28) * h * 0.22 * Math.sin((x / w) * Math.PI)
          if (x === 0) ctx.moveTo(x, y)
          else ctx.lineTo(x, y)
        }
        ctx.strokeStyle = 'rgba(' + color + ',' + (0.1 + 0.4 * (i / strands)).toFixed(3) + ')'
        ctx.lineWidth = 1.4
        ctx.stroke()
      }
      requestAnimationFrame(draw)
    }
    draw()
    return () => {
      run = false
      ro.disconnect()
    }
  }, [strands, color])
  return (
    <canvas
      ref={ref}
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block' }}
    />
  )
}

export function Rosette({ count = 20, stroke = 'rgba(14,107,90,.3)' }: { count?: number; stroke?: string }) {
  const kids = []
  for (let i = 0; i < count; i++) {
    kids.push(
      <div
        key={i}
        style={{
          position: 'absolute',
          left: '20%',
          top: '20%',
          width: '60%',
          height: '60%',
          border: '1px solid ' + stroke,
          borderRadius: '50%',
          transform: 'rotate(' + (i * 360) / count + 'deg) translateX(26%)',
        }}
      />,
    )
  }
  return (
    <div style={{ position: 'absolute', inset: 0, animation: 'acv-spin 180s linear infinite' }}>
      {kids}
    </div>
  )
}
