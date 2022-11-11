export interface TableProps {
  selectRows?: boolean

  actions?: boolean

  data: Array<object>

  pagination?: boolean

  header: object

  expandable?: any

  expandableHeader?: string

  expandKey?: string

  modalAction?: () => void

  modal?: boolean

  expandableDataKey?: Array<object>

  previousCallback: (page: number) => void,

  nextCallback: (page: number) => void,

  page: number
}

export interface TableState {
  selectRows: boolean,
  actions: boolean,
  data: any,
  pagination: boolean,
  header: Array<string>,
  length: number,
  cellKeys: Array<string>,
  expandArray: Array<boolean>,
  showAction: { id: null | number, action: boolean },
  selectAll: boolean,
  rows: number,
  expandedItem: null | number,
  expandable: boolean,
  expandableHeader: string
  expandKey: string
  modalAction: () => void
  modal: boolean
  expandableData: Array<Array<string>>
  expandableDataKey: Array<object>
  page: number
}