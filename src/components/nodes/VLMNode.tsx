import { NodeProps } from '@xyflow/react'
import BaseNode, { type BaseNodeData } from './BaseNode'

export default function VLMNode(props: NodeProps) {
  return <BaseNode {...props} data={{ ...props.data, label: 'VLM' } as BaseNodeData} />
}
