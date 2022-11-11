import React from 'react'
import {Button, Div, Text} from '@elements'
import styles from '@styles/home/calendar.module.css'
import {Calendar} from '@modules'

const CalendarPage = () => {

  const handleSelectedDay = (date: string) => {
  }
  return (
    <Div mobile={"column"} desktop={"row-reverse"} className={styles.container}>
      <Div mobile={"column"} className={styles.calendarWrapper}>
        <Div className={styles.calendarContainer}>
          <Calendar selectedDayCallback={handleSelectedDay} selectedDate={'2022-10-9'}/>
        </Div>
        <Div className={styles.buttonContainer}>
          <Button color={'tertiary'} className={styles.button}>
            <Text typography={'small'} color={"grey.900"}>
              برو به هفته گذشته
            </Text>
          </Button>
          <Button color={'tertiary'} className={styles.button}>
            <Text typography={'small'} color={"grey.900"}>
              برو به ماه گذشته
            </Text>
          </Button>
          <Button color={'tertiary'} className={styles.fullWidthButton}>
            <Text typography={'small'} color={"grey.900"}>
              برو به سه ماه گذشته
            </Text>
          </Button>
        </Div>
        <Button className={styles.rangeSelectionButton}>
          انتخاب بازه زمانی سفارشی
        </Button>
      </Div>
      <Div mobile={"column"} className={styles.cardWrapper}>
        <Div mobile={"column"} className={styles.cardContainer}>
          <Text align={"right"} typography={'medium'} type={'bold'} color={'grey.900'}>
            مجموع کل درخواست ها
          </Text>
          <Text className={styles.subTitle} align={'right'} color={'grey.500'} typography={'tiny'}>
            مشاهده و دانلود عملکرد شما در این تاریخ
          </Text>
          <Div className={styles.indicatorContainer} mobile={'column'}>
            <Text align={'right'} color={'primary'} typography={'tiny'}>
              123
            </Text>
            <Div className={styles.indicator}/>
          </Div>
          <Text align={'left'} color={'grey.500'} typography={'tiny'}>
            تاریخ 16 مرداد ماه سال 1401
          </Text>
        </Div>
        <Div mobile={"column"} className={styles.cardContainer}>
          <Text align={"right"} typography={'medium'} type={'bold'} color={'grey.900'}>
            درخواست های انجام شده
          </Text>
          <Text className={styles.subTitle} align={'right'} color={'grey.500'} typography={'tiny'}>
            مشاهده و دانلود درخواست های گذشته شما در این تاریخ
          </Text>
          <Div className={styles.indicatorContainer} mobile={'column'}>
            <Text align={'right'} color={'primary'} typography={'tiny'}>
              43
            </Text>
            <Div className={styles.indicator}/>
          </Div>
          <Text align={'left'} color={'grey.500'} typography={'tiny'}>
            تاریخ 16 مرداد ماه سال 1401
          </Text>
        </Div>
        <Div mobile={"column"} className={styles.cardContainer}>
          <Text align={"right"} typography={'medium'} type={'bold'} color={'grey.900'}>
            درخواست های جاری شما
          </Text>
          <Text className={styles.subTitle} align={'right'} color={'grey.500'} typography={'tiny'}>
            مشاهده و دانلود درخواست های جاری شما در این تاریخ
          </Text>
          <Div className={styles.indicatorContainer} mobile={'column'}>
            <Text align={'right'} color={'primary'} typography={'tiny'}>
              34
            </Text>
            <Div className={styles.indicator}/>
          </Div>
          <Text align={'left'} color={'grey.500'} typography={'tiny'}>
            تاریخ 16 مرداد ماه سال 1401
          </Text>
        </Div>
      </Div>
    </Div>
  )
}

export default CalendarPage