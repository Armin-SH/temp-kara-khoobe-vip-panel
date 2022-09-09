import styles from '@styles/auth/otp.module.css'
import {Button, Div, Image, Text, TextField} from '@elements'
import routes from '@routes'
import {ReturnIcon} from "@icons";

const Otp = () => {

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
        InputProps={{className: styles.mobileInput}}
        className={styles.mobileTextField}
        placeholder={"- - - - - - - - (98+)"}
        placeholderalign={"center"}
        label={'شماره همراه خود را وارد کنید'}
      />
      <Button href={routes['route.auth.verify']} className={styles.getCodeButton}>
        دریافت کد
      </Button>
      <Text color={"grey.900"} align={"right"} typography={"tiny"}>
        کد یکبار مصرف از طریق پیامک برای شما ارسال خواهد شد
      </Text>
      <Button size={"small"} className={styles.editMobileButton} variant={"text"} color={"warning"}>
        ویرایش شماره موبایل
      </Button>
    </Div>
  )
}

Otp.isAuthentication = true;

export default Otp;
