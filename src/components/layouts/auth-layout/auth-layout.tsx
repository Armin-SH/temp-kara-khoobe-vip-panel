import React, {ReactNode} from 'react'
import {Div, Image, Media, Text} from "@elements";
import styles from "./auth-layout.module.css";
import {DevicesImage, LogoImage, SecurityImage} from "@images";
import {Support} from "@modules";

const AuthLayout = ({children}: { children: ReactNode }) => {

  return (
      <Div mobile={"column"} desktop={"row-reverse"} className={styles.authContainer}>
        <Media className={styles.authRightWrapper} greaterThanOrEqual={'md'}>
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
        <Media at={"sm"} className={styles.tabletSecurityWrapper}>
          <Div className={styles.tabletSecurityContainer}>
            <Image src={SecurityImage} alt={''}/>
          </Div>
        </Media>
        <Media className={styles.mobileDeviceWrapper} lessThan={"md"}>
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

export default AuthLayout