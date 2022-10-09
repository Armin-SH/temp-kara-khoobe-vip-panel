import React from "react";
import {Text} from "@elements"
import {DaysProps} from './days.props'
import DaysHead from "../days-head/days-head"
import {Day} from "../day/day";
import {chunk, fa, IDays, weekDayNames} from '../../config'
import {styled} from '@mui/material/styles'

const DaysBody = styled("div")`
  display: flex;
  flex: 1;
  width: 734px;
  align-self: center;
  flex-direction: column;
  position: relative;
  overflow: auto;
  margin: 0 4px;
  background-color: #ffffff;

  @media only screen and (max-width: 639px) {
    width: 80%;
    padding-bottom: 14px;
  }

  & * {
    box-sizing: border-box;
    user-select: none;
  }

  h3,
  p {
    margin: 0;
  }
`;

const DaysWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  font-size: 1rem;
  border-collapse: separate;
  border-spacing: 0 0.5rem;

  th {
    font-size: 1rem;
    font-weight: 300;
    color: #3f3f3f;
  }
`;

const StyledUl = styled("ul")`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    margin: 0;
    padding: 0;
    @media (min-width: 576px) {
      width: 45px;
      height: 45px;
    }
  }
`;

const DaysNameList = styled(StyledUl)`
  align-items: center;
  align-self: center;
  display: flex;
  width: 100%;
  border-bottom: 1px solid #C4C4C4;
  justify-content: space-between;
  height: 42px;
  color: #ffffff;
  margin-bottom: 8px;
  padding: 0 10px;

  @media only screen and (min-width: 1024px) {
    padding: 0 20px;

    p:nth-child(1) {
      visibility: hidden;
    }

    p:nth-child(1)::after {
      content: "شنبه";
      visibility: visible;
    }

    p:nth-child(2) {
      visibility: hidden;
    }

    p:nth-child(2)::after {
      content: "یکشنبه";
      visibility: visible;
    }

    p:nth-child(3) {
      visibility: hidden;
    }

    p:nth-child(3)::after {
      content: "دوشنبه";
      visibility: visible;
    }

    p:nth-child(4) {
      visibility: hidden;
    }

    p:nth-child(4)::after {
      content: "سه شنبه";
      visibility: visible;
    }

    p:nth-child(5) {
      visibility: hidden;
    }

    p:nth-child(5)::after {
      content: "چهارشنبه";
      visibility: visible;
    }

    p:nth-child(6) {
      visibility: hidden;
    }

    p:nth-child(6)::after {
      content: "پنجشنبه";
      visibility: visible;
    }

    p:nth-child(7) {
      visibility: hidden;
    }

    p:nth-child(7)::after {
      content: "جمعه";
      visibility: visible;
    }
  }

  @media only screen and (max-width: 639px) {
    padding: 0 16px;
  }
`;

const DaysNumberList = styled(StyledUl)`
  display: flex;
  flex: 1;
  align-items: flex-end;
  justify-content: flex-start;
  align-self: center;
  width: 100%;

  li {
    margin: 0 9px 4px 9px;
    width: 30px;
    height: 30px;
    font-family: IRANYekanRegular, serif;
    font-size: 20px;
  }

  @media only screen and (min-width: 1024px) {
    li {
      margin: 0 30px 30px 30px;
      width: 50px;
      height: 50px;
      font-family: IRANYekanRegular, serif;
      font-size: 24px;
    }
  }
`;

const DaysNameText = styled(Text)`
  @media only screen and (min-width: 1024px) {
    margin: 0 5px
  }
`

const boolDataset = (arg: boolean) => {
  if (arg) {
    return {
      "data-disable": arg,
    };
  }
  return null;
};

const tempHolidays = ['2022-09-17', '2022-09-25', '2022-09-27', '2022-10-05', '2022-12-27', '2023-02-04', '2023-02-11', '2023-02-18', '2023-03-08', '2023-03-20']

const Days = (props: DaysProps) => {

  const {
    days,
    daysEventListeners,
    monthName,
    increaseMonth,
    decreaseMonth,
    selectedDay,
    year,
  } = props

  if (!days.length) {
    return null;
  }

  const weeks = chunk(days, 7);


  return (
    <DaysBody>
      <DaysHead
        year={year}
        monthName={monthName}
        increaseMonth={increaseMonth}
        decreaseMonth={decreaseMonth}
      />
      <React.Fragment>
        <DaysWrapper
          data-testid="days-wrapper"
        >
          <DaysNameList>
            {weekDayNames.map(name => (
              <DaysNameText type={"medium"} typography={"tiny"} color={"grey.900"} key={name}>{name}</DaysNameText>
            ))}
          </DaysNameList>
          <div style={{width: '100%'}}>
            {weeks.map((week, idx) => (
              <DaysNumberList data-testid="days" key={`rdp-weeks-${idx}`}>
                {week.map((day: IDays, id: any) => (
                  <Day
                    key={day.utc}
                    data-testid={`day-${idx * 7 + id + 1}`}
                    data-fadate={`${day.faDate}`}
                    daysEvent={daysEventListeners}
                    selectedDay={selectedDay === day.faDate}
                    {...boolDataset(day.disabled)}
                  >
                    {!day.disabled ? fa(day.day) : null}
                  </Day>
                ))}
              </DaysNumberList>
            ))}
          </div>
        </DaysWrapper>
      </React.Fragment>
    </DaysBody>
  )
}


Days.defaultProps = {
  monthName: "",
  disableDays: [],
}

export default Days
