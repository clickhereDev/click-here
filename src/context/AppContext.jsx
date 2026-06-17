import { createContext, useContext, useState, useEffect, useCallback } from 'react'
import { ar, en } from '../translations'

const AppContext = createContext(null)

function getInitialTheme() {
  try { return localStorage.getItem('ch-theme') || 'system' } catch { return 'system' }
}

function getInitialLang() {
  try { return localStorage.getItem('ch-lang') || 'ar' } catch { return 'ar' }
}

export function AppProvider({ children }) {
  const [theme, setThemeState] = useState(getInitialTheme)
  const [language, setLanguageState] = useState(getInitialLang)

  useEffect(() => {
    try { localStorage.setItem('ch-theme', theme) } catch {}
  }, [theme])

  useEffect(() => {
    try { localStorage.setItem('ch-lang', language) } catch {}
  }, [language])

  useEffect(() => {
    const root = document.documentElement

    if (theme === 'dark') {
      root.classList.add('dark')
    } else if (theme === 'light') {
      root.classList.remove('dark')
    } else {
      const mq = window.matchMedia('(prefers-color-scheme: dark)')
      const apply = (e) => {
        if (e.matches) root.classList.add('dark')
        else root.classList.remove('dark')
      }
      apply(mq)
      mq.addEventListener('change', apply)
      return () => mq.removeEventListener('change', apply)
    }
  }, [theme])

  useEffect(() => {
    const root = document.documentElement
    root.dir = language === 'ar' ? 'rtl' : 'ltr'
    root.lang = language
  }, [language])

  const setTheme = useCallback((t) => setThemeState(t), [])
  const setLanguage = useCallback((l) => setLanguageState(l), [])

  const t = useCallback((key) => {
    const dict = language === 'ar' ? ar : en
    return dict[key] !== undefined ? dict[key] : key
  }, [language])

  const cycleTheme = useCallback(() => {
    setThemeState((prev) => {
      if (prev === 'light') return 'dark'
      if (prev === 'dark') return 'system'
      return 'light'
    })
  }, [])

  const toggleLanguage = useCallback(() => {
    setLanguageState((prev) => (prev === 'ar' ? 'en' : 'ar'))
  }, [])

  return (
    <AppContext.Provider value={{ theme, setTheme, language, setLanguage, t, cycleTheme, toggleLanguage }}>
      {children}
    </AppContext.Provider>
  )
}

export function useApp() {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp must be used within AppProvider')
  return ctx
}
