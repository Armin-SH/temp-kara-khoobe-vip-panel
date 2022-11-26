import React from 'react'
import {Div, Image, TextField} from '@elements'
import styles from "./desktop-header.module.css";
import {InputAdornment} from "@mui/material";
import {PlusWhiteIcon, SearchIcon} from "@icons";
import {Master, One, Three, Two} from "@images";


const DesktopHeader = () => {

  return (
    <Div tablet={'row-reverse'} className={styles.tabletHeader}>
      <TextField
        search={true}
        className={styles.searchBar}
        placeholderdesktopsize={'16px'}
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

export default DesktopHeader