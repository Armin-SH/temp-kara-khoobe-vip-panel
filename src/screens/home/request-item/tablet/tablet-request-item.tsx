import React from 'react'
import {Button, Div, Text} from '@elements'
import styles from "./tablet-request-item.module.css";
import {ProgressProvider} from "@modules";
import {buildStyles, CircularProgressbar} from "react-circular-progressbar";
import {RequestItemProps} from '../request-item.props'

const TabletRequestItem = (props: RequestItemProps) => {
  const {inProgressCounter, doneCounter, title, subTitle, totalCounter, buttonTitle, header} = props

  return (
      <Div className={styles.container}>
        <Div className={styles.counterContainer}>
          <Text className={styles.counterText} color={'grey.900'} typography={"extraHuge"} type={"bold"}>
            {totalCounter}
          </Text>
          <ProgressProvider valueEnd={totalCounter} valueStart={0}>
            {(value: number) => <CircularProgressbar
                styles={buildStyles({pathColor: '#FCA600', trailColor: '#F1F1F1'})}
                value={value}
                maxValue={100}
            />}
          </ProgressProvider>
        </Div>
        <Div mobile={"column"} className={styles.leftContainer}>
          <Text align={"right"} color={"grey.900"} typography={'large'} type={"bold"}>
            {header}
          </Text>
          <Div mobile={"column"} className={styles.infoContainer}>
            <Div className={styles.infoWrapper}>
              <Div className={styles.infoTitle}>
                <Div className={styles.inProgressIndicator}/>
                <Text type={"bold"} color={"grey.900"} typography={'tiny'}>
                  {title}
                </Text>
              </Div>
              <Div className={styles.infoCounter}>
                <Text color={"common.white"} typography={"tiny"}>
                  {inProgressCounter}
                </Text>
              </Div>
            </Div>
            <Div className={styles.infoWrapper}>
              <Div className={styles.infoTitle}>
                <Div className={styles.doneIndicator}/>
                <Text type={"bold"} color={"grey.900"} typography={'tiny'}>
                  {subTitle}
                </Text>
              </Div>
              <Div className={styles.doneCounter}>
                <Text color={"common.white"} typography={"tiny"}>
                  {doneCounter}
                </Text>
              </Div>
            </Div>
          </Div>
          <Button className={styles.button}>
            <Text color={"common.white"} type={"bold"} typography={"small"}>
              {buttonTitle}
            </Text>
          </Button>
        </Div>
      </Div>
  )
}

export default TabletRequestItem