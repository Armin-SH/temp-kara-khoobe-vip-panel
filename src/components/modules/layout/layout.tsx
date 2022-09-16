import React from 'react';
import {Div} from '@elements'
import {LayoutProps} from "./layout.props";
import styles from './layout.module.css'
import {AuthLayout, Header, Menu} from '@layouts'
import {ReducerTypes} from "@store/reducer";
import {useSelector} from "react-redux";

const Layout = ({children, isAuthentication}: LayoutProps) => {
  const {expanded} = useSelector((state: ReducerTypes) => state.home);

  const Animation = `${expanded}Container`


  if (isAuthentication) {
    return (
        <AuthLayout>
          {children}
        </AuthLayout>
    )
  }

  return (
      <Div mobile={"column"} tablet={"row-reverse"} className={styles.wrapper}>
        <Div mobile={"column"} className={`${styles.container} ${styles[Animation]}`}>
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


