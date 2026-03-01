import { NodeProps } from '@xyflow/react'
import BaseNode, { type BaseNodeData } from './BaseNode'

export default function SimulationRobotNode(props: NodeProps) {
  return <BaseNode {...props} data={{ ...props.data, label: 'Simulation Robot' } as BaseNodeData} />
}
