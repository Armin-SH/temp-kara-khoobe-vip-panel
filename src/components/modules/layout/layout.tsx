import React from 'react';
import {Div} from '@elements'
import {LayoutProps} from "./layout.props";
import styles from './layout.module.css'
import {AuthLayout, Header, Menu} from '@layouts'

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
        <Div mobile={"column"} className={styles.container}>
          <Header/>
          {children}
        </Div>
        <Menu/>
      </Div>
  )
};

Layout.defaultProps = {
  hasNavigation: true,
  isAuthentication: false,
}

export default Layout


