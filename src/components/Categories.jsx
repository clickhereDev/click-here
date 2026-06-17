import { Code2, Palette, Zap, Gem } from 'lucide-react'
import { useApp } from '../context/AppContext'

const categories = [
  {
    id: 1,
    titleKey: 'categories.card1',
    descKey: 'categories.card1.desc',
    icon: Code2,
    gradient: 'from-blue-500/20 to-cyan-500/10',
    iconBg: 'bg-blue-500/20 text-blue-400',
  },
  {
    id: 2,
    titleKey: 'categories.card2',
    descKey: 'categories.card2.desc',
    icon: Palette,
    gradient: 'from-pink-500/20 to-rose-500/10',
    iconBg: 'bg-pink-500/20 text-pink-400',
  },
  {
    id: 3,
    titleKey: 'categories.card3',
    descKey: 'categories.card3.desc',
    icon: Zap,
    gradient: 'from-yellow-500/20 to-orange-500/10',
    iconBg: 'bg-yellow-500/20 text-yellow-400',
  },
  {
    id: 4,
    titleKey: 'categories.card4',
    descKey: 'categories.card4.desc',
    icon: Gem,
    gradient: 'from-purple-500/20 to-violet-500/10',
    iconBg: 'bg-purple-500/20 text-purple-400',
  },
]

export default function Categories() {
  const { t } = useApp()

  return (
    <section id="categories" className="py-16 sm:py-20 lg:py-24 bg-dark-secondary" aria-label={t('categories.title')}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-heading mb-4">
            {t('categories.title')}<span className="text-primary">{t('categories.title.accent')}</span>
          </h2>
          <p className="text-muted text-base sm:text-lg max-w-2xl mx-auto">
            {t('categories.sub')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => {
            const Icon = cat.icon
            return (
              <article
                key={cat.id}
                className="group relative bg-dark border border-gray-200 dark:border-white/10 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:scale-105 hover:border-gray-300 dark:hover:border-white/30 cursor-pointer overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${cat.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                <div className="relative z-10">
                  <div className={`inline-flex p-3 rounded-xl ${cat.iconBg} mb-4`}>
                    <Icon size={28} />
                  </div>

                  <h3 className="text-xl font-bold text-heading mb-3">{t(cat.titleKey)}</h3>

                  <p className="text-muted text-sm leading-relaxed">{t(cat.descKey)}</p>

                  <div className="mt-4 h-0.5 w-0 group-hover:w-full bg-gray-200 dark:bg-white/10 group-hover:bg-accent/50 transition-all duration-300 rounded-full" />
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
