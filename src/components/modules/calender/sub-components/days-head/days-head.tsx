import * as React from "react";
import {DaysHeadProps} from "./days-head.props";
import {Button, Div, Image, Text} from '@elements'
import {styled} from "@mui/material/styles";
import styles from './days-head.module.css'
import moment from "jalali-moment";
import {fa} from "../../config";
import {ArrowLeftIcon, ArrowRightIcon} from '@icons'

const DaysHeadContainer = styled("div")`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  width: 320px;
  align-self: center;
  margin-bottom: 20px;
`;

const DaysHead = (props: DaysHeadProps) => {
  const {decreaseMonth, increaseMonth, monthName, endDate, startDate, year} = props;

  const backDisable = `${moment(startDate).locale("fa").format("jMMMM")} ${fa(moment(startDate).format("jYYYY"))}` === monthName

  const forward = `${moment(endDate).locale("fa").format("jMMMM")} ${fa(moment(endDate).format("jYYYY"))}` === monthName

  return (
    <DaysHeadContainer>
      <Div className={styles.headerContainer}>
        <Div className={styles.middleContainer}>
          <Button variant={"text"} size={'small'} onClick={increaseMonth} shape={'circle'} disabled={forward}>
            <Div className={styles.monthButton}>
              <Image src={ArrowLeftIcon} objectFit={"contain"} layout={"fill"} alt={'ماه بعد'}/>
            </Div>
          </Button>
          <Text color={"grey.900"} typography={"large"} type={'bold'}>{monthName}</Text>
          <Button variant={"text"} size={'small'} onClick={decreaseMonth} shape={'circle'} disabled={backDisable}>
            <Div className={styles.monthButton}>
              <Image src={ArrowRightIcon} objectFit={"contain"} layout={"fill"} alt={'ماه قبل'}/>
            </Div>
          </Button>
        </Div>
      </Div>
    </DaysHeadContainer>
  );
};

export default DaysHead
