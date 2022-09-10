import {useState} from "react";
import styles from '@styles/auth/login.module.css'
import {Button, Checkbox, Div, Text, TextField} from '@elements'
import routes from '@routes'
import {saveToCookie} from '@utils'
import {useRouter} from "next/router";

const Login = () => {
  const router = useRouter()
  const [checkbox, setCheckbox] = useState(false)

  const handleCheckbox = () => {
    setCheckbox(prevState => !prevState)
  }

  const handleLogIn = async () => {
    await saveToCookie('token', 'temp-token')
    await router.push('/')
  }

  return (
    <Div className={styles.container} mobile={"column"}>
      <Text className={styles.welcomeText} typography={"medium"} color={"grey.900"} type={"bold"}>
        ورود به حساب کاربری
      </Text>
      <TextField
        InputProps={{className: styles.mobileInput}}
        className={styles.mobileTextField}
        placeholder={"- - - - - - - - (98+)"}
        placeholderalign={"center"}
        label={'شماره همراه خود را وارد کنید'}
        mobileLogin={true}
      />
      <TextField
        InputProps={{className: styles.passwordInput}}
        className={styles.passwordTextField}
        placeholder={"****"}
        placeholderalign={"center"}
        label={'کلمه عبور'}
        mobileLogin={true}
      />
      <label onClick={handleCheckbox} className={styles.checkboxContainer}>
        <Checkbox color={'primary'} checked={checkbox}/>
        <Text color={'grey.900'} typography={'extraTiny'}>
          مرا به خاطر بسپار
        </Text>
      </label>
      <Button href={routes['route.auth.otp']} size={"small"} className={styles.forgetPasswordButton} variant={"text"} color={"warning"}>
        کلمه عبور خود را فراموش کرده ام
      </Button>
      <Button onClick={handleLogIn} className={styles.loginButton}>
        ورود
      </Button>
      <Button href={routes['route.auth.otp']} className={styles.signUpButton}>
        ثبت نام
      </Button>
    </Div>
  )
}

Login.isAuthentication = true;

export default Login
