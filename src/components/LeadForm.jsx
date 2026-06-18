import { useState } from 'react'
import { Send, Phone, User, BookOpen, CheckCircle } from 'lucide-react'
import { useApp } from '../context/AppContext'
import { supabase } from '../utils/supabase'

const fieldKeys = [
  { value: '', key: 'form.field.placeholder' },
  { value: 'programming', key: 'form.field.opt1' },
  { value: 'art', key: 'form.field.opt2' },
  { value: 'skills', key: 'form.field.opt3' },
  { value: 'handmade', key: 'form.field.opt4' },
]

export default function LeadForm() {
  const { t } = useApp()
  const [formData, setFormData] = useState({ name: '', phone: '', field: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (formData.name && formData.phone && formData.field) {
      const { error } = await supabase.from('leads').insert({
        name: formData.name,
        phone: formData.phone,
        field: formData.field,
      })
      if (!error) {
        setSubmitted(true)
        setFormData({ name: '', phone: '', field: '' })
        setTimeout(() => setSubmitted(false), 5000)
      }
    }
  }

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-dark-secondary" aria-label={t('form.title')}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-heading mb-4">
              <span className="text-primary">{t('form.title')}</span>{t('form.title.primary')}
            </h2>
            <p className="text-muted text-base sm:text-lg">
              {t('form.sub')}
            </p>
          </div>

          {submitted ? (
            <div className="bg-green-500/10 border border-green-500/30 rounded-2xl p-8 sm:p-12 text-center" role="alert">
              <CheckCircle size={48} className="text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-heading mb-2">{t('form.success.title')}</h3>
              <p className="text-muted">{t('form.success.desc')}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-dark border border-gray-200 dark:border-white/10 rounded-2xl p-6 sm:p-8 lg:p-10 space-y-6">
              <div>
                <label htmlFor="name" className="block text-body font-medium mb-2">
                  {t('form.name.label')}
                </label>
                <div className="relative">
                  <User size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-dim" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder={t('form.name.placeholder')}
                    className="w-full bg-dark-secondary border border-gray-200 dark:border-white/10 rounded-xl py-3.5 pr-12 pl-4 text-heading placeholder-dim focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-body font-medium mb-2">
                  {t('form.phone.label')}
                </label>
                <div className="relative">
                  <Phone size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-dim" />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder={t('form.phone.placeholder')}
                    className="w-full bg-dark-secondary border border-gray-200 dark:border-white/10 rounded-xl py-3.5 pr-12 pl-4 text-heading placeholder-dim focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="field" className="block text-body font-medium mb-2">
                  {t('form.field.label')}
                </label>
                <div className="relative">
                  <BookOpen size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-dim" />
                  <select
                    id="field"
                    name="field"
                    value={formData.field}
                    onChange={handleChange}
                    required
                    className="w-full bg-dark-secondary border border-gray-200 dark:border-white/10 rounded-xl py-3.5 pr-12 pl-4 text-heading focus:outline-none focus:border-primary transition-colors appearance-none"
                  >
                    {fieldKeys.map((f) => (
                      <option key={f.value} value={f.value} disabled={!f.value}>
                        {t(f.key)}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-accent hover:bg-accent-dark text-white font-bold py-4 px-6 rounded-2xl transition-all duration-300 hover:scale-[1.02] active:scale-95 shadow-lg shadow-accent/25 flex items-center justify-center gap-2 text-lg"
              >
                <Send size={20} />
                <span>{t('form.submit')}</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
