import { Gift, Clock, ArrowLeft, Sparkles, BadgePercent, Wrench } from 'lucide-react'
import { useApp } from '../context/AppContext'

export default function Offers({ onNavClick }) {
  const { t, language } = useApp()

  return (
    <section id="offers" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden" aria-label={t('offer.badge')}>
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-dark to-primary/10" />

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-accent/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-to-br from-accent/20 via-dark to-primary/20 border-2 border-accent/30 rounded-3xl p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl shadow-accent/10">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/15 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/15 rounded-full blur-3xl" />

          <div className={`absolute -top-4 ${language === 'ar' ? '-right-4' : '-left-4'}`}>
            <div className="bg-accent text-white text-xs font-extrabold px-4 py-2 rounded-bl-2xl rounded-tr-2xl rotate-2 shadow-lg shadow-accent/30">
              {t('offer.badge').split(' — ')[0]}
            </div>
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className={`flex-1 ${language === 'ar' ? 'text-center lg:text-right' : 'text-center lg:text-left'}`}>
              <div className="inline-flex items-center gap-2 bg-accent/10 text-accent border border-accent/20 rounded-full px-4 py-1.5 text-sm font-medium mb-4">
                <Sparkles size={16} />
                <span>{t('offer.badge')}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-heading mb-4 leading-tight">
                <span className="text-accent">{t('offer.title1')}</span> {t('offer.title2')}
                <br />
                <span className="text-primary">{t('offer.title3')}</span> {t('offer.title4')}
              </h2>

              <div className="space-y-3 mb-6">
                <div className={`flex items-center justify-center ${language === 'ar' ? 'lg:justify-start' : 'lg:justify-start'} gap-3 text-body`}>
                  <div className="bg-accent/20 p-1.5 rounded-lg flex-shrink-0">
                    <BadgePercent size={18} className="text-accent" />
                  </div>
                  <span className="font-medium">{t('offer.item1')} <strong className="text-accent">{t('offer.item1.highlight')}</strong> {t('offer.item1.suffix')}</span>
                </div>
                <div className={`flex items-center justify-center ${language === 'ar' ? 'lg:justify-start' : 'lg:justify-start'} gap-3 text-body`}>
                  <div className="bg-primary/20 p-1.5 rounded-lg flex-shrink-0">
                    <Wrench size={18} className="text-primary" />
                  </div>
                  <span className="font-medium"><strong className="text-primary">{t('offer.item2')}</strong> {t('offer.item2.suffix')}</span>
                </div>
                <div className={`flex items-center justify-center ${language === 'ar' ? 'lg:justify-start' : 'lg:justify-start'} gap-3 text-body`}>
                  <div className="bg-green-500/20 p-1.5 rounded-lg flex-shrink-0">
                    <Gift size={18} className="text-green-400" />
                  </div>
                  <span className="font-medium">{t('offer.item3.prefix')} <strong className="text-green-400">{t('offer.item3.highlight')}</strong> {t('offer.item3.suffix')}</span>
                </div>
              </div>

              <div className={`flex items-center justify-center ${language === 'ar' ? 'lg:justify-start' : 'lg:justify-start'} gap-2 text-accent font-medium mb-6 bg-accent/5 border border-accent/20 rounded-xl px-4 py-3`}>
                <Clock size={20} />
                <span>{t('offer.urgency')}</span>
              </div>

              <a
                href="#contact"
                onClick={(e) => onNavClick(e, 'contact')}
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-bold py-4 px-10 rounded-2xl transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-accent/25 text-lg"
              >
                <span>{t('offer.cta')}</span>
                <ArrowLeft size={20} />
              </a>
            </div>

            <div className="hidden lg:flex flex-col items-center gap-4">
              <div className="w-40 h-40 bg-gradient-to-br from-accent/30 to-accent/10 rounded-full flex items-center justify-center animate-float border-2 border-accent/20">
                <BadgePercent size={56} className="text-accent" />
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl px-6 py-3 text-center">
                <div className="text-accent text-3xl font-extrabold">{t('offer.item1.highlight')}</div>
                <div className="text-dim text-xs">{t('offer.title1')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
