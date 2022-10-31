import React, {useEffect, useState} from 'react'
import {Button, Div, Modal, Text} from '@elements'
import styles from '@styles/address/address.module.css'
import {ParsiMap} from '@modules'
import {useDispatch} from "react-redux";
import {UserActions} from "@store/user/user-actions";

const tempAddress = [
  {
    title: 'Home',
    geoLat: '35.645453',
    geoLong: '51.434343',
    number: '12',
    unit: '10',
    fullAddress: 'تهران خیابان مطهری - خیابان پلیس - خیابان اجاره دار',
    _id: 'ascfsavadvdsbvasvasv',
  },
  {
    title: 'Home',
    geoLat: '35.645453',
    geoLong: '51.434343',
    number: '12',
    unit: '10',
    fullAddress: 'تهران خیابان مطهری - خیابان پلیس - خیابان اجاره دار',
    _id: 'ascfsavadvdsbvasvasv',
  },
  {
    title: 'Home',
    geoLat: '35.645453',
    geoLong: '51.434343',
    number: '12',
    unit: '10',
    fullAddress: 'تهران خیابان مطهری - خیابان پلیس - خیابان اجاره دار',
    _id: 'ascfsavadvdsbvasvasv',
  },
  {
    title: 'Home',
    geoLat: '35.645453',
    geoLong: '51.434343',
    number: '12',
    unit: '10',
    fullAddress: 'تهران خیابان مطهری - ',
    _id: 'ascfsavadvdsbvasvasv',
  },
  {
    title: 'Home',
    geoLat: '35.645453',
    geoLong: '51.434343',
    number: '12',
    unit: '10',
    fullAddress: 'تهران خیابان مطهری - خیابان پلیس - خیابان اجاره دار',
    _id: 'ascfsavadvdsbvasvasv',
  },
]

const AddressPage = () => {

  const dispatch = useDispatch()

  const [map, setMap] = useState(false)

  const [selectedAddress, setSelectedAddress] = useState({
    title: '',
    geoLat: '',
    geoLong: '',
    number: '',
    unit: '',
    fullAddress: '',
    addressId: '',
  })

  const handleAddNewAddress = () => {
    setSelectedAddress({
      title: '',
      unit: '',
      number: '',
      geoLong: '',
      geoLat: '',
      fullAddress: '',
      addressId: '',
    })
    setMap(true)
  }

  useEffect(() => {
    dispatch(UserActions.getUserAddress())
  }, [])

  return (
    <Div mobile={"column"} className={styles.container}>
      <Div desktop={'row-reverse'} mobile={'column'} className={styles.addressListContainer}>
        {tempAddress.map((item, index) => {

          const handleEditAddress = () => {
            setSelectedAddress({...item, addressId: item._id})
            setMap(true)
          }

          const handleRemoveAddress = () => {
            dispatch(UserActions.deleteUserAddress({id: item._id}))
          }
          return (
            <Div mobile={'column'} key={`addressItem-${index}`} className={styles.addressList}>
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
                <Button onClick={handleRemoveAddress} variant={'outlined'} color={'error'} className={styles.button}>
                  حدف
                </Button>
                <Button onClick={handleEditAddress} color={'primary'} className={styles.button}>
                  ویرایش
                </Button>
              </Div>
            </Div>
          )
        })}
      </Div>
      <Button onClick={handleAddNewAddress}>
        افزودن آدرس جدید
      </Button>
      <Modal open={map} onClose={() => setMap(false)}>
        <ParsiMap
          defaultAddress={selectedAddress.fullAddress}
          defaultLocation={{lat: selectedAddress.geoLat, lng: selectedAddress.geoLong}}
          defaultPlate={selectedAddress.number}
          defaultUnit={selectedAddress.unit}
          defaultTitle={selectedAddress.title}
          closeMap={() => setMap(false)}
          addressId={selectedAddress.addressId}
        />
      </Modal>
    </Div>
  )
}

export default AddressPage