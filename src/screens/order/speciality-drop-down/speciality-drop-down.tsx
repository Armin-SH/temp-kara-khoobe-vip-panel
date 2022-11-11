import React, {ChangeEvent} from 'react'
import styles from './speciality-drop-down.module.css'
import {Div, MenuItem, Select, Text} from '@elements'
import {SpecialityDropDownProps} from './speciality-drop-down.props'


const SpecialityDropDown = ({value, onChange, data, disabled, placeholder}: SpecialityDropDownProps) => {
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
  }

  return (
    <Div className={styles.dropDownWrapper}>
      <Select
        value={value?._id}
        hasPadding={false}
        onChange={handleOnChange}
        disabled={disabled}
        className={styles.select}
      >
        <MenuItem style={{display: 'none'}} value={" "}>
          <Text color={"grey.900"} typography={"tiny"}>
            {placeholder}
          </Text>
        </MenuItem>
        {data.map((item: { _id: string, title: string }) => (
          <MenuItem
            className={styles.degreeStyle}
            key={`speciality${item._id}`}
            value={item._id}
          >
            <Text color={"grey.500"} typography={"tiny"}>
              {item.title}
            </Text>
          </MenuItem>
        ))}
      </Select>
    </Div>
  )
}

export default SpecialityDropDown