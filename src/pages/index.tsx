import styles from '../styles/Home.module.css'
import {Button, Div, TextField} from '@elements'

const Home = () => {
  return (
    <Div className={styles.container}>
      <Button>
        button
      </Button>
      <TextField
        InputProps={{className: styles.input}}
        className={styles.textField}
        placeholder={"- - - - - - (98+)"}
        placeholderAlign={"center"}
        label={'شماره همراه خود را وارد کنید'}
      />
    </Div>
  )
}

export default Home
