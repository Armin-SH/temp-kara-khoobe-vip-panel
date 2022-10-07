import React, {useState} from 'react'
import {Accordion, AccordionDetails, AccordionSummary, Button, Div, Image, Text} from '@elements'
import {MoreIcon} from '@icons'
import styles from './mobile-accounting-table.module.css'

const tempData = [
  {
    name: 'سودابه کشوری',
    mobile: '09385451210',
    state: 'تهران',
    speciality: 'نظافت منزل',
    payment: '250000',
    status: 'تسویه'
  },
  {
    name: 'سودابه کشوری',
    mobile: '09385451210',
    state: 'تهران',
    speciality: 'نظافت منزل',
    payment: '250000',
    status: 'تسویه'
  },
  {
    name: 'سودابه کشوری',
    mobile: '09385451210',
    state: 'تهران',
    speciality: 'نظافت منزل',
    payment: '250000',
    status: 'تسویه'
  },
  {
    name: 'سودابه کشوری',
    mobile: '09385451210',
    state: 'تهران',
    speciality: 'نظافت منزل',
    payment: '250000',
    status: 'تسویه'
  },
  {
    name: 'سودابه کشوری',
    mobile: '09385451210',
    state: 'تهران',
    speciality: 'نظافت منزل',
    payment: '250000',
    status: 'تسویه'
  },
]

const MobileAccountingItem = ({item}: { item: { name: string, mobile: string, state: string, speciality: string, payment: string, status: string } }) => {

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
            <Div className={styles.head}>
              <Text color={"grey.900"}>
                مشخصات :
              </Text>
              <Text color={"grey.500"}>
                {item.name}
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
                شماره تلفن :
              </Text>
              <Text align={'right'} className={styles.detailsInfo} color={'grey.500'}>
                {item.mobile}
              </Text>
            </Div>
            <Div className={styles.details}>
              <Text align={'right'} className={styles.detailsLabel} color={'grey.900'}>
                استان :
              </Text>
              <Text align={'right'} className={styles.detailsInfo} color={'grey.500'}>
                {item.state}
              </Text>
            </Div>
            <Div className={styles.details}>
              <Text align={'right'} className={styles.detailsLabel} color={'grey.900'}>
                دسته تخصص :
              </Text>
              <Text align={'right'} className={styles.detailsInfo} color={'grey.500'}>
                {item.speciality}
              </Text>
            </Div>
            <Div className={styles.details}>
              <Text align={'right'} className={styles.detailsLabel} color={'grey.900'}>
                پرداختی :
              </Text>
              <Text align={'right'} className={styles.detailsInfo} color={'grey.500'}>
                {item.payment}
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

const MobileAccountingTable = () => {

  return (
    <>
      {tempData.map((item, index) => (
        <MobileAccountingItem key={index} item={item}/>
      ))}
    </>
  )
}

export default MobileAccountingTable