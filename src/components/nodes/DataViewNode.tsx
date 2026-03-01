import { NodeProps } from '@xyflow/react'
import BaseNode, { type BaseNodeData } from './BaseNode'

export default function DataViewNode(props: NodeProps) {
  return <BaseNode {...props} data={{ ...props.data, label: 'Data View' } as BaseNodeData} />
}
