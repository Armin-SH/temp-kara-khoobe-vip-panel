import styles from '@styles/auth/verify.module.css'
import {Button, Div, Image, Text, TextField} from '@elements'
import {CountDown} from '@modules'
import {ReturnIcon} from '@icons'
import routes from '@routes'

const Verify = () => {

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
        InputProps={{className: styles.passwordInput}}
        className={styles.passwordTextField}
        placeholder={"****"}
        placeholderalign={"center"}
        label={'کد تایید'}
      />
      <Button className={styles.getCodeButton}>
        تایید کد
      </Button>
      <Div mobile={"column-reverse"} tablet={"row-reverse"} className={styles.countDownContainer}>
        <Text color={"grey.900"} align={"right"} typography={"tiny"}>
          پس از ورود در بخش تنظیمات پنل ، رمز خود را تغییر دهید
        </Text>
        <CountDown variant={"outlined"} sec={300}/>
      </Div>
    </Div>
  )
}

Verify.isAuthentication = true;

export default Verify;
