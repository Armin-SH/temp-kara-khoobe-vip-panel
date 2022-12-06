import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {OrderActions} from "@store/order/order-actions";
import {ReOrderModal} from '@screens/request'
import {ReducerTypes} from "@store/reducer";
import {Div, Image, LoadingIndicator, Text} from "@elements";
import styles from "@styles/request/past-request.module.css";
import {EmptyListImage} from '@images'
import {SpecialistTable} from "@layouts";


const Specialist = ({orderId}: { orderId: string }) => {
  const {specialistListLoading, orderSpecialist} = useSelector((state: ReducerTypes) => state.order);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(OrderActions.getSpecialistsList({id: orderId}))
  }, [])


  const tempDataHeader = {firstname: 'نام', lastname: 'نام خانوادگی', state: 'وضعیت سفارش', phonenumber: 'شماره تلفن'}
  const tempDataHeaderMobile = {firstname: 'نام', lastname: 'نام خانوادگی', state: 'وضعیت سفارش', phonenumber: 'شماره تلفن'}

  if (specialistListLoading) {
    return (
      <Div className={styles.loadingWrapper}>
        <LoadingIndicator size={"60px"} color={"primary"}/>
      </Div>
    )
  }

  if (orderSpecialist && orderSpecialist.length) {
    return (
      <Div mobile={'column'} className={styles.container}>
        <Div>
          <SpecialistTable
            actions={true}
            header={tempDataHeader}
            data={orderSpecialist}
            mobileHeader={tempDataHeaderMobile}
            selectRows={true}
          />
        </Div>
        <ReOrderModal/>
      </Div>
    )
  }

  return (
    <Div mobile={'column'} className={styles.wrapper}>
      <Div className={styles.emptyListImage}>
        <Image src={EmptyListImage} alt={'Empty_List'}/>
      </Div>
      <Text color={'grey.900'} typography={'medium'} type={'bold'}>
        متخصصی ثبت نشده است!
      </Text>
    </Div>
  )
}


export async function getServerSideProps({params}: any) {

  return {
    props: {
      orderId: params?.orderId || null,
    },
  }
}

export default Specialist