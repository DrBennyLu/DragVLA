import { useState } from 'react'

interface OpenProjectModalProps {
  isOpen: boolean
  onClose: () => void
  onComplete: (projectPath: string) => void
}

export default function OpenProjectModal({ isOpen, onClose, onComplete }: OpenProjectModalProps) {
  const [projectPath, setProjectPath] = useState<string | null>(null)
  const [pathError, setPathError] = useState<string | null>(null)

  const handleChooseFolder = async () => {
    setPathError(null)
    if ('showDirectoryPicker' in window) {
      try {
        const dirHandle = await (window as Window & { showDirectoryPicker?: (opts?: { mode?: 'read' }) => Promise<FileSystemDirectoryHandle> }).showDirectoryPicker?.({ mode: 'read' })
        if (dirHandle) {
          const path = (dirHandle as FileSystemDirectoryHandle & { path?: string }).path ?? dirHandle.name
          setProjectPath(path || dirHandle.name)
        }
      } catch (err) {
        if ((err as Error).name !== 'AbortError') {
          setPathError('Could not access folder. Try again.')
        }
      }
    } else {
      setPathError('Directory picker is not supported in this browser. Use Chrome or Edge.')
    }
  }

  const handleOpen = () => {
    if (!projectPath) return
    onComplete(projectPath)
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
        <h2 className="text-xl font-bold text-slate-800 mb-4">Open Project</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-600 mb-2">Project folder</label>
            <button
              type="button"
              onClick={handleChooseFolder}
              className="w-full px-4 py-3 rounded-xl bg-white/60 backdrop-blur border border-slate-200 text-slate-700 font-medium hover:bg-white/80 transition text-left"
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
            onClick={handleOpen}
            disabled={!projectPath}
            className="flex-1 py-3 rounded-xl bg-white/50 backdrop-blur-xl border border-white/60 font-bold gradient-text-animated hover:bg-white/70 disabled:opacity-50 disabled:cursor-not-allowed transition"
          >
            Open
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
