import React from 'react'

const testimonials = [
  {
    quote: 'My daughter went from fearing the water to swimming confidently in a month!',
    name: 'Grace M.',
    role: 'Parent'
  },
  {
    quote: 'The coaches are patient, professional, and make every session fun.',
    name: 'Daniel K.',
    role: 'Beginner Adult'
  },
  {
    quote: 'Great facilities and safety-first approach. Highly recommend!',
    name: 'Mwikali N.',
    role: 'Intermediate Swimmer'
  },
]

const Testimonials = () => {
  return (
    <section id="testimonials" className="relative py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white">What swimmers say</h2>
          <p className="text-slate-400 mt-3">Real stories from learners and families.</p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, idx) => (
            <div key={idx} className="rounded-3xl bg-slate-800/70 border border-white/10 p-6">
              <p className="text-slate-200">“{t.quote}”</p>
              <div className="mt-4 text-sm text-slate-400">— {t.name}, {t.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
