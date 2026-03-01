import { useState } from 'react'

interface NewProjectModalProps {
  isOpen: boolean
  onClose: () => void
  onComplete: (projectPath: string, projectName: string) => void
}

export default function NewProjectModal({ isOpen, onClose, onComplete }: NewProjectModalProps) {
  const [projectName, setProjectName] = useState('')
  const [projectPath, setProjectPath] = useState<string | null>(null)
  const [pathError, setPathError] = useState<string | null>(null)

  const handleChooseFolder = async () => {
    setPathError(null)
    if ('showDirectoryPicker' in window) {
      try {
        const dirHandle = await (window as Window & { showDirectoryPicker?: (opts?: { mode?: 'read' | 'readwrite' }) => Promise<FileSystemDirectoryHandle> }).showDirectoryPicker?.({ mode: 'readwrite' })
        if (dirHandle) {
          const path = (dirHandle as FileSystemDirectoryHandle & { path?: string }).path ?? dirHandle.name
          setProjectPath(path || dirHandle.name)
        }
      } catch (err) {
        if ((err as Error).name !== 'AbortError') {
          setPathError('Could not access folder. Try again or enter path manually.')
        }
      }
    } else {
      setPathError('Directory picker is not supported in this browser. Use Chrome or Edge.')
    }
  }

  const handleCreate = () => {
    if (!projectName.trim()) return
    const path = projectPath ?? projectName.trim()
    onComplete(path, projectName.trim())
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/20 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md rounded-2xl bg-white/90 backdrop-blur-xl border border-white/60 shadow-2xl p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-bold text-slate-800 mb-4">New Project</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-600 mb-2">Project name</label>
            <input
              type="text"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              placeholder="My VLA Project"
              className="w-full px-4 py-3 rounded-xl bg-white/80 border border-slate-200 focus:border-slate-400 focus:ring-2 focus:ring-slate-200 outline-none transition"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-600 mb-2">Storage location</label>
            <button
              type="button"
              onClick={handleChooseFolder}
              className="w-full px-4 py-3 rounded-xl bg-white/60 backdrop-blur border border-slate-200 text-slate-700 font-medium hover:bg-white/80 transition"
            >
              {projectPath ? projectPath : 'Choose folder...'}
            </button>
            {pathError && (
              <p className="mt-2 text-sm text-amber-600">{pathError}</p>
            )}
          </div>
        </div>
        <div className="flex gap-3 mt-6">
          <button
            onClick={handleCreate}
            disabled={!projectName.trim()}
            className="flex-1 py-3 rounded-xl bg-white/50 backdrop-blur-xl border border-white/60 font-bold gradient-text-animated hover:bg-white/70 disabled:opacity-50 disabled:cursor-not-allowed transition"
          >
            Create
          </button>
          <button
            onClick={onClose}
            className="px-6 py-3 rounded-xl bg-slate-100 text-slate-600 font-medium hover:bg-slate-200 transition"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}
