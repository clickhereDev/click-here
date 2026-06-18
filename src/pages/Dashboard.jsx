import { useState, useEffect } from 'react'
import { supabase } from '../utils/supabase'

export default function Dashboard() {
  const [leads, setLeads] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getLeads()
  }, [])

  async function getLeads() {
    const { data } = await supabase
      .from('leads')
      .select('*')
      .order('created_at', { ascending: false })
    if (data) setLeads(data)
    setLoading(false)
  }

  async function handleDelete(id) {
    await supabase.from('leads').delete().eq('id', id)
    setLeads((prev) => prev.filter((l) => l.id !== id))
  }

  const fieldLabels = {
    programming: 'البرمجة والكمبيوتر',
    art: 'الرسم والفنون',
    skills: 'تنمية المهارات الشخصية',
    handmade: 'الهاند ميد والمهارات اليدوية',
  }

  return (
    <div dir="rtl" className="min-h-screen bg-[#0B1120] text-white p-4 sm:p-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
              لوحة التحكم
            </h1>
            <p className="text-gray-400 mt-1">
              إجمالي المسجلين: {leads.length}
            </p>
          </div>
          <a
            href="/"
            className="text-sm text-gray-400 hover:text-white transition-colors underline underline-offset-4"
          >
            الرجوع للموقع
          </a>
        </div>

        {loading ? (
          <div className="text-center text-gray-400 py-20">جاري التحميل...</div>
        ) : leads.length === 0 ? (
          <div className="text-center text-gray-500 py-20 border border-dashed border-gray-700 rounded-2xl">
            لا يوجد مسجلين حتى الآن
          </div>
        ) : (
          <div className="overflow-x-auto rounded-2xl border border-gray-800">
            <table className="w-full text-right">
              <thead>
                <tr className="bg-gray-900 text-gray-300 text-sm">
                  <th className="p-4 font-medium">#</th>
                  <th className="p-4 font-medium">الاسم</th>
                  <th className="p-4 font-medium">رقم الهاتف</th>
                  <th className="p-4 font-medium">المجال</th>
                  <th className="p-4 font-medium">التاريخ</th>
                  <th className="p-4 font-medium"></th>
                </tr>
              </thead>
              <tbody>
                {leads.map((lead, i) => (
                  <tr key={lead.id} className="border-t border-gray-800 hover:bg-gray-900/50 transition-colors">
                    <td className="p-4 text-gray-400 text-sm">{i + 1}</td>
                    <td className="p-4 font-medium">{lead.name}</td>
                    <td className="p-4 text-accent" dir="ltr">{lead.phone}</td>
                    <td className="p-4 text-gray-300">{fieldLabels[lead.field] || lead.field}</td>
                    <td className="p-4 text-gray-400 text-sm">
                      {new Date(lead.created_at).toLocaleDateString('ar-EG', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </td>
                    <td className="p-4">
                      <button
                        onClick={() => handleDelete(lead.id)}
                        className="text-red-400 hover:text-red-300 text-sm transition-colors"
                      >
                        حذف
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}
