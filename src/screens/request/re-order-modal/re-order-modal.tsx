import React, {ChangeEvent} from 'react'
import {Button, Div, Modal, Text, TextField} from '@elements'
import styles from './re-order-modal.module.css'
import {useDispatch, useSelector} from "react-redux";
import {ReducerTypes} from "@store/reducer";
import {OrderActions} from "@store/order/order-actions";
import {DropDown} from "@screens/order";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import AdapterJalaali from "@date-io/jalaali";
import {DateTimePicker} from "@mui/x-date-pickers/DateTimePicker";
import moment from "moment/moment";
import {AlertActions} from "@store/alert/alert-action";


const ReOrderModal = () => {
  const {reOrderModal, orderItem, modalItem, storeOrderLoading, storeOrderError} = useSelector((state: ReducerTypes) => state.order);
  const {addressList} = useSelector((state: ReducerTypes) => state.user);
  const dispatch = useDispatch()


  const handleModal = ({open}: { open: boolean }) => {
    dispatch(OrderActions.setReOrderModal({open: open}))
  }

  const handleTime = ({value}: { value: any }) => {
    dispatch(OrderActions.setOrderItem({key: 'startDate', value: moment(value).toISOString()}))
  }

  const handleAddress = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(OrderActions.setOrderItem({key: 'address', value: e.target.value}))
  }

  const handleStoreOrder = () => {
    if (storeOrderError) {
      dispatch(AlertActions.showAlert({
        text: 'زمان مراجعه و آدرس خود را مشخص کنید',
        severity: 'error'
      }))
    } else {
      dispatch(OrderActions.storeOrderRequest())
    }
  }

  return (
    <Modal closeAfterTransition={true} open={reOrderModal} onClose={() => handleModal({open: false})}>
      <Div mobile={'column'} className={styles.modalContainer}>
        <Div mobile={"column"} desktop={"row-reverse"} className={styles.dataWrapper}>
          <Div className={styles.text} mobile={"column"}>
            <Div className={styles.row}>
              <Text color={'grey.900'}>
                تخصص :
              </Text>
              <Text color={'primary'} typography={'small'} type={'medium'}>
                {modalItem.speciality}
              </Text>
            </Div>
            <Div className={styles.row}>
              <Text color={'grey.900'}>
                دوره تسویه حساب :
              </Text>
              <Text color={'primary'} typography={'small'} type={'medium'}>
                {modalItem.paymentPeriod}
              </Text>
            </Div>
            <Div className={styles.row}>
              <Text color={'grey.900'}>
                تعداد متخصصین :
              </Text>
              <Text color={'primary'} typography={'small'} type={'medium'}>
                {modalItem.specialistsNumber}
              </Text>
            </Div>
          </Div>
          <Div className={styles.input} mobile={"column"}>
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
        </Div>
        <Button loading={storeOrderLoading} disabled={storeOrderLoading} onClick={handleStoreOrder} className={styles.button}>
          ثبت سفارش
        </Button>
      </Div>
    </Modal>
  )
}

export default ReOrderModal