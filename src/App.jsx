import { AppProvider } from './context/AppContext'
import Header from './components/Header'
import Hero from './components/Hero'
import ProblemSolution from './components/ProblemSolution'
import Categories from './components/Categories'
import Blueprint from './components/Blueprint'
import Deliverables from './components/Deliverables'
import Offers from './components/Offers'
import LeadForm from './components/LeadForm'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import Footer from './components/Footer'

function AppContent() {
  const handleNavClick = (e, sectionId) => {
    e.preventDefault()
    const element = document.getElementById(sectionId)
    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.scrollY - headerOffset
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-dark">
      <Header onNavClick={handleNavClick} />
      <main>
        <Hero onNavClick={handleNavClick} />
        <ProblemSolution />
        <Categories />
        <Blueprint />
        <Deliverables />
        <Offers onNavClick={handleNavClick} />
        <LeadForm />
      </main>
      <FloatingWhatsApp />
      <Footer onNavClick={handleNavClick} />
    </div>
  )
}

function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  )
}

export default App
