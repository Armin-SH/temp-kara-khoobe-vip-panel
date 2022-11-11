import React from 'react'
import TableItem from './table-item'
import styles from './mobile-table.module.css'
import {Button, Div, LoadingIndicator, Text} from '@elements'
import {useSelector} from "react-redux";
import {ReducerTypes} from "@store/reducer";


const MobileAccountingTable = ({data, header, modal, modalAction, nextCallback, previousCallback}: { data: Array<any>, header: object, modal?: boolean, modalAction?: () => void, previousCallback: (page: number) => void, nextCallback: (page: number) => void }) => {
  const {extendedListLoading, lastPage, page} = useSelector((state: ReducerTypes) => state.order);
  const Keys = Object.keys(header)

  const Values = Object.values(header)

  const handleNextPage = () => {
    nextCallback(page)
  }

  const handlePreviousPage = () => {
    previousCallback(page - 1)
  }


  return (
    <Div mobile={'column'} className={styles.tableWrapper}>
      {data.map((item, index) => (
        <TableItem
          modal={modal}
          modalAction={modalAction}
          keys={Keys}
          values={Values}
          index={index}
          key={index}
          item={item}
        />
      ))}
      <Div className={styles.paginationContainer}>
        <Button loading={extendedListLoading} disabled={extendedListLoading || lastPage} onClick={handleNextPage} size={'medium'} className={styles.paginationButton}>
          صفحه بعد
        </Button>
        {extendedListLoading ? (
          <LoadingIndicator size={'28px'} color={'primary'}/>
        ) : (
          <Text typography={'medium'} type={'bold'} color={'primary'}>
            {lastPage ? page : page - 1}
          </Text>
        )}
        <Button loading={extendedListLoading} disabled={extendedListLoading || (!lastPage && page === 2)} onClick={handlePreviousPage} size={'medium'} className={styles.paginationButton}>
          صفحه قبل
        </Button>
      </Div>
    </Div>
  )
}

export default MobileAccountingTable