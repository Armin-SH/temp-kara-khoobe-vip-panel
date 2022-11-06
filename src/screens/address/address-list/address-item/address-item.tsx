import React from "react";
import {Button, Div, Text} from "@elements";
import styles from "./address-item.module.css";
import {UserActions} from "@store/user/user-actions";
import {useDispatch, useSelector} from "react-redux";
import {ReducerTypes} from "@store/reducer";


const AddressItem = ({item, editCallback}: { item: any, editCallback: ({item, map}: { item: any, map: boolean }) => void }) => {
  const dispatch = useDispatch()
  const {addressLoading} = useSelector((state: ReducerTypes) => state.user);


  const handleEditAddress = () => {
    editCallback({item: {...item, addressId: item._id}, map: true})
  }

  const handleRemoveAddress = () => {
    dispatch(UserActions.deleteUserAddress({id: item._id}))
  }

  return (
    <Div mobile={'column'} className={styles.addressList}>
      <Div className={styles.row}>
        <Text align={'right'} className={styles.addressKey} color={'grey.900'} typography={'small'} type={'bold'}>
          عنوان آدرس :
        </Text>
        <Text align={'right'} className={styles.addressValue} color={'grey.900'} typography={'small'} type={'bold'}>
          {item.title}
        </Text>
      </Div>
      <Div className={styles.row}>
        <Text align={'right'} className={styles.addressKey} color={'grey.500'} typography={'tiny'} type={'medium'}>
          متن آدرس :
        </Text>
        <Text align={'right'} className={styles.addressValue} color={'grey.500'} typography={'tiny'} type={'medium'}>
          {item.fullAddress}
        </Text>
      </Div>
      <Div className={styles.row}>
        <Text align={'right'} className={styles.addressKey} color={'grey.500'} typography={'tiny'} type={'medium'}>
          پلاک :
        </Text>
        <Text align={'right'} className={styles.addressValue} color={'grey.500'} typography={'tiny'} type={'medium'}>
          {item.number}
        </Text>
      </Div>
      <Div className={styles.row}>
        <Text align={'right'} className={styles.addressKey} color={'grey.500'} typography={'tiny'} type={'medium'}>
          واحد :
        </Text>
        <Text align={'right'} className={styles.addressValue} color={'grey.500'} typography={'tiny'} type={'medium'}>
          {item.unit}
        </Text>
      </Div>
      <Div className={styles.buttonContainer}>
        <Button disabled={addressLoading} loading={addressLoading} onClick={handleRemoveAddress} variant={'outlined'} color={'error'} className={styles.button}>
          حدف
        </Button>
        <Button disabled={addressLoading} loading={addressLoading} onClick={handleEditAddress} color={'primary'} className={styles.button}>
          ویرایش
        </Button>
      </Div>
    </Div>
  )
}

export default AddressItem
