import React from 'react';
import {Div, Image, Media, Text} from '@elements'
import {LayoutProps} from "./layout.props";
import styles from './layout.module.css'
import {AuthLayout, Header, Menu} from '@layouts'
import {KishLogoImage} from '@images'
import {ProfileGreyIcon} from '@icons'

const Layout = ({children, isAuthentication, hasHeader, sideBar}: LayoutProps) => {

  const containerClass = `${hasHeader}Container`

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
        {hasHeader ? (
          <Header/>
        ) : null}
        {children}
      </Div>
      <Media greaterThan={"sm"}>
        {sideBar ? (
          <Div mobile={'column'} className={styles.sideBar}>
            <Div className={styles.sideInfo}>
              <Text type={'bold'} typography={'tiny'} color={'grey.900'}>
                شرکت ساختمانی البرز
              </Text>
              <Div className={styles.profileImage}>
                <Image src={ProfileGreyIcon} alt={'profile'}/>
              </Div>
            </Div>
            <Div className={styles.dateContainer}>
              <Text color={'grey.500'} typography={'tiny'}>
                امروز دوشنبه
              </Text>
              <Text color={'grey.500'} typography={'tiny'}>
                1401/05/18
              </Text>
            </Div>
            <Div mobile={'column'} className={styles.progressContainer}>
              <Div mobile={'column'} className={styles.progressWrapper}>
                <Text className={styles.title} type={'bold'} typography={'medium'} color={"grey.900"}>
                  کارگر عضو سامانه :
                </Text>
                <Div className={styles.progress} mobile={'column'}>
                  <Text typography={'huge'} type={"bold"} color={'grey.900'}>
                    2840
                  </Text>
                  <Div className={styles.outerProgress}>
                    <Div style={{width: '70%'}} className={styles.innerProgress}/>
                  </Div>
                </Div>
              </Div>
              <Div mobile={'column'} className={styles.progressWrapper}>
                <Text className={styles.title} type={'bold'} typography={'medium'} color={"grey.900"}>
                  کارگر عضو سامانه :
                </Text>
                <Div className={styles.progress} mobile={'column'}>
                  <Text typography={'huge'} type={"bold"} color={'grey.900'}>
                    852
                  </Text>
                  <Div className={styles.outerProgress}>
                    <Div style={{width: '40%'}} className={styles.innerProgress}/>
                  </Div>
                </Div>
              </Div>
              <Div mobile={'column'} className={styles.progressWrapper}>
                <Text className={styles.title} type={'bold'} typography={'medium'} color={"grey.900"}>
                  کارگر عضو سامانه :
                </Text>
                <Div className={styles.progress} mobile={'column'}>
                  <Text typography={'huge'} type={"bold"} color={'grey.900'}>
                    26151
                  </Text>
                  <Div className={styles.outerProgress}>
                    <Div style={{width: '60%'}} className={styles.innerProgress}/>
                  </Div>
                </Div>
              </Div>
            </Div>
          </Div>
        ) : (
          <Div className={styles.leftMenu}>
            <Div mobile={'column'} className={styles.leftMenuContainer}>
              <Div className={styles.logoContainer}>
                <Image src={KishLogoImage} alt={'تیسا کیش'}/>
              </Div>
            </Div>
          </Div>
        )}
      </Media>
    </Div>
  )
};

Layout.defaultProps = {
  hasNavigation: true,
  isAuthentication: false,
  hasHeader: true,
  sideBar: false,
}

export default Layout


