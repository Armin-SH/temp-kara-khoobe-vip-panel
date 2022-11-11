export interface TableItemProps {
  item: any
  keys: Array<string>
  values: Array<string>
  modal?: boolean
  modalAction?: () => void
  index: number
}