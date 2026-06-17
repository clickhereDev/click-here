import { useState } from 'react'
import { Menu, X, MousePointerClick, Sun, Moon, Monitor } from 'lucide-react'
import { useApp } from '../context/AppContext'

const navLinks = [
  { id: 'hero', key: 'nav.home' },
  { id: 'about', key: 'nav.about' },
  { id: 'categories', key: 'nav.categories' },
  { id: 'methodology', key: 'nav.methodology' },
  { id: 'offers', key: 'nav.offers' },
  { id: 'contact', key: 'nav.contact' },
]

const themeIcons = { light: Sun, dark: Moon, system: Monitor }

export default function Header({ onNavClick }) {
  const { t, theme, cycleTheme, toggleLanguage, language } = useApp()
  const [isOpen, setIsOpen] = useState(false)
  const ThemeIcon = themeIcons[theme] || Monitor

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-dark/80 border-b border-gray-200 dark:border-white/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-2" aria-label={t('nav.home')}>
        <a
          href="#hero"
          onClick={(e) => { onNavClick(e, 'hero'); setIsOpen(false) }}
          className="flex items-center gap-2 text-xl sm:text-2xl font-bold shrink-0"
        >
          <span className="bg-primary rounded-lg p-1.5 sm:p-2 flex items-center justify-center">
            <MousePointerClick size={18} className="text-white" />
          </span>
          <span className="text-primary">Click</span>
          <span className="text-heading">Here</span>
        </a>

        <button
          className="sm:hidden p-2 text-heading hover:text-accent transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label={isOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <ul className={`${isOpen ? 'flex' : 'hidden'} sm:flex absolute sm:relative top-16 sm:top-0 left-0 right-0 sm:flex-row flex-col bg-white dark:bg-dark/98 sm:bg-transparent backdrop-blur-md sm:backdrop-blur-none border-b border-gray-200 dark:border-white/10 sm:border-none p-4 sm:p-0 gap-4 sm:gap-6 items-center text-base font-medium`}>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={(e) => { onNavClick(e, link.id); setIsOpen(false) }}
                className="text-body hover:text-heading transition-colors duration-200 py-2 block"
              >
                {t(link.key)}
              </a>
            </li>
          ))}
          <li className="sm:hidden w-full flex items-center justify-center gap-3 pt-2 border-t border-gray-200 dark:border-white/10">
            <button
              onClick={() => { cycleTheme(); setIsOpen(false) }}
              className="p-2 text-body hover:text-accent transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-white/5"
              aria-label={`${t('theme.' + theme)}`}
            >
              <ThemeIcon size={20} />
            </button>
            <button
              onClick={() => { toggleLanguage(); setIsOpen(false) }}
              className="text-sm font-medium text-body hover:text-accent transition-colors px-2 py-1 rounded-lg hover:bg-gray-100 dark:hover:bg-white/5"
            >
              {t('lang.switch')}
            </button>
          </li>
          <li className="sm:hidden w-full">
            <a
              href="#contact"
              onClick={(e) => { onNavClick(e, 'contact'); setIsOpen(false) }}
              className="block w-full text-center bg-accent hover:bg-accent-dark text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 hover:scale-105 active:scale-95"
            >
              {t('nav.cta')}
            </a>
          </li>
        </ul>

        <div className="hidden sm:flex items-center gap-2 ml-2">
          <button
            onClick={cycleTheme}
            className="p-2 text-body hover:text-accent transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-white/5"
            aria-label={`${t('theme.' + theme)}`}
            title={t('theme.' + theme)}
          >
            <ThemeIcon size={18} />
          </button>
          <button
            onClick={toggleLanguage}
            className="text-sm font-medium text-body hover:text-accent transition-colors px-2.5 py-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-white/5 border border-gray-200 dark:border-white/10"
            aria-label={t('lang.switch')}
          >
            {t('lang.switch')}
          </button>
        </div>

        <a
          href="#contact"
          onClick={(e) => onNavClick(e, 'contact')}
          className="hidden sm:inline-flex bg-accent hover:bg-accent-dark text-white font-bold py-2.5 px-6 rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-accent/25"
        >
          {t('nav.cta')}
        </a>
      </nav>
    </header>
  )
}
