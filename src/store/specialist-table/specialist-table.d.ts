export interface SpecialistTableReducerTypes {
  selectRows: boolean,

  actions: boolean,

  data: any,

  pagination: boolean,

  header: Array<any>,

  length: number,

  cellKeys: Array<any>,

  showAction: { id: null | number, action: boolean },

  selectAll: boolean,

}


export interface PropsType {
  selectRows?: boolean

  actions?: boolean

  data: Array<any>

  header: object

}