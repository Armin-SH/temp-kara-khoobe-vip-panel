import styles from '@styles/auth/otp.module.css'
import {Button, Div, Image, Text, TextField} from '@elements'
import routes from '@routes'
import {ReturnIcon} from "@icons";
import {useDispatch, useSelector} from "react-redux";
import {ReducerTypes} from '@store/reducer'
import {AuthActions} from "@store/auth/auth-actions";
import {KeyboardEvent} from "react";
import {pressEnterKey, validMobileNumber} from "@utils";
import {useAutofocus} from "@hooks";

const numRegex = /^[+-]?\d*(?:[.,]\d*)?$/

const Otp = () => {
  const {validationCodeLoading, isNumberValid, mobile} = useSelector((state: ReducerTypes) => state.auth);
  const dispatch = useDispatch()
  const inputRef = useAutofocus(null)

  const handleSetMobile = (e: { target: { value: string } }) => {
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

  const handleSendValidationCode = () => {
    dispatch(AuthActions.sendValidationCode())
  }

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    pressEnterKey({
      event: e, callBack: handleSendValidationCode
    })
  }

  return (
    <Div className={styles.container} mobile={"column"}>
      <Button href={routes['route.auth.login']} className={styles.returnButton} variant={"text"}>
        <Text typography={"small"} color={'grey.900'}>
          بازگشت
        </Text>
        <Div className={styles.returnIcon}>
          <Image src={ReturnIcon} alt={"بازگشت"}/>
        </Div>
      </Button>
      <Text className={styles.welcomeText} typography={"medium"} color={"grey.900"} type={"bold"}>
        ورود با رمز یکبار مصرف
      </Text>
      <TextField
        inputRef={inputRef}
        onKeyPress={handleKeyPress}
        onChange={handleSetMobile}
        InputProps={{className: styles.mobileInput}}
        className={styles.mobileTextField}
        inputMode={"numeric"}
        type={'numeric'}
        inputProps={{inputMode: 'numeric'}}
        placeholder={"(98+) - - - - - - - -"}
        placeholderalign={"center"}
        value={mobile}
        label={'شماره همراه خود را وارد کنید'}
        mobileLogin={true}
      />
      <Button loading={validationCodeLoading} disabled={validationCodeLoading || !isNumberValid} onClick={handleSendValidationCode} className={styles.getCodeButton}>
        <Text color={'common.white'} typography={'small'} type={'bold'}>
          دریافت کد
        </Text>
      </Button>
      <Text color={"grey.900"} align={"right"} typography={"tiny"}>
        کد یکبار مصرف از طریق پیامک برای شما ارسال خواهد شد
      </Text>
    </Div>
  )
}

Otp.isAuthentication = true;

export default Otp;
