import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {UserActions} from "@store/user/user-actions";
import {AddressItemSkeleton, AddressList} from '@screens/address'
import {ReducerTypes} from "@store/reducer";

const AddressPage = () => {
  const {addressListLoading} = useSelector((state: ReducerTypes) => state.user);

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(UserActions.getUserAddress())
  }, [])

  if (addressListLoading) {
    return <AddressItemSkeleton/>
  }

  return <AddressList/>
}

export default AddressPage