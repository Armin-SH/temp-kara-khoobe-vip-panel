import React from 'react';
import {Div, Image, Media, Text} from '@elements'
import {LayoutProps} from "./layout.props";
import styles from './layout.module.css'
import {DevicesImage, LogoImage, SecurityImage} from '@images'
import {Support} from '@modules'

const Layout = ({children, hasNavigation, gray, isAuthentication}: LayoutProps) => {
  const containerClassName = `${gray}GrayContainer`;
  const containerHeightClassName = `${hasNavigation}HeightContainer`

  if (isAuthentication) {
    return (
      <Div mobile={"column"} tablet={"row-reverse"} className={styles.authContainer}>
        <Media className={styles.authRightWrapper} greaterThanOrEqual={'sm'}>
          <Div className={styles.authRightContainer} mobile={"column"}>
            <Div className={styles.logoContainer}>
              <Image src={LogoImage} alt={'کارا خوبه'}/>
            </Div>
            <Div className={styles.securityContainer}>
              <Image src={SecurityImage} alt={'نماد اعتبار'}/>
            </Div>
            <Div className={styles.devicesContainer}>
              <Image src={DevicesImage} alt={'پلتفرم ها'}/>
            </Div>
            <a target={'_blank'} rel="noreferrer" href={"https://karakhoobe.ir/"}>
              <Text color={"grey.500"} typography={"small"}>
                www.karakhoobe.ir
              </Text>
            </a>
          </Div>
        </Media>
        <Div className={styles.authLeftContainer} mobile={"column"}>
          {children}
        </Div>
        <Media className={styles.mobileDeviceWrapper} lessThan={"sm"}>
          <Div className={styles.devicesContainer}>
            <Image src={DevicesImage} alt={'پلتفرم ها'}/>
          </Div>
          <a target={'_blank'} rel="noreferrer" href={"https://karakhoobe.ir/"}>
            <Text color={"grey.500"} typography={"small"}>
              www.karakhoobe.ir
            </Text>
          </a>
        </Media>
        <Media greaterThanOrEqual={'sm'}>
          <Support/>
        </Media>
      </Div>
    )
  }

  return (
    <Div mobile={"column"} className={styles.wrapper}>
      <Div mobile={"column"} className={`${styles.container} ${styles[containerHeightClassName]} ${styles[containerClassName]}`}>
        {children}
      </Div>
    </Div>
  )
};

Layout.defaultProps = {
  hasNavigation: true,
  isAuthentication: false,
}

export default Layout


