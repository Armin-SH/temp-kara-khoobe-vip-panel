import styles from '../styles/Home.module.css'
import {Button, Div, Text} from '@elements'
import routes from '@routes'

const Home = () => {
  return (
    <Div className={styles.container}>
      <Text color={"grey.900"} type={"bold"} typography={"huge"}>
        صفحه اصلی پنل
      </Text>
      <Button className={styles.button} href={routes['route.auth.login']}>
        بازگشت
      </Button>
    </Div>
  )
}

export default Home
