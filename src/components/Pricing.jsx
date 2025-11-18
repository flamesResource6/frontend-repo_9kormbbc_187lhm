import React from 'react'

const tiers = [
  {
    name: 'Starter',
    price: 'KSh 2,500',
    period: 'per session',
    features: ['1x 60-min lesson', 'Beginner friendly', 'Pool access included']
  },
  {
    name: 'Progress',
    highlight: true,
    price: 'KSh 9,500',
    period: '4-session pack',
    features: ['4x 60-min lessons', 'Technique focus', 'Flexible scheduling']
  },
  {
    name: 'Family',
    price: 'KSh 18,000',
    period: '8-session pack',
    features: ['8x 60-min lessons', 'Up to 3 family members', 'Priority booking']
  }
]

const Pricing = () => {
  return (
    <section id="pricing" className="relative py-24 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Simple, transparent pricing</h2>
          <p className="text-slate-400 mt-3">Start with a single session or save with a pack. Book online in minutes.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map((t) => (
            <div key={t.name} className={`rounded-3xl border ${t.highlight ? 'bg-cyan-500 text-slate-900 border-cyan-300 shadow-[0_20px_80px_rgba(56,189,248,0.35)]' : 'bg-slate-900/60 text-white border-white/10'}`}>
              <div className="p-6">
                <h3 className={`font-semibold ${t.highlight ? 'text-slate-900' : 'text-white'}`}>{t.name}</h3>
                <div className="mt-4 flex items-end gap-2">
                  <span className="text-3xl font-bold">{t.price}</span>
                  <span className={`text-sm ${t.highlight ? 'text-slate-800' : 'text-slate-400'}`}>{t.period}</span>
                </div>
                <ul className="mt-6 space-y-2 text-sm">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <span className={`h-1.5 w-1.5 rounded-full ${t.highlight ? 'bg-slate-900' : 'bg-cyan-400'}`} />
                      <span className={`${t.highlight ? 'text-slate-900/80' : 'text-slate-300'}`}>{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <a href="#" onClick={(e)=>e.preventDefault()} className={`inline-flex w-full items-center justify-center rounded-xl px-4 py-2 font-semibold transition ${t.highlight ? 'bg-slate-900 text-white hover:bg-slate-800' : 'bg-cyan-500 text-slate-900 hover:bg-cyan-400'}`}>Book Now</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
