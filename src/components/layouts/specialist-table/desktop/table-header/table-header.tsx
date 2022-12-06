import React from 'react'
import {Checkbox, Div, Text} from '@elements'
import {TableHeaderProps} from './table-header.props'
import styles from './table-header.module.css'
import {useDispatch, useSelector} from "react-redux";
import {ReducerTypes} from "@store/reducer";
import {SpecialistTableActions} from "@store/specialist-table/specialist-table-actions";


const TableHeader = ({data}: TableHeaderProps) => {
  const state = useSelector((state: ReducerTypes) => state.specialistTable);
  const dispatch = useDispatch()

  if (data === 'selectRows') {

    const handleClick = () => {
      dispatch(SpecialistTableActions.selectAll({select: !state.selectAll}))
    }

    return (
      <Div className={styles.container}>
        <Checkbox onClick={handleClick} checked={state.selectAll}/>
      </Div>
    )
  }

  if (data === 'actions') {
    return (
      <Div className={styles.container}>
        <Text color={'grey.900'} typography={'tiny'} type={'bold'}>
          اقدامات
        </Text>
      </Div>
    )
  }

  return (
    <Div className={styles.container}>
      <Text color={'grey.900'} typography={'tiny'} type={'bold'}>
        {data}
      </Text>
    </Div>
  )
}

export default TableHeader;