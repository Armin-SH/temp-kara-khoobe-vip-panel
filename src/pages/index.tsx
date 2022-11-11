import styles from '@styles/home/home.module.css'
import {Div} from '@elements'
import {RequestItem} from '@screens/home'

const Home = () => {
  return (
    <Div mobile={"column"} desktop={"row-reverse"} className={styles.container}>
      <RequestItem
        doneCounter={0}
        inProgressCounter={0}
        subTitle={'انجام شده'}
        title={'در حال انجام'}
        totalCounter={0}
        buttonTitle={'مشاهده درخواست های جاری'}
        header={'درخواست های جاری'}
      />
      <RequestItem
        doneCounter={0}
        inProgressCounter={0}
        subTitle={'پرداخت نشده'}
        title={'پرداخت شده'}
        totalCounter={0}
        buttonTitle={'مشاهده درخواست های گذشته'}
        header={'درخواست های گذشته'}
      />
      {/*<RequestItem*/}
      {/*  doneCounter={11}*/}
      {/*  inProgressCounter={26}*/}
      {/*  subTitle={'پرداخت نشده'}*/}
      {/*  title={'پرداخت شده'}*/}
      {/*  totalCounter={87}*/}
      {/*  buttonTitle={'مشاهده کل درخواست ها'}*/}
      {/*  header={'کل درخواست ها'}*/}
      {/*/>*/}
    </Div>
  )
}

export default Home
