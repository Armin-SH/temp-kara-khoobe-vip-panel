import React from 'react'
import {Div, Skeleton} from '@elements'
import styles from './calender.skeleton.module.css'


const CalenderSkeleton = () => {

  return (
    <Div desktop={"column"}>
      <Div className={styles.header}>
        <Skeleton variant={"rectangular"} className={styles.headerItem}/>
        <Skeleton variant={"rectangular"} className={styles.headerItem}/>
        <Skeleton variant={"rectangular"} className={styles.headerItem}/>
      </Div>
      <Skeleton variant={"rectangular"} className={styles.week}/>
      <Div desktop={"column"} className={styles.dayContainerSkeleton}>
        <Div desktop={"row-reverse"} className={styles.weekSkeleton}>
          <Skeleton variant={"rectangular"} className={styles.day}/>
          <Skeleton variant={"rectangular"} className={styles.day}/>
          <Skeleton variant={"rectangular"} className={styles.day}/>
          <Skeleton variant={"rectangular"} className={styles.day}/>
          <Skeleton variant={"rectangular"} className={styles.day}/>
          <Skeleton variant={"rectangular"} className={styles.day}/>
          <Skeleton variant={"rectangular"} className={styles.day}/>
        </Div>
        <Div desktop={"row-reverse"} className={styles.weekSkeleton}>
          <Skeleton variant={"rectangular"} className={styles.day}/>
          <Skeleton variant={"rectangular"} className={styles.day}/>
          <Skeleton variant={"rectangular"} className={styles.day}/>
          <Skeleton variant={"rectangular"} className={styles.day}/>
          <Skeleton variant={"rectangular"} className={styles.day}/>
          <Skeleton variant={"rectangular"} className={styles.day}/>
          <Skeleton variant={"rectangular"} className={styles.day}/>
        </Div>
        <Div desktop={"row-reverse"} className={styles.weekSkeleton}>
          <Skeleton variant={"rectangular"} className={styles.day}/>
          <Skeleton variant={"rectangular"} className={styles.day}/>
          <Skeleton variant={"rectangular"} className={styles.day}/>
          <Skeleton variant={"rectangular"} className={styles.day}/>
          <Skeleton variant={"rectangular"} className={styles.day}/>
          <Skeleton variant={"rectangular"} className={styles.day}/>
          <Skeleton variant={"rectangular"} className={styles.day}/>
        </Div>
        <Div desktop={"row-reverse"} className={styles.weekSkeleton}>
          <Skeleton variant={"rectangular"} className={styles.day}/>
          <Skeleton variant={"rectangular"} className={styles.day}/>
          <Skeleton variant={"rectangular"} className={styles.day}/>
          <Skeleton variant={"rectangular"} className={styles.day}/>
          <Skeleton variant={"rectangular"} className={styles.day}/>
          <Skeleton variant={"rectangular"} className={styles.day}/>
          <Skeleton variant={"rectangular"} className={styles.day}/>
        </Div>
        <Div desktop={"row-reverse"} className={styles.weekSkeleton}>
          <Skeleton variant={"rectangular"} className={styles.day}/>
          <Skeleton variant={"rectangular"} className={styles.day}/>
          <Skeleton variant={"rectangular"} className={styles.day}/>
          <Skeleton variant={"rectangular"} className={styles.day}/>
          <Skeleton variant={"rectangular"} className={styles.day}/>
          <Skeleton variant={"rectangular"} className={styles.day}/>
          <Skeleton variant={"rectangular"} className={styles.day}/>
        </Div>
      </Div>
    </Div>
  )
}

export default CalenderSkeleton