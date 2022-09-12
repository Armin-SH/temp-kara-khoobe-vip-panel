import styles from '../styles/Home.module.css'
import {Div, Image} from '@elements'
import {RequestItem} from '@screens/home'
import {InProgressIcon, DoneIndicatorIcon} from '@icons'

const Home = () => {
  return (
      <Div mobile={"column"} className={styles.container}>
        <RequestItem
            doneCounter={11}
            inProgressCounter={26}
            subTitle={'انجام شده'}
            title={'در حال انجام'}
            totalCounter={45}
            buttonTitle={'مشاهده درخواست های جاری'}
        >
          {/*<Div className={styles.inProgressWrapper}>*/}
          {/*  <Div className={styles.inProgressContainer}>*/}
          {/*    <Image src={InProgressIcon} />*/}
          {/*  </Div>*/}
          {/*</Div>*/}
          {/*<Div className={styles.doneWrapper}>*/}
          {/*  <Div className={styles.doneContainer}>*/}
          {/*    <Image src={DoneIndicatorIcon} />*/}
          {/*  </Div>*/}
          {/*</Div>*/}
        </RequestItem>
        <RequestItem
            doneCounter={32}
            inProgressCounter={85}
            subTitle={'پرداخت نشده'}
            title={'پرداخت شده'}
            totalCounter={32}
            buttonTitle={'مشاهده درخواست های گذشته'}
        >
          {/*<Div className={styles.inProgressWrapper}>*/}
          {/*  <Div className={styles.inProgressContainer}>*/}
          {/*    <Image src={InProgressIcon} />*/}
          {/*  </Div>*/}
          {/*</Div>*/}
          {/*<Div className={styles.doneWrapper}>*/}
          {/*  <Div className={styles.doneContainer}>*/}
          {/*    <Image src={DoneIndicatorIcon} />*/}
          {/*  </Div>*/}
          {/*</Div>*/}
        </RequestItem>
        <RequestItem
            doneCounter={11}
            inProgressCounter={26}
            subTitle={'پرداخت نشده'}
            title={'پرداخت شده'}
            totalCounter={87}
            buttonTitle={'مشاهده کل درخواست ها'}
        >
          <>
            {/*<Div className={styles.inProgressWrapper}>*/}
            {/*  <Div className={styles.inProgressContainer}>*/}
            {/*    <Image src={InProgressIcon} />*/}
            {/*  </Div>*/}
            {/*</Div>*/}
            {/*<Div className={styles.doneWrapper}>*/}
            {/*  <Div className={styles.doneContainer}>*/}
            {/*    <Image src={DoneIndicatorIcon} />*/}
            {/*  </Div>*/}
            {/*</Div>*/}
          </>
        </RequestItem>
      </Div>
  )
}

export default Home
