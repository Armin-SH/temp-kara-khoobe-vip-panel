import React from 'react'
import {Div, Text, Button, TextField, Media} from '@elements'
import styles from '@styles/contacts/contacts.module.css'

const Contacts = () => {
  return (
      <Div className={styles.wrapper} mobile={'column'}>
        <Text align={'right'} typography={'medium'} type={"bold"} color={"grey.900"}>
          ارسال پیام
        </Text>
        <Media greaterThan={'sm'}>
          <Text align={'right'} color={'grey.500'} typography={'medium'}>
            این پیام برای همه گروه ها و یا گروه های متخصص فیلتر شده ارسال خواهد شد
          </Text>
        </Media>
        <Div mobile={'column'} className={styles.container}>
          <TextField
              className={styles.textField}
              variant={'filled'}
              color={'common.white'}
              multiline={true}
              maxRows={5}
              placeholder={'درج پیام ارسالی'}
              inputProps={{className: styles.input}}
              InputProps={{className: styles.input}}
          />
          <Text typography={'extraTiny'} color={"grey.500"} align={'left'}>
            حداکثر تعداد کاراکتر : 500
          </Text>
          <Button className={styles.sendButton}>
            ارسال پیام
          </Button>
          <Button color={'secondary'} className={styles.leaveButton}>
            انصراف از ارسال
          </Button>
        </Div>
      </Div>
  )
}

export default Contacts