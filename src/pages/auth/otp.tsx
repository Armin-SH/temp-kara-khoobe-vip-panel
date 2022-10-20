import styles from '@styles/auth/otp.module.css'
import {Button, Div, Image, Text, TextField} from '@elements'
import routes from '@routes'
import {ReturnIcon} from "@icons";
import {useDispatch, useSelector} from "react-redux";
import {ReducerTypes} from '@store/reducer'
import {AuthActions} from "@store/auth/auth-actions";
import {KeyboardEvent} from "react";
import {pressEnterKey} from "@utils";
import {useAutofocus} from "@hooks";

const Otp = () => {
  const {mobile, validationCodeLoading} = useSelector((state: ReducerTypes) => state.auth);
  const dispatch = useDispatch()
  const inputRef = useAutofocus(null)

  const handleSetMobile = (e: { target: { value: string } }) => {
    const value = e.target.value
    dispatch(AuthActions.setMobileNumber({mobile: value}))
  }

  const handleSendValidationCode = () => {
    console.log('handleValidationFunction')
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
        <Text typography={"tiny"} color={'grey.900'}>
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
        value={mobile}
        onChange={handleSetMobile}
        InputProps={{className: styles.mobileInput}}
        className={styles.mobileTextField}
        placeholder={"- - - - - - - - (98+)"}
        placeholderalign={"center"}
        label={'شماره همراه خود را وارد کنید'}
        mobileLogin={true}
      />
      <Button loading={validationCodeLoading} disabled={validationCodeLoading} onClick={handleSendValidationCode} className={styles.getCodeButton}>
        دریافت کد
      </Button>
      <Text color={"grey.900"} align={"right"} typography={"tiny"}>
        کد یکبار مصرف از طریق پیامک برای شما ارسال خواهد شد
      </Text>
    </Div>
  )
}

Otp.isAuthentication = true;

export default Otp;
