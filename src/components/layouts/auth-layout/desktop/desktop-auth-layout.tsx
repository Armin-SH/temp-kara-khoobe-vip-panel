import React, {ReactNode} from 'react'
import {Div, Image, Text} from "@elements";
import styles from "./desktop-auth-layout.module.css";
import {DevicesImage, LogoImage, SecurityImage} from "@images";
import {Support} from "@modules";


const DesktopAuthLayout = ({children}: { children: ReactNode }) => {

  return (
      <Div mobile={"column"} desktop={"row-reverse"} className={styles.authContainer}>
        <Div className={styles.authRightWrapper}>
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
        </Div>
        <Div className={styles.authLeftContainer} mobile={"column"}>
          {children}
        </Div>
      </Div>
  )
}

export default DesktopAuthLayout