import React, {useContext} from 'react'
import {Checkbox, Div, Text} from '@elements'
import {TableHeaderProps} from './table-header.props'
import styles from './table-header.module.css'
import {TableContext} from '../desktop-table'


const TableHeader = ({data}: TableHeaderProps) => {
  const context = useContext(TableContext)

  if (data === 'selectRows') {

    const handleClick = () => {
      context.dispatch({type: 'SELECT_ALL', payload: {select: !context.state.selectAll}})
    }

    return (
      <Div className={styles.container}>
        <Checkbox onClick={handleClick} checked={context.state.selectAll}/>
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

  if (data === 'expandable') {
    return (
      <Div className={styles.container}>
        <Text color={'grey.900'} typography={'tiny'} type={'bold'}>
          وضعیت درخواست
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