export interface TableProps {
  selectRows?: boolean

  actions?:boolean

  data: Array<object>

  pagination?: boolean

  header: object
}