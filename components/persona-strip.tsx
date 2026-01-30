"use client"

import { useEffect, useRef } from "react"

export function PersonaStrip() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let phase = 0
    let animationId: number

    function setSize() {
      if (!canvas) return
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const rect = canvas.parentElement?.getBoundingClientRect()
      if (!rect) return

      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      canvas.style.width = `${rect.width}px`
      canvas.style.height = `${rect.height}px`
    }

    function draw() {
      if (!canvas || !ctx) return
      const rw = canvas.width
      const rh = canvas.height

      ctx.setTransform(1, 0, 0, 1, 0, 0)
      ctx.clearRect(0, 0, rw, rh)

      const x0 = rw * 0.9 + phase * 0.25
      const y0 = -rh * 0.1
      const x1 = rw * 0.1 - phase * 0.25
      const y1 = rh * 1.1
      const g = ctx.createLinearGradient(x0, y0, x1, y1)

      const stops = [
        [0, 20, 59, 34, 0.95],
        [0.15, 27, 190, 144, 0.7],
        [0.3, 184, 115, 51, 0.6],
        [0.45, 59, 34, 20, 0.75],
        [0.6, 255, 255, 240, 0.5],
        [0.75, 0, 0, 0, 0.85],
        [0.9, 20, 59, 34, 0.8],
        [1, 27, 190, 144, 0.65],
      ]
      for (const s of stops) {
        g.addColorStop(s[0], `rgba(${s[1]},${s[2]},${s[3]},${s[4]})`)
      }
      ctx.fillStyle = g
      ctx.fillRect(0, 0, rw, rh)

      const x0b = rw * 0.75 - phase * 0.15
      const y0b = rh * 0.15
      const x1b = rw * 0.25 + phase * 0.15
      const y1b = rh * 0.85
      const g2 = ctx.createLinearGradient(x0b, y0b, x1b, y1b)
      g2.addColorStop(0, "rgba(27,190,144,0.28)")
      g2.addColorStop(0.35, "rgba(184,115,51,0.2)")
      g2.addColorStop(0.65, "rgba(59,34,20,0.22)")
      g2.addColorStop(1, "rgba(20,59,34,0.3)")
      ctx.fillStyle = g2
      ctx.fillRect(0, 0, rw, rh)
    }

    function tick() {
      phase += 0.15
      if (phase > 200) phase = 0
      draw()
      animationId = requestAnimationFrame(tick)
    }

    setSize()
    window.addEventListener("resize", setSize)
    animationId = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener("resize", setSize)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <section
      className="relative overflow-hidden border-t border-white/10 bg-[#143b22] py-10"
      aria-label="Who are you?"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto max-w-[1200px] px-6">
        <h2 className="mb-8 text-center font-sans text-xl font-semibold text-[#fffff0]">
          Who are you?
        </h2>
        <div className="mx-auto grid max-w-[900px] gap-8 md:grid-cols-2">
          <div className="rounded-md border border-[#3b2214] bg-black/35 p-8">
            <h3 className="mb-2 font-sans text-base font-semibold text-[#1bbe90]">
              I lead a team in a larger org
            </h3>
            <p className="text-[15px] leading-normal text-[#fffff0]">
              I need strategic validation and justification for a product or innovation
              initiative—and extra capacity from someone who can both think and execute.
            </p>
          </div>
          <div className="rounded-md border border-[#3b2214] bg-black/35 p-8">
            <h3 className="mb-2 font-sans text-base font-semibold text-[#1bbe90]">
              {"I'm a founder with early product-market fit"}
            </h3>
            <p className="text-[15px] leading-normal text-[#fffff0]">
              {"We're seeing traction, but our product and GTM are still ad hoc. I need help systematizing sales, revenue ops, and product so we can scale."}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
