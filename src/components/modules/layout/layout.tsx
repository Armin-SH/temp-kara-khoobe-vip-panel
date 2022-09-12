import React from 'react';
import {Div, Image, Media, Text, TextField} from '@elements'
import {LayoutProps} from "./layout.props";
import styles from './layout.module.css'
import {DevicesImage, SecurityImage, LogoImage} from '@images'
import {Support} from '@modules'
import {HamMenuIcon, SearchIcon, LogoIcon} from '@icons'
import {InputAdornment} from '@mui/material'

const Layout = ({children, isAuthentication}: LayoutProps) => {

  if (isAuthentication) {
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

  return (
      <Div mobile={"column"} className={styles.wrapper}>
        <Div className={styles.headerWrapper} mobile={'column'}>
          <Div className={styles.headerContainer}>
            <Div className={styles.rightContainer}>
              <Div className={styles.logoIcon}>
                <Image src={LogoIcon} alt={"کارا خوبه"}/>
              </Div>
              <Div className={styles.titleContainer} mobile={"column"}>
                <Text typography={"tiny"} type={"bold"} color={"grey.900"}>
                  شرکت ساختمانی البرز
                </Text>
                <Div className={styles.dayContainer}>
                  <Text typography={"tiny"} color={'grey.500'}>
                    سه شنبه
                  </Text>
                  <Text typography={"tiny"} color={'grey.500'}>
                    1401/5/4
                  </Text>
                </Div>
              </Div>
            </Div>
            <Div className={styles.hamMenuIcon}>
              <Image src={HamMenuIcon} alt={'متو'}/>
            </Div>
          </Div>
          <TextField
              placeholdermobilesize={'14px'}
              placeholder={"جستجو کن ..."}
              color={"tertiary"}
              variant={"filled"}
              InputProps={{
                endAdornment: (
                    <InputAdornment className={styles.searchIconContainer} position="end">
                      <Div className={styles.searchIcon}>
                        <Div className={styles.search}>
                          <Image src={SearchIcon} alt={"جستجو"}/>
                        </Div>
                      </Div>
                    </InputAdornment>
                ),
                className: styles.input,
                inputMode: 'numeric', pattern: '[0-9]*'
              }}
          />
        </Div>
        <Div mobile={"column"} className={styles.container}>
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


