import React from 'react';
import {Div, Image, Media} from '@elements'
import {LayoutProps} from "./layout.props";
import styles from './layout.module.css'
import {AuthLayout, Header, Menu} from '@layouts'
import {KishLogoImage} from '@images'

const Layout = ({children, isAuthentication}: LayoutProps) => {

  if (isAuthentication) {
    return (
      <AuthLayout>
        {children}
      </AuthLayout>
    )
  }

  return (
    <Div mobile={"column"} tablet={"row-reverse"} className={styles.wrapper}>
      <Menu/>
      <Div mobile={"column"} className={styles.container}>
        <Header/>
        {children}
      </Div>
      <Media greaterThan={"sm"}>
        <Div className={styles.leftMenu}>
          <Div mobile={'column'} className={styles.leftMenuContainer}>
            <Div className={styles.logoContainer}>
              <Image src={KishLogoImage} alt={'تیسا کیش'}/>
            </Div>
          </Div>
        </Div>
      </Media>
    </Div>
  )
};

Layout.defaultProps = {
  hasNavigation: true,
  isAuthentication: false,
}

export default Layout


