import React from 'react'
import {Button, Div, Text} from '@elements'
import styles from './desktop-request-item.module.css'
import {RequestItemProps} from '../request-item.props'
import {ProgressProvider} from "@modules";
import {buildStyles, CircularProgressbar} from "react-circular-progressbar";

const DesktopRequestItem = (props: RequestItemProps) => {

  const {inProgressCounter, doneCounter, totalCounter, buttonTitle, title, subTitle, header} = props

  return (
      <Div className={styles.wrapper} mobile={'column'}>
        <Div mobile={"column"} className={styles.container}>
          <Text color={"grey.900"} type={"bold"} typography={"large"}>
            {header}
          </Text>
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
        </Div>
        <Button className={styles.button}>
          <Text color={"common.white"} typography={"small"}>
            {buttonTitle}
          </Text>
        </Button>
      </Div>
  )
}

export default DesktopRequestItem