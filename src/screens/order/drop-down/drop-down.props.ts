export interface DropDownProps {
  value: string | "Daily" | "Weekly" | "Monthly" | undefined

  onChange: any

  data: Array<any>

  disabled?: boolean

  placeholder: string

  loading?: boolean

  address?: boolean
}