import { NodeProps } from '@xyflow/react'
import BaseNode, { type BaseNodeData } from './BaseNode'

export default function RobotControlNode(props: NodeProps) {
  return <BaseNode {...props} data={{ ...props.data, label: 'Robot Control' } as BaseNodeData} />
}
