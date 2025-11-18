import React from 'react'
import Spline from '@splinetool/react-spline'

const Hero = () => {
  const scrollToPricing = () => {
    const el = document.getElementById('pricing')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="relative min-h-[90vh] pt-24 overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/poZi6bJ4-Htwt04i/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/30 via-slate-950/50 to-slate-950 pointer-events-none" />
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-400/10 text-cyan-200 px-3 py-1 text-xs">Certified Coaches • Safe Training • All Ages</span>
            <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
              Dive into confidence with Kenya’s leading swim school
            </h1>
            <p className="mt-4 text-lg text-slate-200/90">
              Personalized lessons from certified instructors, modern facilities, and a supportive, safety-first environment.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <button onClick={scrollToPricing} className="rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold px-6 py-3 transition shadow-[0_8px_30px_rgba(56,189,248,0.35)]">Book Your First Lesson</button>
              <a href="#instructors" onClick={(e)=>{e.preventDefault(); document.getElementById('instructors')?.scrollIntoView({behavior:'smooth'})}} className="rounded-xl ring-1 ring-white/20 text-white hover:bg-white/10 px-6 py-3 transition">Meet our instructors</a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 h-48 w-[120%] bg-gradient-to-t from-cyan-500/10 to-transparent blur-2xl pointer-events-none" />
    </section>
  )
}

export default Hero
