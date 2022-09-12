import React from 'react'
import {Button, Div, Text} from "@elements";
import styles from './request-item.module.css'
import {RequestItemProps} from './request-item.props'

const RequestItem = (props: RequestItemProps) => {

  const {inProgressCounter, doneCounter, title, subTitle, totalCounter, buttonTitle, children} = props

  return (
      <Div mobile={"column"} className={styles.wrapper}>
        <Div className={styles.container}>
          <Div className={styles.rightContainer}>
            <Div className={styles.counterContainer}>
              {children}
              <Text color={'grey.900'} typography={"extraHuge"} type={"bold"}>
                {totalCounter}
              </Text>
            </Div>
            <Div className={styles.titleContainer} mobile={"column"}>
              <Text align={'right'} typography={"tiny"} type={"bold"} color={"grey.900"}>
                {title}
              </Text>
              <Text align={'right'} typography={"tiny"} type={"bold"} color={"grey.900"}>
                {subTitle}
              </Text>
            </Div>
          </Div>
          <Div mobile={"column"} className={styles.leftContainer}>
            <Div className={styles.inProgressContainer}>
              <Text typography={"tiny"} color={"common.white"}>
                {inProgressCounter}
              </Text>
            </Div>
            <Div className={styles.doneContainer}>
              <Text typography={"tiny"} color={"common.white"}>
                {doneCounter}
              </Text>
            </Div>
          </Div>
        </Div>
        <Button className={styles.button}>
          {buttonTitle}
        </Button>
      </Div>
  )
}

export default RequestItem