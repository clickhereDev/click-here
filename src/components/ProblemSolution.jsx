import { X, Check, GraduationCap, Lightbulb, Users, Sparkles } from 'lucide-react'
import { useApp } from '../context/AppContext'

export default function ProblemSolution() {
  const { t, language } = useApp()

  const comparisons = [
    {
      painKey: 'about.pain1',
      painDescKey: 'about.pain1.desc',
      solutionKey: 'about.solution1',
      solutionDescKey: 'about.solution1.desc',
      painIcon: GraduationCap,
      solutionIcon: Lightbulb,
    },
    {
      painKey: 'about.pain2',
      painDescKey: 'about.pain2.desc',
      solutionKey: 'about.solution2',
      solutionDescKey: 'about.solution2.desc',
      painIcon: Users,
      solutionIcon: Sparkles,
    },
  ]

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-dark" aria-label={t('about.badge')}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary border border-primary/20 rounded-full px-4 py-1.5 text-sm font-medium mb-4">
            <Sparkles size={16} />
            <span>{t('about.badge')}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-heading mb-4">
            {t('about.title1')} <span className="text-accent">{t('about.title.accent')}</span>
            {t('about.title2')} <span className="text-primary">{t('about.title.primary')}</span>
            {t('about.title3')}
          </h2>

          <p className="text-muted text-base sm:text-lg max-w-2xl mx-auto">
            {t('about.sub')}
          </p>
        </div>

        <div className="space-y-8">
          {comparisons.map((item, idx) => {
            const PainIcon = item.painIcon
            const SolutionIcon = item.solutionIcon

            return (
              <article key={idx} className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
                <div className="group relative bg-gradient-to-br from-red-950/30 to-red-900/10 border border-red-900/30 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:scale-[1.02] hover:border-red-500/30 overflow-hidden">
                  <div className="absolute -top-8 -left-8 w-24 h-24 bg-red-500/5 rounded-full blur-2xl" />

                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-red-500/20 p-2 rounded-lg">
                        <PainIcon size={20} className="text-red-400" />
                      </div>
                      <span className="bg-red-500/10 text-red-400 text-xs font-bold px-3 py-1 rounded-full">{t('about.pain.label')}</span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-heading mb-2">{t(item.painKey)}</h3>
                    <p className="text-red-300/70 text-sm">{t(item.painDescKey)}</p>
                  </div>
                </div>

                <div className="group relative bg-gradient-to-br from-green-950/30 to-primary/10 border border-green-900/30 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:scale-[1.02] hover:border-green-500/30 overflow-hidden">
                  <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-green-500/5 rounded-full blur-2xl" />

                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-green-500/20 p-2 rounded-lg">
                        <SolutionIcon size={20} className="text-green-400" />
                      </div>
                      <span className="bg-green-500/10 text-green-400 text-xs font-bold px-3 py-1 rounded-full">{t('about.solution.label')}</span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-heading mb-2">{t(item.solutionKey)}</h3>
                    <p className="text-green-300/70 text-sm">{t(item.solutionDescKey)}</p>
                  </div>
                </div>
              </article>
            )
          })}
        </div>

        <div className="mt-12 bg-dark-secondary border border-gray-200 dark:border-primary/20 rounded-2xl p-6 sm:p-8 lg:p-10">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="flex-shrink-0 w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
              <Users size={28} className="text-primary" />
            </div>
            <div className={`flex-1 ${language === 'ar' ? 'text-center sm:text-right' : 'text-center sm:text-left'}`}>
              <h3 className="text-xl font-bold text-heading mb-1">{t('about.cta.title')}</h3>
              <p className="text-muted text-sm">{t('about.cta.desc')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
