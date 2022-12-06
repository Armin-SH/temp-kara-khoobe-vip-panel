export interface TableProps {
  selectRows?: boolean

  actions?: boolean

  data: Array<object>

  header: object
}

export interface TableState {
  selectRows: boolean,
  actions: boolean,
  data: any,
  pagination: boolean,
  header: Array<string>,
  length: number,
  cellKeys: Array<string>,
  showAction: { id: null | number, action: boolean },
  selectAll: boolean,
}