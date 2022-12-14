import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import styles from '@styles/auth/login.module.css'
import {Button, Checkbox, Div, Text, TextField} from '@elements'
import routes from '@routes'
import {pressEnterKey, validMobileNumber} from '@utils'
import {useDispatch, useSelector} from "react-redux";
import {ReducerTypes} from "@store/reducer";
import {AuthActions} from "@store/auth/auth-actions";
import {useDebouncedCallback} from "use-debounce";
import {useAutofocus} from '@hooks'

const numRegex = /^[+-]?\d*(?:[.,]\d*)?$/

const Login = () => {
  const dispatch = useDispatch()
  const {loginLoading, isNumberValid, mobile, password} = useSelector((state: ReducerTypes) => state.auth)

  const inputRef = useAutofocus(null)

  const [checkbox, setCheckbox] = useState(false)

  const handleCheckbox = () => {
    setCheckbox(prevState => !prevState)
  }

  const handleLogIn = () => {
    dispatch(AuthActions.loginWithPassword())
  }

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    pressEnterKey({
      event: e, callBack: handleLogIn
    })
  }

  const handleUserPassword = useDebouncedCallback((e: ChangeEvent<HTMLInputElement>) => {
    dispatch(AuthActions.setUserPassword({password: e.target.value}))
  }, 500)

  const handleMobileNumber = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (numRegex.test(e.target.value)) {
      dispatch(dispatch(AuthActions.setMobileNumber({mobile: value})))
      if (value.length >= 10) {
        const validMobile = validMobileNumber(value);
        dispatch(AuthActions.setMobileValidation({isNumberValid: validMobile.isValid}))
        if (validMobile.isValid) {
          dispatch(AuthActions.setMobileNumber({mobile: `0${validMobile.mobile}`}))
        }
      } else if (isNumberValid) {
        dispatch(AuthActions.setMobileValidation({isNumberValid: false}))
      }
    }
  }

  return (
    <Div className={styles.container} mobile={"column"}>
      <Text className={styles.welcomeText} typography={"medium"} color={"grey.900"} type={"bold"}>
        ???????? ???? ???????? ????????????
      </Text>
      <TextField
        inputRef={inputRef}
        onChange={handleMobileNumber}
        InputProps={{className: styles.mobileInput}}
        className={styles.mobileTextField}
        placeholder={"(+98) - - - - - - - -"}
        placeholderalign={"center"}
        inputMode={"numeric"}
        type={'numeric'}
        inputProps={{inputMode: 'numeric'}}
        label={'?????????? ?????????? ?????? ???? ???????? ????????'}
        mobileLogin={true}
        value={mobile}
      />
      <TextField
        type={"password"}
        onChange={handleUserPassword}
        onKeyPress={handleKeyPress}
        InputProps={{className: styles.passwordInput}}
        className={styles.passwordTextField}
        placeholder={"****"}
        placeholderalign={"center"}
        label={'???????? ????????'}
        mobileLogin={true}
      />
      <label onClick={handleCheckbox} className={styles.checkboxContainer}>
        <Checkbox color={'primary'} checked={checkbox}/>
        <Text color={'grey.900'} typography={'extraTiny'}>
          ?????? ???? ???????? ??????????
        </Text>
      </label>
      <Button href={routes['route.auth.otp']} size={"small"} className={styles.forgetPasswordButton} variant={"text"} color={"warning"}>
        ???????? ???????? ?????? ???? ???????????? ???????? ????
      </Button>
      <Button loading={loginLoading} disabled={loginLoading || !isNumberValid || !password} onClick={handleLogIn} className={styles.loginButton}>
        <Text color={'common.white'} typography={'small'} type={'bold'}>
          ????????
        </Text>
      </Button>
      <Button loading={loginLoading} disabled={loginLoading} href={routes['route.auth.otp']} className={styles.signUpButton}>
        <Text color={'common.white'} typography={'small'} type={'bold'}>
          ?????? ??????
        </Text>
      </Button>
    </Div>
  )
}

Login.isAuthentication = true;

export default Login
