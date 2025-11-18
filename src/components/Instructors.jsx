import React from 'react'

const instructors = [
  {
    name: 'Coach Aisha',
    title: 'Head Coach • Open Water Specialist',
    img: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=800&auto=format&fit=crop',
    badges: ['WSA Certified', 'First Aid & CPR', '10+ yrs experience']
  },
  {
    name: 'Coach Brian',
    title: 'Technique & Stroke Development',
    img: 'https://images.unsplash.com/photo-1483721310020-03333e577078?q=80&w=800&auto=format&fit=crop',
    badges: ['Level 2 Swim Coach', 'Lifeguard', 'Kids Specialist']
  },
  {
    name: 'Coach Njeri',
    title: 'Beginner Programs & Water Safety',
    img: 'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?q=80&w=800&auto=format&fit=crop',
    badges: ['Aquatics Instructor', 'Infant Swim', 'Adaptive Lessons']
  },
]

const Instructors = () => {
  return (
    <section id="instructors" className="relative py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex items-end justify-between gap-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Meet Our Instructors</h2>
          <p className="text-slate-400 max-w-xl">Every instructor is certified, empathetic, and passionate about helping you feel confident in the water.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {instructors.map((i) => (
            <div key={i.name} className="rounded-3xl overflow-hidden border border-white/10 bg-slate-900/60">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={i.img} alt={i.name} className="h-full w-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-white font-semibold text-lg">{i.name}</h3>
                <p className="text-slate-400 text-sm">{i.title}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {i.badges.map((b) => (
                    <span key={b} className="text-xs rounded-full bg-cyan-400/10 text-cyan-300 border border-cyan-300/20 px-2 py-1">{b}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Instructors
