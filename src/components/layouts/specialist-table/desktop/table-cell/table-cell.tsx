import React, {useEffect, useState} from 'react'
import {Button, Checkbox, Div, Text} from '@elements'
import {TableCellProps} from './table-cell.props'
import styles from './table-cell.module.css'
import {useDispatch, useSelector} from "react-redux";
import {ReducerTypes} from "@store/reducer";
import {SpecialistTableActions} from "@store/specialist-table/specialist-table-actions";

export enum VipOrderSpecialistState {
  Accepted = 'پدیرفته شده',
  Working = 'در حال انجام',
  Rejected = 'رد شده',
  canceled = 'لغو شده',
  Ended = 'پایان یافته',
}

const TableCell = ({data, id, index}: TableCellProps) => {
  const dispatch = useDispatch()
  const state = useSelector((state: ReducerTypes) => state.specialistTable);
  const {cancelOrderLoading} = useSelector((state: ReducerTypes) => state.order);

  const [checked, setChecked] = useState(false)

  useEffect(() => {
    if (state.selectAll) {
      setChecked(true)
    } else {
      setChecked(false)
    }
  }, [state.selectAll])


  if (id === 'selectRows') {


    const handleCheckBoxClick = () => {
      dispatch(SpecialistTableActions.selectRow({id: index, checked: !checked}));
      setChecked(!checked)
    }

    return (
      <Div className={styles.cellContainer}>
        <Checkbox onClick={handleCheckBoxClick} checked={checked}/>
      </Div>
    )
  }

  if (id === 'actions') {


    const handleClick = () => {

    };


    return (
      <Div className={styles.cellContainer}>
        <Button className={styles.actionButton} onClick={handleClick} variant={'contained'} size={"medium"}>
          <Text color={'common.white'} typography={'small'}>
            اقدامات
          </Text>
        </Button>
      </Div>
    )
  }


  return (
    <Div className={styles.cellContainer}>
      <Text color={'grey.900'} typography={'tiny'}>
        {/* @ts-ignore */}
        {id === 'state' ? VipOrderSpecialistState[data] : data}
      </Text>
    </Div>
  )
}

export default TableCell;