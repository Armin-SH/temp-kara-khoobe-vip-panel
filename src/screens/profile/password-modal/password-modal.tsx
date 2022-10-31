import React, {ChangeEvent, KeyboardEvent} from 'react'
import {Button, Div, Modal, Text, TextField} from '@elements'
import styles from './password-modal.module.css'
import {useDispatch, useSelector} from "react-redux";
import {ReducerTypes} from "@store/reducer";
import {UserActions} from "@store/user/user-actions";
import {pressEnterKey} from "@utils";

const PasswordModal = () => {
  const dispatch = useDispatch()

  const {restrictionLevel, oldPassword, newPassword, passwordFlag, changePasswordLoading} = useSelector((state: ReducerTypes) => state.user);


  const handleOldPassword = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(UserActions.setOldPassword({password: e.target.value}))
  }

  const handleNewPassword = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(UserActions.setNewPassword({password: e.target.value}))
  }

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    pressEnterKey({
      event: e, callBack: handleChangePassword
    })
  }

  const handleChangePassword = () => {
    dispatch(UserActions.changeUserPassword())
  }

  return (
    <Modal open={restrictionLevel === 'NotActive'}>
      <Div mobile={'column'} className={styles.modalContainer}>
        <Text color={'error.main'} typography={'small'} type={'medium'}>
          لطفا کلمه عبور خود برای استفاده از پنل را وارد کنید
        </Text>
        <Div mobile={'column'} className={styles.textFieldContainer}>
          <TextField
            type={"password"}
            onChange={handleOldPassword}
            InputProps={{className: styles.passwordInput}}
            className={styles.passwordTextField}
            placeholder={"********"}
            placeholderalign={"center"}
            label={'کلمه عبور'}
            mobileLogin={true}
          />
          <TextField
            type={"password"}
            onChange={handleNewPassword}
            onKeyPress={handleKeyPress}
            InputProps={{className: styles.passwordInput}}
            className={styles.passwordTextField}
            placeholder={"********"}
            placeholderalign={"center"}
            label={'تکرار کلمه عبور'}
            helperText={passwordFlag ? 'کلمه عبور یکسان نیست' : undefined}
            error={passwordFlag}
            mobileLogin={true}
          />
        </Div>
        <Button disabled={!oldPassword || !newPassword || passwordFlag} loading={changePasswordLoading} onClick={handleChangePassword} className={styles.button}>
          ذخیره کلمه عبور
        </Button>
      </Div>
    </Modal>
  )
}

export default PasswordModal