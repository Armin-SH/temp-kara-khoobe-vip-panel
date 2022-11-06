import React from 'react'
import {Div, Skeleton} from "@elements";
import styles from './skeleton.module.css'

const AddressItemSkeleton = () => {

  return (
    <Div desktop={'row-reverse'} mobile={'column'} className={styles.container}>
      <Skeleton className={styles.skeleton} variant={'rectangular'}/>
      <Skeleton className={styles.skeleton} variant={'rectangular'}/>
      <Skeleton className={styles.skeleton} variant={'rectangular'}/>
      <Skeleton className={styles.skeleton} variant={'rectangular'}/>
      <Skeleton className={styles.skeleton} variant={'rectangular'}/>
      <Skeleton className={styles.skeleton} variant={'rectangular'}/>
    </Div>
  )
}

export default AddressItemSkeleton