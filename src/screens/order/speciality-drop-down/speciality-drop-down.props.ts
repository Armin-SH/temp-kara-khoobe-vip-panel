export interface SpecialityDropDownProps {
  value: { _id: string, title: string }

  onChange: any

  data: Array<any>

  disabled?: boolean

  placeholder: string
}