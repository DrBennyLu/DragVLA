import { Routes, Route } from 'react-router-dom'
import WelcomePage from './pages/WelcomePage'
import ProjectSelectPage from './pages/ProjectSelectPage'
import ProjectBuilderPage from './pages/ProjectBuilderPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/select" element={<ProjectSelectPage />} />
      <Route path="/project" element={<ProjectBuilderPage />} />
    </Routes>
  )
}

export default App
