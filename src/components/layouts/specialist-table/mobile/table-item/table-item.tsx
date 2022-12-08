import React, {useState} from 'react'
import {Accordion, AccordionDetails, AccordionSummary, Button, Div, Text} from '@elements'
import {TableItemProps} from './table-item.props'
import styles from './table-item.module.css'

export enum VipOrderSpecialistState {
  Accepted = 'پدیرفته شده',
  Working = 'در حال انجام',
  Rejected = 'رد شده',
  canceled = 'لغو شده',
  Ended = 'پایان یافته',
}

const TableItem = ({item, keys, values, index}: TableItemProps) => {
  const [expand, setExpand] = useState(false)
  const topContainerClass = `${expand}TopContainer`
  const summaryClass = `${expand}Summary`

  const handleAccordionChange = () => {
    setExpand(!expand)
  }


  return (
    <Div mobile={"column"} className={styles.container}>
      <Accordion className={styles.accordion} expanded={expand}>
        <AccordionSummary className={styles[summaryClass]}>
          <Div className={styles[topContainerClass]}>
            <Div className={styles.head}>
              <Text color={"grey.900"}>
                {values[0]}
              </Text>
              <Text color={"grey.500"}>
                {item[keys[0]]}
              </Text>
            </Div>
            <Button className={styles.actionButton} variant={'contained'} size={"medium"} onClick={() => {
            }}>
              <Text color={'common.white'} typography={'tiny'}>
                اقدامات
              </Text>
            </Button>
          </Div>
        </AccordionSummary>
        <AccordionDetails>
          <Div mobile={"column"} className={styles.detailsContainer}>
            {keys.map((k: any, index) => {
              if (index === 0) {
                return null
              }
              return (
                <Div key={index} className={styles.details}>
                  <Text align={'right'} className={styles.detailsLabel} color={'grey.900'}>
                    {values[index]}
                  </Text>
                  <Text align={'right'} className={styles.detailsInfo} color={'grey.500'}>
                    {/* @ts-ignore */}
                    {keys[index] === 'state' ? VipOrderSpecialistState[item[keys[index]]] : item[keys[index]]}
                  </Text>
                </Div>
              )
            })}
          </Div>
        </AccordionDetails>
      </Accordion>
      <Button color={expand ? 'secondary' : 'primary'} onClick={handleAccordionChange} className={styles.button}>
        {expand ? 'بستن' : 'مشاهده'}
      </Button>
    </Div>
  )
}

export default TableItem;