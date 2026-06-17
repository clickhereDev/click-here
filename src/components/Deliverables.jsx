import { FolderOpen, HeartHandshake, LineChart, Handshake, CheckCircle } from 'lucide-react'
import { useApp } from '../context/AppContext'

const deliverables = [
  {
    titleKey: 'deliv.card1',
    descKey: 'deliv.card1.desc',
    badgeKey: 'deliv.badge1',
    icon: FolderOpen,
    gradient: 'from-blue-500/20 to-cyan-500/10',
    iconBg: 'bg-blue-500/20 text-blue-400',
  },
  {
    titleKey: 'deliv.card2',
    descKey: 'deliv.card2.desc',
    badgeKey: 'deliv.badge2',
    icon: HeartHandshake,
    gradient: 'from-accent/20 to-orange-500/10',
    iconBg: 'bg-accent/20 text-accent',
  },
  {
    titleKey: 'deliv.card3',
    descKey: 'deliv.card3.desc',
    badgeKey: 'deliv.badge3',
    icon: LineChart,
    gradient: 'from-green-500/20 to-emerald-500/10',
    iconBg: 'bg-green-500/20 text-green-400',
  },
  {
    titleKey: 'deliv.card4',
    descKey: 'deliv.card4.desc',
    badgeKey: 'deliv.badge4',
    icon: Handshake,
    gradient: 'from-purple-500/20 to-violet-500/10',
    iconBg: 'bg-purple-500/20 text-purple-400',
  },
]

export default function Deliverables() {
  const { t } = useApp()

  return (
    <section id="deliverables" className="py-16 sm:py-20 lg:py-24 bg-dark" aria-label={t('deliv.title')}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-heading mb-4">
            {t('deliv.title')} <span className="text-primary">{t('deliv.title.primary')}</span> {t('deliv.title2')}
          </h2>
          <p className="text-muted text-base sm:text-lg max-w-2xl mx-auto">
            {t('deliv.sub')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {deliverables.map((item) => {
            const Icon = item.icon
            return (
              <article
                key={item.titleKey}
                className="group relative bg-dark-secondary border border-gray-200 dark:border-white/10 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:scale-105 hover:border-gray-300 dark:hover:border-white/30 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`inline-flex p-3 rounded-xl ${item.iconBg}`}>
                      <Icon size={24} />
                    </div>
                    <span className="text-[10px] font-bold text-dim border border-gray-200 dark:border-white/10 rounded-full px-2.5 py-1">
                      {t(item.badgeKey)}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-heading mb-3">{t(item.titleKey)}</h3>

                  <p className="text-muted text-sm leading-relaxed">
                    {t(item.descKey)}
                  </p>

                  <div className="flex items-center gap-1.5 mt-4 text-primary text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <CheckCircle size={14} />
                    <span>{t('deliv.included')}</span>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
