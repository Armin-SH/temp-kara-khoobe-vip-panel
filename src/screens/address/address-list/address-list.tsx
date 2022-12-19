import React, {useState} from 'react'
import AddressItem from './address-item'
import {useSelector} from "react-redux";
import {ReducerTypes} from "@store/reducer";
import {Button, Div, Modal, Text} from "@elements";
import styles from "./address-item/address-item.module.css";
import {ParsiMap} from "@modules";

const AddressList = () => {

  const {addressList} = useSelector((state: ReducerTypes) => state.user);

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

  const handleEdit = ({item, map}: { item: any, map: boolean }) => {
    setSelectedAddress({...item, addressId: item._id})
    setMap(map)
  }

  return (
    <Div mobile={"column"} className={styles.container}>
      <Div desktop={'row-reverse'} mobile={'column'} className={styles.addressListContainer}>
        {addressList && addressList.length ? addressList.map((item, index) => (
          <AddressItem editCallback={handleEdit} key={`addressItem_${index}`} item={item}/>
        )) : null}
      </Div>
      <Button onClick={handleAddNewAddress}>
        <Text color={'common.white'} typography={'small'} type={'medium'}>
        افزودن آدرس جدید
        </Text>
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

export default AddressList