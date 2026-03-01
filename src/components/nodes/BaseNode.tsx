import { Handle, Position, NodeProps, Node } from '@xyflow/react'
import { NodeIcon } from '../icons/NodeIcons'
import type { NodeTypeId } from '../../types/nodeTypes'

export interface BaseNodeData extends Record<string, unknown> {
  label: string
  typeId?: NodeTypeId
}

type BaseNodeType = Node<BaseNodeData>

function getTypeIdFromLabel(label: string): NodeTypeId {
  const map: Record<string, NodeTypeId> = {
    'VLM': 'vlm',
    'Action Head': 'actionHead',
    'Robot Control': 'robotControl',
    'Simulation Robot': 'simulationRobot',
    'Data Generation': 'dataGeneration',
    'Data View': 'dataView',
  }
  return map[label] ?? 'vlm'
}

export default function BaseNode({ data }: NodeProps<BaseNodeType>) {
  const typeId = (data.typeId ?? getTypeIdFromLabel(data.label)) as NodeTypeId
  return (
    <div className="min-w-[200px] rounded-xl node-shadow-3d-strong node-container-convex border border-workspace-border overflow-hidden">
      <Handle type="target" position={Position.Left} className="!bg-workspace-handle !w-3 !h-3" />
      <Handle type="source" position={Position.Right} className="!bg-workspace-handle !w-3 !h-3" />
      <div className="px-4 py-2 border-b border-workspace-border/80 flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg node-icon-convex flex items-center justify-center text-workspace-muted shrink-0">
          <NodeIcon typeId={typeId} className="w-4 h-4" />
        </div>
        <h3 className="text-sm font-semibold text-workspace-fg">{data.label}</h3>
      </div>
      <div className="px-4 py-3 min-h-[60px] bg-white/40">
        <p className="text-xs text-workspace-muted">Settings area (placeholder)</p>
      </div>
    </div>
  )
}
