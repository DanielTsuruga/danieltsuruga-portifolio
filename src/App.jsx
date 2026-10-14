import { Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import About from './pages/About'
import Resume from './pages/Resume'
import Contact from './pages/Contact'

function App() {
  return (
    <>
      <Header />

      <main>
        <Routes>
          {/* path = URL | element = componente mostrado nessa URL */}
          <Route path="/" element={<Home />} />
          <Route path="/projetos" element={<Projects />} />
          <Route path="/projetos/:id" element={<ProjectDetail />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/curriculo" element={<Resume />} />
          <Route path="/contato" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </>
  )
}

export default App