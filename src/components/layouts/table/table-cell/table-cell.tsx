import React, {useContext, useState} from 'react'
import {Checkbox, Div, Button, Image} from '@elements'
import {TableCellProps} from './table-cell.props'
import styles from './table-cell.module.css'
import {TableContext} from '../table'
import {MoreIcon} from '@icons'

const TableCell = ({data, id, index}: TableCellProps) => {

  const state = useContext(TableContext)
  if(id === 'selectRows') {

    const [checked, setChecked] = useState(false)

    const handleCheckBoxClick = () => {
      // @ts-ignore
      console.log(state)
      state.dispatch({ type: "SELECT_ROW", payload: {id: index, checked: !checked} });
      setChecked(!checked)
    }

    return (
      <Div className={styles.container}>
        <Checkbox onClick={handleCheckBoxClick} checked={checked} />
      </Div>
    )
  }

  if(id === 'actions') {

    const handleActionClick = () => {
      state.dispatch({ type: "OPEN_EXPAND", payload: {id: index} });
    }

    return (
      <Div className={styles.container}>
        <Button onClick={handleActionClick} variant={'text'} size={"medium"} shape={'square'}>
          <Div className={styles.moreButton}>
            <Image src={MoreIcon} alt={'...'} />
          </Div>
        </Button>
      </Div>
    )
  }

  return (
    <Div className={styles.container}>
      {data}
    </Div>
  )
}

export default TableCell;