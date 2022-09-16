import React from 'react'
import MobileMenu from './mobile'
import TabletMenu from './tablet'
import DesktopMenu from './desktop'
import {Media} from '@elements'

const Menu = () => {

  return (
      <>
        <Media at={"xs"}>
          <MobileMenu/>
        </Media>
        <Media at={'sm'}>
          <TabletMenu/>
        </Media>
        <Media greaterThan={"sm"}>
          <DesktopMenu/>
        </Media>
      </>
  )
}

export default Menu;