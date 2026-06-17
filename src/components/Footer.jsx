import { MessageCircle, Camera, Music2, ArrowUp, MousePointerClick } from 'lucide-react'
import { useApp } from '../context/AppContext'

const quickLinkKeys = [
  { id: 'hero', key: 'nav.home' },
  { id: 'about', key: 'nav.about' },
  { id: 'categories', key: 'nav.categories' },
  { id: 'methodology', key: 'nav.methodology' },
  { id: 'offers', key: 'nav.offers' },
  { id: 'contact', key: 'nav.contact' },
]

const socialLinks = [
  { icon: MessageCircle, href: '#', key: 'footer.social1' },
  { icon: Camera, href: '#', key: 'footer.social2' },
  { icon: Music2, href: '#', key: 'footer.social3' },
]

export default function Footer({ onNavClick }) {
  const { t, language } = useApp()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-dark border-t border-gray-200 dark:border-white/10 py-12 sm:py-16" aria-label={t('footer.contact')}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          <div className={`text-center ${language === 'ar' ? 'sm:text-right' : 'sm:text-left'}`}>
            <a
              href="#hero"
              onClick={(e) => { e.preventDefault(); scrollToTop() }}
              className="inline-flex items-center gap-2 text-xl font-bold text-heading mb-4"
            >
              <span className="bg-primary rounded-lg p-1.5 flex items-center justify-center">
                <MousePointerClick size={16} className="text-white" />
              </span>
              <span className="text-primary">Click</span>
              <span className="text-heading">Here</span>
            </a>
            <p className="text-dim text-sm leading-relaxed">
              {t('footer.desc')}
            </p>
          </div>

          <div className={`text-center ${language === 'ar' ? 'sm:text-right' : 'sm:text-left'}`}>
            <h3 className="text-heading font-bold text-lg mb-4">{t('footer.quicklinks')}</h3>
            <ul className="space-y-3">
              {quickLinkKeys.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => onNavClick(e, link.id)}
                    className="text-dim hover:text-accent transition-colors duration-200 text-sm"
                  >
                    {t(link.key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className={`text-center ${language === 'ar' ? 'sm:text-right' : 'sm:text-left'}`}>
            <h3 className="text-heading font-bold text-lg mb-4">{t('footer.follow')}</h3>
            <div className={`flex items-center justify-center ${language === 'ar' ? 'sm:justify-start' : 'sm:justify-start'} gap-3`}>
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.key}
                    href={social.href}
                    aria-label={t(social.key)}
                    className="bg-white/5 hover:bg-accent/20 border border-white/10 hover:border-accent/30 p-3 rounded-xl text-dim hover:text-accent transition-all duration-300 hover:scale-110 active:scale-95"
                  >
                    <Icon size={20} />
                  </a>
                )
              })}
            </div>
          </div>

          <div className={`text-center ${language === 'ar' ? 'sm:text-right' : 'sm:text-left'}`}>
            <h3 className="text-heading font-bold text-lg mb-4">{t('footer.contact')}</h3>
            <p className="text-dim text-sm mb-2">info@clickhere.com</p>
            <p className="text-dim text-sm">+966 50 000 0000</p>
          </div>
        </div>

        <div className={`mt-10 pt-8 border-t border-gray-200 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4`}>
          <p className="text-dim text-sm">
            &copy; {new Date().getFullYear()} {t('footer.copyright')}
          </p>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 text-dim hover:text-accent transition-colors text-sm"
            aria-label={t('footer.backtotop')}
          >
            <ArrowUp size={16} />
            <span>{t('footer.backtotop')}</span>
          </button>
        </div>
      </div>
    </footer>
  )
}
