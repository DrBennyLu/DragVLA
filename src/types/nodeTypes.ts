export type NodeTypeId =
  | 'vlm'
  | 'actionHead'
  | 'robotControl'
  | 'simulationRobot'
  | 'dataGeneration'
  | 'dataView'

export interface NodeTypeDef {
  id: NodeTypeId
  label: string
  labelEn: string
}

export const NODE_TYPES: NodeTypeDef[] = [
  { id: 'vlm', label: 'VLM', labelEn: 'VLM' },
  { id: 'actionHead', label: '动作头', labelEn: 'Action Head' },
  { id: 'robotControl', label: '控制机器人节点', labelEn: 'Robot Control' },
  { id: 'simulationRobot', label: '仿真机器人节点', labelEn: 'Simulation Robot' },
  { id: 'dataGeneration', label: '数据生成节点', labelEn: 'Data Generation' },
  { id: 'dataView', label: '数据查看节点', labelEn: 'Data View' },
]
