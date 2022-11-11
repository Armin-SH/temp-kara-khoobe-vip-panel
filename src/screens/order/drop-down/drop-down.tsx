import React from 'react'
import styles from './drop-down.module.css'
import {Div, MenuItem, Select, Skeleton, Text} from '@elements'
import {DropDownProps} from './drop-down.props'


const DropDown = ({value, onChange, data, disabled, placeholder, loading = false}: DropDownProps) => {


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
          <Text color={"grey.900"} typography={"tiny"}>
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
        )) : null}
      </Select>
    </Div>
  )
}

export default DropDown