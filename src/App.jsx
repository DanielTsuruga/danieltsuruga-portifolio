import { Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Home from './pages/Home'
import Projects from './pages/Projects'
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
          <Route path="/sobre" element={<About />} />
          <Route path="/curriculo" element={<Resume />} />
          <Route path="/contato" element={<Contact />} />
        </Routes>
      </main>
    </>
  )
}

export default App