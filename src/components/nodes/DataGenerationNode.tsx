import { NodeProps } from '@xyflow/react'
import BaseNode, { type BaseNodeData } from './BaseNode'

export default function DataGenerationNode(props: NodeProps) {
  return <BaseNode {...props} data={{ ...props.data, label: 'Data Generation' } as BaseNodeData} />
}
