import React from 'react'

const Navbar = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl bg-slate-900/70 backdrop-blur-md border border-white/10 shadow-lg">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-white font-bold shadow-md">SW</div>
              <span className="text-white font-semibold tracking-tight">Swimworld Kenya</span>
            </div>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <button onClick={() => scrollTo('about')} className="text-slate-200 hover:text-white transition">About</button>
              <button onClick={() => scrollTo('instructors')} className="text-slate-200 hover:text-white transition">Instructors</button>
              <button onClick={() => scrollTo('pricing')} className="text-slate-200 hover:text-white transition">Pricing</button>
              <button onClick={() => scrollTo('testimonials')} className="text-slate-200 hover:text-white transition">Testimonials</button>
            </nav>
            <div className="hidden md:block">
              <a href="#pricing" onClick={(e)=>{e.preventDefault();scrollTo('pricing')}} className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold px-4 py-2 transition shadow-[0_8px_30px_rgba(56,189,248,0.35)]">
                Book a Lesson
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
