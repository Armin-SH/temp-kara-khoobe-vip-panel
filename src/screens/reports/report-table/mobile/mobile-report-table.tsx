import React, {useState} from 'react'
import {Accordion, AccordionDetails, AccordionSummary, Button, Div, Image, Text} from '@elements'
import {MoreIcon} from '@icons'
import styles from './mobile-report-table.module.css'

const tempData = [
  {
    request: 'گچکار',
    time: '13:56 بعد از ظهر',
    date: '12 شهریور 1401',
    quantity: '8 نفر',
    status: 'تسویه'
  },
  {
    request: 'گچکار',
    time: '13:56 بعد از ظهر',
    date: '12 شهریور 1401',
    quantity: '8 نفر',
    status: 'تسویه'
  },
  {
    request: 'گچکار',
    time: '13:56 بعد از ظهر',
    date: '12 شهریور 1401',
    quantity: '8 نفر',
    status: 'تسویه'
  },
  {
    request: 'گچکار',
    time: '13:56 بعد از ظهر',
    date: '12 شهریور 1401',
    quantity: '8 نفر',
    status: 'تسویه'
  },
  {
    request: 'گچکار',
    time: '13:56 بعد از ظهر',
    date: '12 شهریور 1401',
    quantity: '8 نفر',
    status: 'تسویه'
  }
]

const MobileReportItem = ({item}: { item: any }) => {

  const [expand, setExpand] = useState(false)

  const topContainerClass = `${expand}TopContainer`
  const summaryClass = `${expand}Summary`

  const handleAccordionChange = () => {
    setExpand(!expand)
  }
  return (
    <Div mobile={"column"} className={styles.container}>
      <Accordion onClick={handleAccordionChange} className={styles.accordion} expanded={expand}>
        <AccordionSummary className={styles[summaryClass]}>
          <Div className={styles[topContainerClass]}>
            <Div>
              <Text color={"grey.900"}>
                نوع درخواست :
              </Text>
              <Text color={"grey.500"}>
                {item.request}
              </Text>
            </Div>
            <Button shape={"square"} size={"small"} variant={"text"}>
              <Div className={styles.more}>
                <Image src={MoreIcon}/>
              </Div>
            </Button>
          </Div>
        </AccordionSummary>
        <AccordionDetails>
          <Div mobile={"column"} className={styles.detailsContainer}>
            <Div className={styles.details}>
              <Text align={'right'} className={styles.detailsLabel} color={'grey.900'}>
                زمان ثبت :
              </Text>
              <Text align={'right'} className={styles.detailsInfo} color={'grey.500'}>
                {`${item.date} ${item.time}`}
              </Text>
            </Div>
            <Div className={styles.details}>
              <Text align={'right'} className={styles.detailsLabel} color={'grey.900'}>
                تعداد :
              </Text>
              <Text align={'right'} className={styles.detailsInfo} color={'grey.500'}>
                {item.quantity}
              </Text>
            </Div>
            <Div className={styles.details}>
              <Text align={'right'} className={styles.detailsLabel} color={'grey.900'}>
                وضعیت :
              </Text>
              <Text align={'right'} className={styles.detailsInfo} color={'grey.500'}>
                {item.status}
              </Text>
            </Div>
          </Div>
        </AccordionDetails>
      </Accordion>
      <Button color={expand ? 'secondary' : 'primary'} onClick={handleAccordionChange} className={styles.button}>
        {expand ? 'بستن' : 'مشاهده بیشتر'}
      </Button>
    </Div>
  )
}

const MobileReportTable = () => {

  return (
    <>
      {tempData.map((item, index) => (
        <MobileReportItem key={index} item={item}/>
      ))}
    </>
  )
}

export default MobileReportTable