import { NodeProps } from '@xyflow/react'
import BaseNode, { type BaseNodeData } from './BaseNode'

export default function ActionHeadNode(props: NodeProps) {
  return <BaseNode {...props} data={{ ...props.data, label: 'Action Head' } as BaseNodeData} />
}
