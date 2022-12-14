export interface TableProps {
  selectRows?: boolean

  actions?: boolean

  data: Array<object>

  pagination?: boolean

  header: object

  expandable?: any

  expandableHeader?: string

  expandKey?: string

  mobileHeader: object

  modalAction?: () => void

  modal: boolean

  expandableDataKey: Array<object>
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
}