import React, {useEffect} from 'react'
import {Button, Div, Text, TextField} from '@elements'
import styles from '@styles/settings/settings.module.css'
import {useRouter} from "next/router";
import routes from "@routes";

const tempData = ['200،000', '500،000', '1،000،000', '2،000،000', '5،000،000', '5،000،000']

const Settings = () => {

  const router = useRouter()

  useEffect(() => {
    router.replace(routes['route.request.present'])
  }, [])
  return (
    <Div mobile={'column'} className={styles.wrapper}>
      <Text className={styles.title} color={'grey.900'} typography={'medium'} type={'bold'}>
        شارژ حساب
      </Text>
      <Div mobile={'column'} className={styles.container}>
        <Div className={styles.walletAmount}>
          <Text typography={"medium"} type={'medium'} color={'primary'}>
            اعتبار حساب شما :
          </Text>
          <Text typography={"medium"} type={'medium'} color={'grey.500'}>
            2500000 ریال
          </Text>
        </Div>
        <Div className={styles.amountButtonContainer}>
          {tempData.map((item, index) => (
            <Div className={styles.amountButton} key={index}>
              <Text color={"grey.500"} type={'medium'} typography={'medium'}>
                {item}
              </Text>
              <Text color={"grey.500"} type={'medium'} typography={'medium'}>
                ریال
              </Text>
            </Div>
          ))}
        </Div>
        <Div className={styles.inputBackground}>
          <TextField
            className={styles.textField}
            placeholder={'مبلغ دلخواه خود را به ریال وارد کنید'}
            variant={'filled'}
            color={'common.white'}
            placeholdermobilesize={'16px'}
            inputProps={{className: styles.input}}
            InputProps={{className: styles.input}}
          />
        </Div>
        <Div mobile='column' className={styles.buttonContainer}>
          <Button className={styles.button}>
            <Text color={'common.white'} typography={'tiny'} type={'medium'}>
              افزایش موجودی
            </Text>
          </Button>
          <Button color={'secondary'} className={styles.button}>
            <Text color={'common.white'} typography={'tiny'} type={'medium'}>
              انصراف
            </Text>
          </Button>
        </Div>
      </Div>
    </Div>
  )
}

export default Settings