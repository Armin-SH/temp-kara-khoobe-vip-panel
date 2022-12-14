import React, {useContext, useEffect, useState} from 'react'
import {Button, Checkbox, Div, Image, Popper, Text} from '@elements'
import {TableCellProps} from './table-cell.props'
import styles from './table-cell.module.css'
import {TableContext} from '../desktop-table'
import {MoreIcon} from '@icons'
import {OrderActions} from "@store/order/order-actions";
import {useDispatch, useSelector} from "react-redux";
import {ReducerTypes} from "@store/reducer";

const TableCell = ({data, id, index}: TableCellProps) => {

  const dispatch = useDispatch()
  const state = useContext(TableContext)
  const [checked, setChecked] = useState(false)
  const [anchorEl, setAnchorEl] = React.useState(null);
  const {cancelOrderLoading, live} = useSelector((state: ReducerTypes) => state.order);

  useEffect(() => {
    if (!cancelOrderLoading) {
      state.dispatch({type: "SET_ACTION", payload: {showAction: false, id: index}});
      setAnchorEl(null);
    }
  }, [cancelOrderLoading])

  useEffect(() => {
    if (state.state.selectAll) {
      setChecked(true)
    } else {
      setChecked(false)
    }
  }, [state.state.selectAll])

  useEffect(() => {
    if (state.state.showAction.id !== index) {
      setAnchorEl(null)
    }
  }, [state.state.showAction])


  const containerClassName = `${state.state.expandArray[index]}CellContainer`

  if (id === 'selectRows') {


    const handleCheckBoxClick = () => {
      state.dispatch({type: "SELECT_ROW", payload: {id: index, checked: !checked}});
      setChecked(!checked)
    }

    return (
      <Div className={styles[containerClassName]}>
        <Checkbox onClick={handleCheckBoxClick} checked={checked}/>
      </Div>
    )
  }

  if (id === 'actions') {


    const handleClick = (event: any) => {
      state.dispatch({type: "SET_ACTION", payload: {showAction: true, id: index}});
      setAnchorEl(anchorEl ? null : event.currentTarget);
    };


    const open = Boolean(anchorEl);
    const dropId = open ? 'simple-popper' : undefined;

    const handleRequestClick = () => {
      dispatch(OrderActions.setReOrderModal({open: true, index: index}))
      state.dispatch({type: "SET_ACTION", payload: {showAction: false, id: index}});
      setAnchorEl(null);
    }

    const handleCancelOrder = () => {
      dispatch(OrderActions.cancelUserOrder({id: index}))
    }

    return (
      <Div className={styles[containerClassName]}>
        <Button onClick={handleClick} variant={'text'} size={"medium"} shape={'square'}>
          <Div className={styles.moreButton}>
            <Image src={MoreIcon} alt={'...'}/>
          </Div>
        </Button>
        <Popper className={styles.popperContainer} id={dropId} placement={'bottom-start'} open={open} anchorEl={anchorEl}>
          <Div mobile={'column'} className={styles.popper}>
            <Button size={'medium'} onClick={handleRequestClick} disabled={cancelOrderLoading} className={styles.button} variant={"text"}>
              <Text color={"grey.900"} type={'medium'} typography={'tiny'} align={"right"}>
                ?????????????? ????????
              </Text>
            </Button>
            {live ? (
              <Button loading={cancelOrderLoading} disabled={cancelOrderLoading} size={'medium'} onClick={handleCancelOrder} className={styles.button} variant={"text"}>
                <Text color={"grey.900"} typography={'tiny'} type={'medium'} align={"right"}>
                  ??????
                </Text>
              </Button>
            ) : null}
          </Div>
        </Popper>
      </Div>
    )
  }

  if (id === 'expandable') {

    const handleClick = () => {
      state.dispatch({type: 'SET_EXPAND', payload: {id: index, expand: !state.state.expandArray[index]}})
    }

    const className = `${state.state.expandArray[index]}ExpandContainer`
    return (
      <Div className={styles[containerClassName]}>
        <Div onClick={handleClick} className={styles[className]}>
          <Text color={'common.white'} typography={'tiny'} type={'bold'}>
            {state.state.expandArray[index] ? '????????' : '????????????'}
          </Text>
        </Div>
      </Div>
    )
  }

  if (id === 'modal') {

    const handleClick = () => {
      state.state.modalAction()
    }


    return (
      <Div className={styles[containerClassName]}>
        <Div onClick={handleClick} className={styles.modalContainer}>
          <Text color={'common.white'} typography={'tiny'} type={'bold'}>
            ??????????????
          </Text>
        </Div>
      </Div>
    )
  }

  return (
    <Div className={styles[containerClassName]}>
      <Text color={'grey.900'} typography={'tiny'}>
        {data}
      </Text>
    </Div>
  )
}

export default TableCell;