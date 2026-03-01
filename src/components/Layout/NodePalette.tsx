import { NODE_TYPES } from '../../types/nodeTypes'
import { NodeIcon } from '../icons/NodeIcons'
import type { NodeTypeId } from '../../types/nodeTypes'

interface NodePaletteProps {
  onDragStart: (e: React.DragEvent, nodeType: string) => void
}

export default function NodePalette({ onDragStart }: NodePaletteProps) {
  return (
    <div className="flex flex-col gap-2 p-3">
      {NODE_TYPES.map((node) => (
        <div
          key={node.id}
          draggable
          onDragStart={(e) => onDragStart(e, node.id)}
          className="flex items-center gap-3 px-3 py-2.5 rounded-xl node-shadow-3d node-container-convex border border-workspace-border cursor-grab active:cursor-grabbing hover:border-workspace-muted hover:shadow-lg transition-all duration-200"
        >
          <div className="w-9 h-9 rounded-lg node-icon-convex flex items-center justify-center text-workspace-muted shrink-0">
            <NodeIcon typeId={node.id as NodeTypeId} className="w-5 h-5" />
          </div>
          <span className="text-sm text-workspace-fg font-medium">{node.labelEn}</span>
        </div>
      ))}
    </div>
  )
}
