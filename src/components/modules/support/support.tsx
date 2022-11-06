import React from 'react'
import {Div, Image} from '@elements'
import styles from './support.module.css'
import {SupportIcon} from '@icons'

const Support = () => {

  return null;
  return (
    <Div className={styles.supportContainer}>
      <Div className={styles.supportIcon}>
        <Image alt={'پشتیبانی'} src={SupportIcon}/>
      </Div>
    </Div>
  )
}


export default Support