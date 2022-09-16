import React from 'react'
import MobileHeader from './mobile'
import TabletHeader from './tablet'
import DesktopHeader from './desktop'
import {Media} from '@elements'

const Header = () => {

  return (
      <>
        <Media at={"xs"}>
          <MobileHeader/>
        </Media>
        <Media at={"sm"}>
          <TabletHeader/>
        </Media>
        <Media greaterThan={"sm"}>
          <DesktopHeader/>
        </Media>
      </>
  )
}

export default Header;