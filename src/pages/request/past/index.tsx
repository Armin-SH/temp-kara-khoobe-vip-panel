import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {OrderActions} from "@store/order/order-actions";
import {ReOrderModal, RequestList} from '@screens/request'
import {ReducerTypes} from "@store/reducer";
import {Button, Div, Image, LoadingIndicator, Text} from "@elements";
import styles from "@styles/request/past-request.module.css";
import {EmptyListImage} from '@images'
import {useRouter} from "next/router";
import routes from "@routes";


const PastRequest = () => {
  const {orderList, orderListLoading} = useSelector((state: ReducerTypes) => state.order);

  const dispatch = useDispatch()
  const router = useRouter()
  useEffect(() => {
    dispatch(OrderActions.getOrderList({live: false, page: 1}))
  }, [])

  const handleNewRequest = () => {
    router.push(routes['route.order.index'])
  }

  if (orderListLoading) {
    return (
      <Div className={styles.loadingWrapper}>
        <LoadingIndicator size={"60px"} color={"primary"}/>
      </Div>
    )
  }

  if (orderList && orderList.length) {
    return (
      <>
        <RequestList/>
        <ReOrderModal/>
      </>
    )
  }

  return (
    <Div mobile={'column'} className={styles.wrapper}>
      <Div className={styles.emptyListImage}>
        <Image src={EmptyListImage} alt={'Empty_List'}/>
      </Div>
      <Text color={'grey.900'} typography={'medium'} type={'bold'}>
        درخواستی ثبت نشده است !
      </Text>
      <Button onClick={handleNewRequest} className={styles.button}>
        ثبت درخواست جدید
      </Button>
    </Div>
  )
}

export default PastRequest