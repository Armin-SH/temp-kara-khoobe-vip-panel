import React, {useEffect, useRef, useState} from 'react'
import {ContainerProps, CountdownProps} from './countdown.props'
import {Text} from '@elements'
import styles from './countdown.module.css'
import {styled} from '@mui/material/styles'

const Container = styled("div")<ContainerProps>`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  border-radius: 4px;
  justify-content: center;
  ${(props) => props.variant === "contained" ? `
    background-color: #84bffc;
  ` : null}
`;

const CountDown = ({sec, parentCallback, reset, variant}: CountdownProps) => {
  const [timerSec, setTimerSec] = useState<number>(sec);
  const [timerMin, setTimerMin] = useState<number>(0);
  const [timerHour, setTimerHour] = useState<number>(0);
  const id = useRef(null);

  useEffect(() => {
    setTimerSec(sec);
    calculateTimes();
  }, [sec]);

  const calculateTimes = () => {
    if (sec >= 3600) {
      setTimerHour(Math.floor(sec / 3600));
      setTimerMin(Math.floor((sec % 3600) / 60));
      setTimerSec(Math.floor((sec % 3600) % 60));
    } else {
      setTimerMin(Math.floor(sec / 60));
      setTimerSec(Math.floor(sec % 60));
    }
  };

  const clear = () => {
    // @ts-ignore
    clearInterval(id.current)
  };

  useEffect(() => {
    calculateTimes();
    // @ts-ignore
    id.current = setInterval(() => {
      setTimerSec((time) => time - 1)
    }, 1000);
    return () => clear()
  }, [reset]);

  useEffect(() => {
    if (timerSec === 0 && timerMin === 0 && timerHour === 0) {
      if (parentCallback && typeof parentCallback === "function") {
        parentCallback(true);
      }
      clear()
    } else if (timerSec === -1 && timerMin !== 0) {
      setTimerSec(59);
      setTimerMin((time) => time - 1)
    } else if (timerSec === -1 && timerMin === 0 && timerHour !== 0) {
      setTimerSec(59);
      setTimerMin(59);
      setTimerHour((time) => time - 1)
    }
  }, [timerSec]);

  return (
    <Container variant={variant}>
      <Text typography={"tiny"} color={variant === "contained" ? "common.white" : "grey.900"}>
        {timerSec < 10 ? "0" + timerSec : timerSec}
      </Text>
      <Text className={styles.margin} typography={"tiny"} color={variant === "contained" ? "common.white" : "grey.900"}>:</Text>
      <Text typography={"tiny"} color={variant === "contained" ? "common.white" : "grey.900"}>
        {timerMin < 10 ? "0" + timerMin : timerMin}
      </Text>
      {sec >= 3600 ?
        <>
          <Text className={styles.margin} typography={"tiny"} color={variant === "contained" ? "common.white" : "grey.900"}>:</Text>
          <Text typography={"tiny"} color={variant === "contained" ? "common.white" : "grey.900"}>
            {timerHour < 10 ? "0" + timerHour : timerHour}
          </Text>
        </> : null
      }
    </Container>
  )
};

CountDown.defaultProps = {
  variant: 'contained'
};

export default CountDown
