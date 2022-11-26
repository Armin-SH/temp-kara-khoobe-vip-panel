import React, {ChangeEvent, KeyboardEvent, useEffect} from "react";
import styles from '@styles/auth/verify.module.css'
import {Button, Div, Image, Text, TextField} from '@elements'
import {CountDown} from '@modules'
import {ReturnIcon} from '@icons'
import routes from '@routes'
import {useDispatch, useSelector} from "react-redux";
import {ReducerTypes} from "@store/reducer";
import {AuthActions} from "@store/auth/auth-actions";
import {pressEnterKey} from "@utils";
import {useAutofocus} from "@hooks";
import {useDebouncedCallback} from "use-debounce";
import {useRouter} from "next/router";

const Verify = () => {
  const router = useRouter()
  const {verifyLoading, otpCode, mobile, countDownReset, validationCodeLoading, countDownOver} = useSelector((state: ReducerTypes) => state.auth);

  const resendCodeClassName = `${countDownOver}ResendButton`

  useEffect(() => {
    if (!mobile) {
      router.push(routes['route.auth.otp'])
    }
  }, [])
  const dispatch = useDispatch()
  const inputRef = useAutofocus(null)

  const handleOtpCode = useDebouncedCallback((e: ChangeEvent<HTMLInputElement>) => {
    dispatch(AuthActions.setOtpCode({otpCode: e.target.value}))
  }, 500)

  const handleVerifyCode = () => {
    dispatch(AuthActions.verifyOtpCode())
  }

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    pressEnterKey({
      event: e, callBack: handleVerifyCode
    })
  }

  const handleCountDown = () => {
    if (inputRef.current) {
      inputRef.current.value = ''
      dispatch(AuthActions.setCountDownReset({reset: true}))
    }
  }

  const handleValidationCode = () => {
    dispatch(AuthActions.sendValidationCode())
  }

  return (
    <Div className={styles.container} mobile={"column"}>
      <Button href={routes['route.auth.otp']} className={styles.returnButton} variant={"text"}>
        <Text typography={"tiny"} color={'grey.900'}>
          بازگشت
        </Text>
        <Div className={styles.returnIcon}>
          <Image src={ReturnIcon} alt={"بازگشت"}/>
        </Div>
      </Button>
      <Text className={styles.welcomeText} typography={"medium"} color={"grey.900"} type={"bold"}>
        کد پیامک شده را وارد کنید
      </Text>
      <TextField
        disabled={countDownOver}
        inputRef={inputRef}
        onKeyPress={handleKeyPress}
        onChange={handleOtpCode}
        InputProps={{className: styles.passwordInput}}
        className={styles.passwordTextField}
        placeholder={"******"}
        inputMode={"numeric"}
        type={'numeric'}
        inputProps={{inputMode: 'numeric'}}
        placeholderalign={"center"}
        label={'کد تایید'}
      />
      <Button onClick={handleVerifyCode} loading={verifyLoading || validationCodeLoading} disabled={verifyLoading || otpCode.length < 6 || validationCodeLoading} className={styles.getCodeButton}>
        <Text color={'common.white'} typography={'small'} type={'bold'}>
          تایید کد
        </Text>
      </Button>
      <Div mobile={"column-reverse"} tablet={"row-reverse"} className={styles.countDownContainer}>
        <Text color={"grey.900"} align={"right"} typography={"tiny"}>
          پس از ورود در بخش تنظیمات پنل ، رمز خود را تغییر دهید
        </Text>
        <CountDown parentCallback={handleCountDown} reset={countDownReset} variant={"outlined"} sec={120}/>
      </Div>
      <Button onClick={handleValidationCode} className={styles[resendCodeClassName]} color={'primary'} variant={'contained'}>
        <Text color={'common.white'} typography={'small'} type={'bold'}>
          دریافت مجدد کد اعتبار سنجی
        </Text>
      </Button>
      <Button href={routes['route.auth.otp']} size={"small"} className={styles.changeMobile} color={"secondary"} variant={"text"}>
        ویرایش شماره موبایل
      </Button>
    </Div>
  )
}

Verify.isAuthentication = true;

export default Verify;
