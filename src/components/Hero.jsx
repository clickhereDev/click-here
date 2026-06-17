import { ArrowLeft, MousePointerClick, Play, Target } from 'lucide-react'
import { useApp } from '../context/AppContext'

export default function Hero({ onNavClick }) {
  const { t } = useApp()

  const stats = [
    { number: '+500', key: 'hero.stat1' },
    { number: '+30', key: 'hero.stat2' },
    { number: '+15', key: 'hero.stat3' },
    { number: '95%', key: 'hero.stat4' },
  ]

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20" aria-label={t('hero.cta.primary')}>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-dark to-dark-secondary" />

      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-accent/10 text-accent border border-accent/20 rounded-full px-4 py-2 text-sm font-medium mb-6 sm:mb-8 animate-float">
          <Target size={16} />
          <span>{t('hero.badge')}</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
          <span className="text-heading">{t('hero.headline.p1')}</span>{' '}
          <span className="text-accent">{t('hero.headline.accent')}</span>
          <span className="text-heading">{t('hero.headline.p2')}</span>
          <br />
          <span className="text-primary">{t('hero.headline.p3')}</span>
        </h1>

        <p className="text-muted text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-8 sm:mb-10 leading-relaxed">
          {t('hero.sub')}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            onClick={(e) => onNavClick(e, 'contact')}
            className="group inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-bold text-lg py-4 px-8 rounded-2xl transition-all duration-300 hover:scale-105 active:scale-95 shadow-2xl shadow-accent/30 animate-pulse-glow"
          >
            <MousePointerClick size={22} className="group-hover:rotate-12 transition-transform" />
            <span>{t('hero.cta.primary')}</span>
            <ArrowLeft size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#methodology"
            onClick={(e) => onNavClick(e, 'methodology')}
            className="inline-flex items-center gap-2 text-primary border-2 border-primary/50 hover:border-primary font-medium py-4 px-8 rounded-2xl transition-all duration-300 hover:scale-105 active:scale-95 hover:bg-primary/10"
          >
            <Play size={20} />
            <span>{t('hero.cta.secondary')}</span>
          </a>
        </div>

        <div className="mt-12 sm:mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 max-w-3xl mx-auto">
          {stats.map((stat) => (
            <div key={stat.key} className="text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-primary">{stat.number}</div>
              <div className="text-dim text-sm mt-1">{t(stat.key)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
