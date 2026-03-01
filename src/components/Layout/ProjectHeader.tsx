interface ProjectHeaderProps {
  projectName: string
  onSave?: () => void
  onSaveAs?: () => void
  onAdd?: () => void
  onDelete?: () => void
}

function IconSave({ className }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
      <polyline points="17 21 17 13 7 13 7 21" />
      <polyline points="7 3 7 8 15 8" />
    </svg>
  )
}

function IconSaveAs({ className }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
      <polyline points="17 21 17 13 7 13 7 21" />
      <path d="M7 3v5h8" />
      <path d="M12 21v-8" />
      <path d="M9 16h6" />
    </svg>
  )
}

function IconAdd({ className }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  )
}

function IconDelete({ className }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="3 6 5 6 21 6" />
      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      <line x1="10" y1="11" x2="10" y2="17" />
      <line x1="14" y1="11" x2="14" y2="17" />
    </svg>
  )
}

export default function ProjectHeader({ projectName, onSave, onSaveAs, onAdd, onDelete }: ProjectHeaderProps) {
  const btnClass = "p-2 rounded-lg text-workspace-muted hover:bg-workspace-hover hover:text-workspace-fg transition-colors"
  return (
    <header className="h-12 flex-shrink-0 flex items-center justify-between px-4 bg-workspace-bar border-b border-workspace-border">
      <h1 className="text-base font-semibold text-workspace-fg truncate">
        {projectName || 'Untitled Project'}
      </h1>
      <div className="flex items-center gap-1">
        {onSave && (
          <button type="button" onClick={onSave} className={btnClass} title="Save">
            <IconSave />
          </button>
        )}
        {onSaveAs && (
          <button type="button" onClick={onSaveAs} className={btnClass} title="Save As">
            <IconSaveAs />
          </button>
        )}
        {onAdd && (
          <button type="button" onClick={onAdd} className={btnClass} title="Add">
            <IconAdd />
          </button>
        )}
        {onDelete && (
          <button type="button" onClick={onDelete} className={btnClass} title="Delete">
            <IconDelete />
          </button>
        )}
      </div>
    </header>
  )
}
