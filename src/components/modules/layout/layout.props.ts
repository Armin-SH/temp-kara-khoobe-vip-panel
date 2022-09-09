import {ReactNode} from "react";

export interface LayoutProps {
  children: ReactNode

  hasNavigation?: boolean

  gray?: boolean

  isAuthentication?: boolean
}
