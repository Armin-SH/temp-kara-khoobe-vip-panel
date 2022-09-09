export interface CountdownProps {

  sec: number

  parentCallback?: (e: boolean) => void

  reset?: boolean

  variant?: "contained" | "outlined"
}

export interface ContainerProps {

  variant?: "contained" | "outlined"
}
