export interface SkeletonProps {
  variant: 'text' | 'rectangular' | 'circular'

  className?: string

  width?: string | number

  height?: string | number

  animation?: "wave" | 'pulse'

  color?: "primary" | "secondary" | "tertiary" | "info" | "warning" | "error" | "control" | "success"
}