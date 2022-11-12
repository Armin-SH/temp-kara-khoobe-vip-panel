import React from 'react'
import {Div, Image, Text, TextField} from '@elements'
import styles from "./mobile-header.module.css";
import {HamMenuIcon, LogoIcon, SearchIcon} from "@icons";
import {InputAdornment} from "@mui/material";
import {useDispatch} from "react-redux";
import {HomeActions} from "@store/home/home-actions";


const MobileHeader = () => {
  const dispatch = useDispatch()

  const handleMobileMenu = () => {
    dispatch(HomeActions.setMobileMenu({mobileMenu: true}))
  }

  return (
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
        <Div onClick={handleMobileMenu} className={styles.hamMenuIcon}>
          <Image src={HamMenuIcon} alt={'متو'}/>
        </Div>
      </Div>
      <TextField
        search={true}
        placeholdermobilesize={'14px'}
        placeholder={"جستجو کن ..."}
        color={"tertiary"}
        variant={"filled"}
        size={'large'}
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
  )
}

export default MobileHeader