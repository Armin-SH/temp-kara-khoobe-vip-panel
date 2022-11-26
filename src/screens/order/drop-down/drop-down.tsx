import React from 'react'
import styles from './drop-down.module.css'
import {Button, Div, MenuItem, Select, Skeleton, Text} from '@elements'
import {DropDownProps} from './drop-down.props'
import {useRouter} from "next/router";
import routes from "@routes";


const DropDown = ({value, onChange, data, disabled, placeholder, loading = false, address}: DropDownProps) => {
  const router = useRouter()

  const handleAddAddress = () => {
    router.push(routes['route.address.index'])
  }

  if (loading) {
    return (
      <Div className={styles.dropDownSkeleton}>
        <Skeleton className={styles.skeleton} variant={'rectangular'}/>
      </Div>
    )
  }

  return (
    <Div className={styles.dropDownWrapper}>
      <Select
        value={value}
        hasPadding={false}
        onChange={onChange}
        disabled={disabled}
        className={styles.select}
      >
        <MenuItem style={{display: 'none'}} value={" "}>
          <Text color={"grey.900"} typography={"tiny"} type={'bold'}>
            {placeholder}
          </Text>
        </MenuItem>
        {data && data.length && typeof data === "object" ? data.map((item: { _id: number, title: string }) => (
          <MenuItem
            className={styles.degreeStyle}
            key={`speciality${item._id}`}
            value={item._id}
          >
            <Text color={"grey.500"} typography={"tiny"}>
              {item.title}
            </Text>
          </MenuItem>
        )) : address ? (
          <Div mobile={'column'} className={styles.buttonContainer}>
            <Text align={"center"} color={'error.main'} typography={"tiny"}>
              آدرسی برای شما ثبت نشده است
            </Text>
            <Button onClick={handleAddAddress} variant={"contained"} className={styles.button}>
              افزودن آدرس
            </Button>
          </Div>
        ) : null}
      </Select>
    </Div>
  )
}

export default DropDown