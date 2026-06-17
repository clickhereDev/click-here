import { useState } from 'react'
import { Compass, Hammer, Users, Briefcase, ChevronDown } from 'lucide-react'
import { useApp } from '../context/AppContext'

const steps = [
  {
    step: 1,
    titleKey: 'method.step1',
    descKey: 'method.step1.desc',
    icon: Compass,
    color: 'from-blue-500/20 to-blue-500/5',
    iconBg: 'bg-blue-500/20 text-blue-400',
  },
  {
    step: 2,
    titleKey: 'method.step2',
    descKey: 'method.step2.desc',
    icon: Hammer,
    color: 'from-accent/20 to-accent/5',
    iconBg: 'bg-accent/20 text-accent',
  },
  {
    step: 3,
    titleKey: 'method.step3',
    descKey: 'method.step3.desc',
    icon: Users,
    color: 'from-green-500/20 to-green-500/5',
    iconBg: 'bg-green-500/20 text-green-400',
  },
  {
    step: 4,
    titleKey: 'method.step4',
    descKey: 'method.step4.desc',
    icon: Briefcase,
    color: 'from-purple-500/20 to-purple-500/5',
    iconBg: 'bg-purple-500/20 text-purple-400',
  },
]

export default function Blueprint() {
  const { t } = useApp()
  const [activeStep, setActiveStep] = useState(null)

  return (
    <section id="methodology" className="py-16 sm:py-20 lg:py-24 bg-dark-secondary" aria-label={t('method.title')}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-heading mb-4">
            {t('method.title')} <span className="text-primary">{t('method.title.primary')}</span>
            <span className="text-accent">{t('method.title.accent')}</span>
          </h2>
          <p className="text-muted text-base sm:text-lg max-w-2xl mx-auto">
            {t('method.sub')}
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-24 left-[15%] right-[15%] h-0.5 bg-gray-200 dark:bg-white/10">
            <div className="absolute left-0 top-0 h-full w-0 bg-primary transition-all duration-700" style={{ width: activeStep ? `${(activeStep) * 25}%` : '0%' }} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, idx) => {
              const Icon = step.icon
              const isActive = activeStep === idx

              return (
                <article
                  key={step.step}
                  className="group relative bg-dark border border-gray-200 dark:border-white/10 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:scale-105 hover:border-gray-300 dark:hover:border-white/30 cursor-pointer overflow-hidden"
                  onMouseEnter={() => setActiveStep(idx)}
                  onMouseLeave={() => setActiveStep(null)}
                  onClick={() => setActiveStep(isActive ? null : idx)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setActiveStep(isActive ? null : idx) } }}
                  aria-expanded={isActive}
                  aria-label={`${t('method.step.label')} ${step.step}: ${t(step.titleKey)}`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="w-10 h-10 rounded-full bg-primary/20 text-primary font-extrabold flex items-center justify-center text-lg">
                        {step.step}
                      </span>
                      <span className="text-xs text-dim font-medium">{t('method.step.label')} {step.step}</span>
                    </div>

                    <div className={`inline-flex p-3 rounded-xl ${step.iconBg} mb-4 transition-transform duration-300 ${isActive ? 'scale-110' : ''}`}>
                      <Icon size={24} />
                    </div>

                    <h3 className="text-lg font-bold text-heading mb-3">{t(step.titleKey)}</h3>

                    <div className={`overflow-hidden transition-all duration-300 ${isActive ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <p className="text-muted text-sm leading-relaxed">{t(step.descKey)}</p>
                    </div>

                    {!isActive && (
                      <p className="text-dim text-sm leading-relaxed line-clamp-2">{t(step.descKey)}</p>
                    )}

                    <div className="flex items-center gap-1 mt-4 text-dim group-hover:text-accent transition-colors text-xs">
                      <ChevronDown size={14} className={`transition-transform duration-300 ${isActive ? 'rotate-180' : ''}`} />
                      <span>{isActive ? t('method.collapse') : t('method.readmore')}</span>
                    </div>

                    <div className="mt-4 h-0.5 w-0 group-hover:w-full bg-accent/50 transition-all duration-300 rounded-full" />
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
