import React from 'react'

const About = () => {
  return (
    <section id="about" className="relative py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">About Swimworld Kenya</h2>
            <p className="mt-4 text-slate-300 leading-relaxed">
              We’re on a mission to make swimming safe, fun, and accessible for everyone. From beginners taking their first strokes to athletes refining technique, our certified coaches tailor every session to your goals.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-slate-900/60 border border-white/10 p-5">
                <p className="text-cyan-300 font-semibold">Certified & Vetted</p>
                <p className="text-slate-400 text-sm mt-1">All instructors are internationally certified and background-checked.</p>
              </div>
              <div className="rounded-2xl bg-slate-900/60 border border-white/10 p-5">
                <p className="text-cyan-300 font-semibold">Safety First</p>
                <p className="text-slate-400 text-sm mt-1">Lifeguard supervision, safety drills, and proper progression.</p>
              </div>
              <div className="rounded-2xl bg-slate-900/60 border border-white/10 p-5">
                <p className="text-cyan-300 font-semibold">Flexible Scheduling</p>
                <p className="text-slate-400 text-sm mt-1">Weekday, weekend, and after-school sessions available.</p>
              </div>
              <div className="rounded-2xl bg-slate-900/60 border border-white/10 p-5">
                <p className="text-cyan-300 font-semibold">All Ages Welcome</p>
                <p className="text-slate-400 text-sm mt-1">From toddlers to adults—learn at your pace, your way.</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-cyan-500/10 to-blue-500/10">
              <img src="https://images.unsplash.com/photo-1509600110300-21b9d5fedeb7?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxQb29sfGVufDB8MHx8fDE3NjM0NzgyNTl8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Pool" className="h-full w-full object-cover mix-blend-overlay opacity-80" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
