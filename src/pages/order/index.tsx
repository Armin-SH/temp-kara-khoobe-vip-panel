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
import {AlertActions} from "@store/alert/alert-action";

const numRegex = /^[+-]?\d*(?:[.,]\d*)?$/
const periodTime = [
  {_id: 'Daily', title: 'روزانه'},
  {_id: 'Weekly', title: 'هفتگی'},
  {_id: 'Monthly', title: 'ماهانه'},
]

const Order = () => {
  const dispatch = useDispatch()
  const {specialityCategoryList, specialityCategoryLoading, orderItem, specialityCategoryItem, specialityList, specialityLoading, storeOrderLoading, storeOrderError} = useSelector((state: ReducerTypes) => state.order)
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
    if (numRegex.test(e.target.value)) {
      dispatch(OrderActions.setOrderItem({key: 'specialistsNumber', value: e.target.value}))
    }
  }

  const handleStoreOrder = () => {
    if (storeOrderError) {
      dispatch(AlertActions.showAlert({
        text: 'کلیه فیلد ها اجباری هستند',
        severity: 'error'
      }))
    } else {
      dispatch(OrderActions.storeOrderRequest())
    }
  }

  return (
    <Div mobile={'column'} className={styles.wrapper}>
      <Div mobile={'column'} desktop={'row-reverse'} className={styles.fields}>
        <DropDown loading={specialityCategoryLoading} placeholder={'انتخاب دسته تخصص'} value={specialityCategoryItem} data={specialityCategoryList} onChange={specialityCategoryHandler}/>
        <DropDown loading={specialityLoading} disabled={!specialityList.length} placeholder={"تخصص"} value={orderItem.speciality} data={specialityList} onChange={specialityHandler}/>
        <DropDown address={true} placeholder={"آدرس"} value={orderItem.address} data={addressList} onChange={handleAddress}/>
      </Div>
      <Div mobile={'column'} desktop={'row-reverse'} className={styles.fields}>
        <Div className={styles.timeContainer}>
          <LocalizationProvider dateAdapter={AdapterJalaali}>
            <DateTimePicker
              mask="____/__/__"
              className={styles.time}
              minDate={Date.now()}
              // @ts-ignore
              renderInput={(params) => <TextField
                size={'large'}
                className={styles.timeInput}
                color={"common.white"}
                placeholder={'تاریخ مورد نیاز'}
                variant={'filled'}
                placeholderdesktopsize={"16px"}
                placeholdertabletsize={"16px"}
                placeholdermobilesize={"14px"}
                {...params}
              />}
              value={orderItem.startDate}
              onChange={(newValue) => {
                handleTime({value: newValue});
              }}
            />
          </LocalizationProvider>
        </Div>
        <DropDown placeholder={"دوره تسویه حساب"} value={orderItem.paymentPeriod} data={periodTime} onChange={periodCashOutHandler}/>
        <TextField
          placeholder={'تعداد متخصصین'}
          value={orderItem.specialistsNumber}
          inputMode={"numeric"}
          type={'numeric'}
          size={'large'}
          onChange={handleSpecialistNumber}
          inputProps={{inputMode: 'numeric'}}
          variant={'filled'}
          color={"common.white"}
          placeholderdesktopsize={'16px'}
          placeholdermobilesize={'14px'}
          placeholdertabletsize={'16px'}
          className={styles.dropDown}
        />
      </Div>
      <Button loading={storeOrderLoading} disabled={storeOrderLoading} onClick={handleStoreOrder} className={styles.button}>
        ثبت سفارش
      </Button>
    </Div>
  )
}

export default Order