import React, {useState} from 'react'
import {Accordion, AccordionDetails, AccordionSummary, Button, Div, Image, Popper, Text} from '@elements'
import {TableItemProps} from './table-item.props'
import styles from './table-item.module.css'
import {MoreIcon} from "@icons";


const TableItem = ({item}: TableItemProps) => {
  const [expand, setExpand] = useState(false)
  const [anchorEl, setAnchorEl] = React.useState(null);

  const topContainerClass = `${expand}TopContainer`
  const summaryClass = `${expand}Summary`

  const handleAccordionChange = () => {
    setExpand(!expand)
  }

  const handleAction = (event: any) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };


  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;
  return (
    <Div mobile={"column"} className={styles.container}>
      <Accordion className={styles.accordion} expanded={expand}>
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
            <Button onClick={handleAction} shape={"square"} size={"small"} variant={"text"}>
              <Div className={styles.more}>
                <Image src={MoreIcon}/>
              </Div>
            </Button>
            <Popper className={styles.popperContainer} id={id} placement={'bottom-start'} open={open} anchorEl={anchorEl}>
              <Div mobile={'column'} className={styles.popper}>
                <Button className={styles.actionButton} variant={"text"}>
                  <Text color={"grey.900"} typography={'tiny'} align={"right"}>
                    حذف
                  </Text>
                </Button>
                <Button className={styles.actionButton} variant={"text"}>
                  <Text color={"grey.900"} typography={'tiny'} align={"right"}>
                    پین کردن
                  </Text>
                </Button>
                <Button className={styles.actionButton} variant={"text"}>
                  <Text color={"grey.900"} typography={'tiny'} align={"right"}>
                    درخواست مجدد
                  </Text>
                </Button>
              </Div>
            </Popper>
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
        {expand ? 'بستن' : 'مشاهده'}
      </Button>
    </Div>
  )
}

export default TableItem;