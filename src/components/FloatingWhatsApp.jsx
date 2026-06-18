import { useState, useEffect } from 'react'
import { MessageCircle, X as XIcon } from 'lucide-react'
import { useApp } from '../context/AppContext'

const WHATSAPP_NUMBER = '201128947886'

export default function FloatingWhatsApp() {
  const { t, language } = useApp()
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 3000)
    return () => clearTimeout(timer)
  }, [])

  if (dismissed) return null

  const handleClick = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank')
  }

  return (
    <div
      className={`fixed bottom-6 ${language === 'ar' ? 'left-4 sm:left-6' : 'right-4 sm:right-6'} z-50 transition-all duration-500 ${visible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}
    >
      <div className="relative group">
        <button
          onClick={handleClick}
          aria-label={t('whatsapp.text')}
          className={`flex items-center gap-3 bg-[#25D366] hover:bg-[#20BD5A] text-white font-medium py-3 ${language === 'ar' ? 'pl-4 pr-5' : 'pr-4 pl-5'} rounded-2xl shadow-2xl shadow-[#25D366]/30 transition-all duration-300 hover:scale-105 active:scale-95`}
        >
          <div className="relative">
            <MessageCircle size={24} className="animate-bounce-subtle" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full animate-ping opacity-75" />
          </div>
          <span className="text-sm font-bold whitespace-nowrap">{t('whatsapp.text')}</span>
        </button>

        <button
          onClick={() => setDismissed(true)}
          className={`absolute -top-2 ${language === 'ar' ? '-left-2' : '-right-2'} bg-dark border border-white/10 rounded-full p-0.5 text-dim hover:text-heading transition-colors`}
          aria-label="إخفاء"
        >
          <XIcon size={12} />
        </button>

        <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-dark border border-gray-200 dark:border-white/10 rounded-xl px-3 py-2 text-xs text-body whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-lg">
          {t('whatsapp.tooltip')}
        </div>
      </div>
    </div>
  )
}
