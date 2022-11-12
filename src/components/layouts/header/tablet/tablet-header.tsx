import React from 'react'
import {Div, Image, TextField} from '@elements'
import styles from "./tablet-header.module.css";
import {InputAdornment} from "@mui/material";
import {PlusWhiteIcon, SearchIcon} from "@icons";
import {Master, One, Three, Two} from "@images";


const TabletHeader = () => {

  return (
    <Div tablet={'row-reverse'} className={styles.tabletHeader}>
      <TextField
        search={true}
        className={styles.searchBar}
        placeholdermobilesize={'14px'}
        placeholdertabletsize={'16px'}
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
      <Div>
        <Div className={styles.addButton}>
          <Div className={styles.addButtonIcon}>
            <Image src={PlusWhiteIcon} alt={'افزودن'}/>
          </Div>
        </Div>
        <Div className={styles.profilePicContainer}>
          <Div className={styles.profileIconOne}>
            <Div className={styles.profileIconPic}>
              <Image src={One} alt={''}/>
            </Div>
          </Div>
          <Div className={styles.profileIconTwo}>
            <Div className={styles.profileIconPic}>
              <Image src={Two} alt={''}/>
            </Div>
          </Div>
          <Div className={styles.profileIconThree}>
            <Div className={styles.profileIconPic}>
              <Image src={Three} alt={''}/>
            </Div>
          </Div>
          <Div className={styles.profileIconMaster}>
            <Div className={styles.profileIconPic}>
              <Image src={Master} alt={''}/>
            </Div>
          </Div>
        </Div>
      </Div>
    </Div>
  )
}

export default TabletHeader