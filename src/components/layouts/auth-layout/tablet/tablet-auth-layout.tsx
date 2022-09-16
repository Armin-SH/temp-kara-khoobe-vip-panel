import React, {ReactNode} from 'react'
import {Div, Image, Text} from "@elements";
import styles from "./tablet-auth-layout.module.css";
import {DevicesImage, SecurityImage} from "@images";
import {Support} from "@modules";


const TabletAuthLayout = ({children}: { children: ReactNode }) => {

  return (
      <Div mobile={"column"} desktop={"row-reverse"} className={styles.authContainer}>
        <Div className={styles.authLeftContainer} mobile={"column"}>
          {children}
        </Div>
        <Div className={styles.tabletSecurityWrapper}>
          <Div className={styles.tabletSecurityContainer}>
            <Image src={SecurityImage} alt={''}/>
          </Div>
        </Div>
        <Div className={styles.mobileDeviceWrapper}>
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
  )
}

export default TabletAuthLayout