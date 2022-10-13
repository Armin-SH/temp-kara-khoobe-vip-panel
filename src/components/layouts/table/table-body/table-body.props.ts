export interface TableBodyProps {
  headerData: any

  bodyData: Array<object | string>

  cellNames: Array<string>

  selectRows: boolean | undefined

  length: number

  actions: boolean
}