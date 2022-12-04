import React, {useEffect, useState} from 'react'
import {Accordion, AccordionDetails, AccordionSummary, Button, Div, Image, Popper, Text} from '@elements'
import {TableItemProps} from './table-item.props'
import styles from './table-item.module.css'
import {MoreIcon} from "@icons";
import {OrderActions} from "@store/order/order-actions";
import {useDispatch, useSelector} from "react-redux";
import {ReducerTypes} from "@store/reducer";


const TableItem = ({item, keys, values, modal, modalAction, index}: TableItemProps) => {
  const [expand, setExpand] = useState(false)
  const [anchorEl, setAnchorEl] = React.useState(null);
  const dispatch = useDispatch()
  const topContainerClass = `${expand}TopContainer`
  const summaryClass = `${expand}Summary`

  const {cancelOrderLoading, live} = useSelector((state: ReducerTypes) => state.order);


  const handleAccordionChange = () => {
    setExpand(!expand)
  }

  const handleAction = (event: any) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };


  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  const handleReOrder = () => {
    setAnchorEl(null);
    dispatch(OrderActions.setReOrderModal({open: true, index: index}))
  }

  useEffect(() => {
    if (!cancelOrderLoading) {
      setAnchorEl(null);
    }
  }, [cancelOrderLoading])

  const handleCancelOrder = () => {
    dispatch(OrderActions.cancelUserOrder({id: index}))
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
            <Button onClick={handleAction} shape={"square"} size={"small"} variant={"text"}>
              <Div className={styles.more}>
                <Image src={MoreIcon}/>
              </Div>
            </Button>
            <Popper className={styles.popperContainer} id={id} placement={'bottom-start'} open={open} anchorEl={anchorEl}>
              <Div mobile={'column'} className={styles.popper}>
                <Button disabled={cancelOrderLoading} onClick={handleReOrder} className={styles.actionButton} variant={"text"}>
                  <Text color={"grey.900"} typography={'tiny'} align={"right"}>
                    درخواست مجدد
                  </Text>
                </Button>
                {live ? (
                  <Button disabled={cancelOrderLoading} loading={cancelOrderLoading} onClick={handleCancelOrder} className={styles.actionButton} variant={"text"}>
                    <Text color={"grey.900"} typography={'tiny'} align={"right"}>
                      لغو
                    </Text>
                  </Button>
                ) : null}
              </Div>
            </Popper>
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
                    {item[keys[index]]}
                  </Text>
                </Div>
              )
            })}
            {modal ? (
              <Div className={styles.modalContainer}>
                <Text align={'right'} color={'grey.900'}>
                  وضعیت
                </Text>
                <Button size={'small'} className={styles.modalButton} onClick={modalAction}>
                  <Text color={'common.white'} typography={'tiny'} type={'medium'}>
                    درخواست
                  </Text>
                </Button>
              </Div>
            ) : null}
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