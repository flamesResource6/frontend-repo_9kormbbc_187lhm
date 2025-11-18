import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Instructors from './components/Instructors'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 relative">
      <Navbar />
      <Hero />
      <About />
      <Instructors />
      <Pricing />
      <Testimonials />
      <footer className="py-10 border-t border-white/10 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">© {new Date().getFullYear()} Swimworld Kenya. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm">
            <a href="#pricing" onClick={(e)=>{e.preventDefault();document.getElementById('pricing')?.scrollIntoView({behavior:'smooth'})}} className="text-cyan-300 hover:text-cyan-200">Book a Lesson</a>
            <a href="#about" onClick={(e)=>{e.preventDefault();document.getElementById('about')?.scrollIntoView({behavior:'smooth'})}} className="text-slate-400 hover:text-white">About</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
