export interface InfiniteScrollProps {
  children: any

  hasMore: boolean

  next: () => void

  loading: boolean

  className?: string

  reverse?: boolean
}