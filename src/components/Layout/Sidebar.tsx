import NodePalette from './NodePalette'

interface SidebarProps {
  onNodeDragStart: (e: React.DragEvent, nodeType: string) => void
}

export default function Sidebar({ onNodeDragStart }: SidebarProps) {
  return (
    <aside className="w-60 bg-workspace-card border-r border-workspace-border flex flex-col">
      <div className="px-4 py-4 border-b border-workspace-border">
        <h2 className="text-sm font-semibold text-workspace-fg">Nodes</h2>
        <p className="text-xs text-workspace-muted mt-0.5">Drag to canvas</p>
      </div>
      <div className="flex-1 overflow-y-auto">
        <NodePalette onDragStart={onNodeDragStart} />
      </div>
    </aside>
  )
}
