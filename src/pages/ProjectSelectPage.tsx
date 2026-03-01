import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import NewProjectModal from '../components/NewProjectModal'
import OpenProjectModal from '../components/OpenProjectModal'

export default function ProjectSelectPage() {
  const navigate = useNavigate()
  const [showNewProject, setShowNewProject] = useState(false)
  const [showOpenProject, setShowOpenProject] = useState(false)

  const handleNewProjectComplete = (projectPath: string, projectName: string) => {
    setShowNewProject(false)
    navigate('/project', { state: { projectPath, projectName } })
  }

  const handleOpenProjectComplete = (projectPath: string) => {
    setShowOpenProject(false)
    navigate('/project', { state: { projectPath } })
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 welcome-bg select-page">
      <div className="flex flex-col sm:flex-row gap-6 w-full max-w-3xl">
        <button
          onClick={() => setShowNewProject(true)}
          className="flex-1 min-h-[140px] rounded-2xl bg-white/30 backdrop-blur-2xl border border-white/50 flex items-center justify-center font-bold text-xl gradient-text-animated hover:bg-white/40 hover:scale-[1.02] active:scale-100 transition-all duration-300 shadow-xl shadow-slate-200/50"
        >
          New Project
        </button>
        <button
          onClick={() => setShowOpenProject(true)}
          className="flex-1 min-h-[140px] rounded-2xl bg-white/30 backdrop-blur-2xl border border-white/50 flex items-center justify-center font-bold text-xl gradient-text-animated hover:bg-white/40 hover:scale-[1.02] active:scale-100 transition-all duration-300 shadow-xl shadow-slate-200/50"
        >
          Open Project
        </button>
      </div>

      <NewProjectModal
        isOpen={showNewProject}
        onClose={() => setShowNewProject(false)}
        onComplete={handleNewProjectComplete}
      />
      <OpenProjectModal
        isOpen={showOpenProject}
        onClose={() => setShowOpenProject(false)}
        onComplete={handleOpenProjectComplete}
      />
    </div>
  )
}
