import type { NodeTypeId } from '../../types/nodeTypes'

const iconClass = "w-5 h-5"
const strokeWidth = 1.5

export function IconVLM({ className = iconClass }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v2M12 20v2M2 12h2M20 12h2" />
      <path d="M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  )
}

export function IconActionHead({ className = iconClass }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
      <path d="M12 14v4M10 18h4" />
    </svg>
  )
}

export function IconRobotControl({ className = iconClass }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="8" width="16" height="12" rx="2" />
      <circle cx="9" cy="14" r="1.5" />
      <circle cx="15" cy="14" r="1.5" />
      <path d="M12 8V4M9 6h6" />
    </svg>
  )
}

export function IconSimulationRobot({ className = iconClass }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="10" width="14" height="10" rx="1.5" />
      <path d="M12 6V2M9 4h6" />
      <circle cx="9" cy="15" r="1" />
      <circle cx="15" cy="15" r="1" />
      <path d="M12 14v2M10 16h4" />
    </svg>
  )
}

export function IconDataGeneration({ className = iconClass }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v18M3 12h18" />
      <path d="M5.5 9l3 3-3 3M18.5 9l-3 3 3 3" />
    </svg>
  )
}

export function IconDataView({ className = iconClass }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 3v18h18" />
      <path d="M7 14l4-4 4 4 5-5" />
    </svg>
  )
}

const ICON_MAP: Record<NodeTypeId, React.ComponentType<{ className?: string }>> = {
  vlm: IconVLM,
  actionHead: IconActionHead,
  robotControl: IconRobotControl,
  simulationRobot: IconSimulationRobot,
  dataGeneration: IconDataGeneration,
  dataView: IconDataView,
}

export function NodeIcon({ typeId, className = iconClass }: { typeId: NodeTypeId; className?: string }) {
  const Icon = ICON_MAP[typeId]
  return Icon ? <Icon className={className} /> : null
}
