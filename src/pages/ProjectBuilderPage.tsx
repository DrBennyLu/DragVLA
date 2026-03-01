import { useCallback } from 'react'
import { useLocation } from 'react-router-dom'
import {
  ReactFlow,
  ReactFlowProvider,
  useNodesState,
  useEdgesState,
  useReactFlow,
  addEdge,
  Background,
  Controls,
  MiniMap,
  type Node,
} from '@xyflow/react'
import '@xyflow/react/dist/style.css'
import Sidebar from '../components/Layout/Sidebar'
import ProjectHeader from '../components/Layout/ProjectHeader'
import VLMNode from '../components/nodes/VLMNode'
import ActionHeadNode from '../components/nodes/ActionHeadNode'
import RobotControlNode from '../components/nodes/RobotControlNode'
import SimulationRobotNode from '../components/nodes/SimulationRobotNode'
import DataGenerationNode from '../components/nodes/DataGenerationNode'
import DataViewNode from '../components/nodes/DataViewNode'
import { NODE_TYPES, type NodeTypeId } from '../types/nodeTypes'

const nodeTypes = {
  vlm: VLMNode,
  actionHead: ActionHeadNode,
  robotControl: RobotControlNode,
  simulationRobot: SimulationRobotNode,
  dataGeneration: DataGenerationNode,
  dataView: DataViewNode,
}

function getLabelForType(typeId: NodeTypeId): string {
  return NODE_TYPES.find((t) => t.id === typeId)?.labelEn ?? typeId
}

function FlowCanvas({ projectName }: { projectName: string }) {
  const [nodes, setNodes, onNodesChange] = useNodesState<Node>([])
  const [edges, setEdges, onEdgesChange] = useEdgesState([])
  const { screenToFlowPosition } = useReactFlow()

  const onConnect = useCallback(
    (params: { source: string; sourceHandle: string | null; target: string; targetHandle: string | null }) =>
      setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  )

  const onDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault()
      const typeId = e.dataTransfer.getData('application/dragvla-node') as NodeTypeId
      if (!typeId || !(typeId in nodeTypes)) return
      const position = screenToFlowPosition({ x: e.clientX, y: e.clientY })
      const newNode = {
        id: `node-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
        type: typeId,
        position,
        data: { label: getLabelForType(typeId), typeId },
      }
      setNodes((nds) => [...nds, newNode])
    },
    [screenToFlowPosition, setNodes]
  )

  const onDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.dataTransfer.dropEffect = 'move'
  }, [])

  const onNodeDragStart = useCallback((e: React.DragEvent, nodeType: string) => {
    e.dataTransfer.setData('application/dragvla-node', nodeType)
    e.dataTransfer.effectAllowed = 'move'
  }, [])

  return (
    <div className="flex flex-col h-screen bg-workspace-bg">
      <ProjectHeader
        projectName={projectName}
        onSave={() => {}}
        onSaveAs={() => {}}
        onAdd={() => {}}
        onDelete={() => {}}
      />
      <div className="flex flex-1 min-h-0">
        <Sidebar onNodeDragStart={onNodeDragStart} />
        <div className="flex-1">
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onDrop={onDrop}
            onDragOver={onDragOver}
            nodeTypes={nodeTypes}
            fitView
            className="bg-workspace-bg"
          >
            <Background color="#d1d3d6" gap={16} />
            <Controls className="!bg-workspace-card !border-workspace-border !rounded-lg" />
            <MiniMap className="!bg-workspace-card !border-workspace-border !rounded-lg" />
          </ReactFlow>
        </div>
      </div>
    </div>
  )
}

function ProjectBuilderLayout() {
  const location = useLocation()
  const state = location.state as { projectName?: string; projectPath?: string } | null
  const projectName = state?.projectName ?? state?.projectPath ?? 'Untitled Project'
  return (
    <ReactFlowProvider>
      <FlowCanvas projectName={projectName} />
    </ReactFlowProvider>
  )
}

export default function ProjectBuilderPage() {
  return <ProjectBuilderLayout />
}
