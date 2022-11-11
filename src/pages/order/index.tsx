import React, {ChangeEvent, useEffect} from 'react'
import {Button, Div, TextField} from '@elements'
import {DropDown} from '@screens/order'
import styles from '@styles/order/order.module.css'
import {useDispatch, useSelector} from "react-redux";
import {ReducerTypes} from "@store/reducer";
import {OrderActions} from "@store/order/order-actions";
import AdapterJalaali from '@date-io/jalaali';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {DateTimePicker} from '@mui/x-date-pickers/DateTimePicker';
import moment from "moment";
import {UserActions} from "@store/user/user-actions";

const periodTime = [
  {_id: 'Daily', title: 'روزانه'},
  {_id: 'Weekly', title: 'هفتگی'},
  {_id: 'Monthly', title: 'ماهانه'},
]

const Order = () => {
  const dispatch = useDispatch()
  const {specialityCategoryList, specialityCategoryLoading, orderItem, specialityCategoryItem, specialityList, specialityLoading, storeOrderLoading} = useSelector((state: ReducerTypes) => state.order)
  const {addressList} = useSelector((state: ReducerTypes) => state.user);

  useEffect(() => {
    dispatch(OrderActions.setInitialOrder({success: true}))
    dispatch(OrderActions.getSpecialityCategory())
    dispatch(UserActions.getUserAddress())
  }, [])

  const specialityCategoryHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(OrderActions.setSpecialityCategoryValue({value: e.target.value}))
  };

  const handleTime = ({value}: { value: any }) => {
    dispatch(OrderActions.setOrderItem({key: 'startDate', value: moment(value).toISOString()}))
  }

  const specialityHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(OrderActions.setOrderItem({key: 'speciality', value: e.target.value}))
  };

  const handleAddress = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(OrderActions.setOrderItem({key: 'address', value: e.target.value}))
  }

  const periodCashOutHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(OrderActions.setOrderItem({key: 'paymentPeriod', value: e.target.value}))
  }

  const handleSpecialistNumber = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(OrderActions.setOrderItem({key: 'specialistsNumber', value: parseInt(e.target.value)}))
  }

  const handleStoreOrder = () => {
    dispatch(OrderActions.storeOrderRequest())
  }

  return (
    <Div mobile={'column'} className={styles.wrapper}>
      <Div className={styles.fields}>
        <DropDown loading={specialityCategoryLoading} placeholder={'انتخاب دسته تخصص'} value={specialityCategoryItem} data={specialityCategoryList} onChange={specialityCategoryHandler}/>
        <Div className={styles.timeContainer}>
          <LocalizationProvider dateAdapter={AdapterJalaali}>
            <DateTimePicker
              mask="____/__/__"
              className={styles.time}
              minDate={Date.now()}
              // @ts-ignore
              renderInput={(params) => <TextField className={styles.timeInput} color={"common.white"} placeholder={'تاریخ مورد نیاز'} variant={'filled'} {...params} />}
              value={orderItem.startDate}
              onChange={(newValue) => {
                handleTime({value: newValue});
              }}
            />
          </LocalizationProvider>
        </Div>
        <DropDown placeholder={"آدرس"} value={orderItem.address} data={addressList} onChange={handleAddress}/>
      </Div>
      <Div className={styles.fields}>
        <DropDown loading={specialityLoading} disabled={!specialityList.length} placeholder={"تخصص"} value={orderItem.speciality} data={specialityList} onChange={specialityHandler}/>
        <DropDown placeholder={"دوره تسویه حساب"} value={orderItem.paymentPeriod} data={periodTime} onChange={periodCashOutHandler}/>
        <Div className={styles.dropDown}>
          <TextField
            placeholder={'تعداد متخصصین'}
            value={orderItem.specialistsNumber}
            inputMode={"numeric"}
            type={'numeric'}
            onChange={handleSpecialistNumber}
            inputProps={{inputMode: 'numeric'}}
            variant={'filled'}
            color={"common.white"}
            placeholderdesktopsize={'16px'}
          />
        </Div>
      </Div>
      <Button loading={storeOrderLoading} disabled={storeOrderLoading} onClick={handleStoreOrder} className={styles.button}>
        ثبت سفارش
      </Button>
    </Div>
  )
}

export default Order