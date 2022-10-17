import React, {useState} from 'react'
import {Button, Div, Image, Modal, Text} from '@elements'
import {Table} from '@layouts'
import styles from '@styles/order/order.module.css'
import {Two} from '@images'
import {CloseGreyIcon} from '@icons'

const tempData = [
  {
    name: 'سودابه کشوری',
    mobile: '09385451210',
    state: 'تهران',
    speciality: 'نظافت منزل',
    payment: '250000',
    status: 'تسویه'
  },
  {
    name: 'سودابه کشوری',
    mobile: '09385451210',
    state: 'تهران',
    speciality: 'نظافت منزل',
    payment: '250000',
    status: 'تسویه'
  },
  {
    name: 'سودابه کشوری',
    mobile: '09385451210',
    state: 'تهران',
    speciality: 'نظافت منزل',
    payment: '250000',
    status: 'تسویه'
  },
  {
    name: 'سودابه کشوری',
    mobile: '09385451210',
    state: 'تهران',
    speciality: 'نظافت منزل',
    payment: '250000',
    status: 'تسویه'
  },
  {
    name: 'سودابه کشوری',
    mobile: '09385451210',
    state: 'تهران',
    speciality: 'نظافت منزل',
    payment: '250000',
    status: 'تسویه'
  },
  {
    name: 'سودابه کشوری',
    mobile: '09385451210',
    state: 'تهران',
    speciality: 'نظافت منزل',
    payment: '250000',
    status: 'تسویه'
  },
  {
    name: 'سودابه کشوری',
    mobile: '09385451210',
    state: 'تهران',
    speciality: 'نظافت منزل',
    payment: '250000',
    status: 'تسویه'
  },
  {
    name: 'سودابه کشوری',
    mobile: '09385451210',
    state: 'تهران',
    speciality: 'نظافت منزل',
    payment: '250000',
    status: 'تسویه'
  },
  {
    name: 'سودابه کشوری',
    mobile: '09385451210',
    state: 'تهران',
    speciality: 'نظافت منزل',
    payment: '250000',
    status: 'تسویه'
  },
  {
    name: 'سودابه کشوری',
    mobile: '09385451210',
    state: 'تهران',
    speciality: 'نظافت منزل',
    payment: '250000',
    status: 'تسویه'
  },
  {
    name: 'سودابه کشوری',
    mobile: '09385451210',
    state: 'تهران',
    speciality: 'نظافت منزل',
    payment: '250000',
    status: 'تسویه'
  },
  {
    name: 'سودابه کشوری',
    mobile: '09385451210',
    state: 'تهران',
    speciality: 'نظافت منزل',
    payment: '250000',
    status: 'تسویه'
  },
  {
    name: 'سودابه کشوری',
    mobile: '09385451210',
    state: 'تهران',
    speciality: 'نظافت منزل',
    payment: '250000',
    status: 'تسویه'
  },
]

const tempDataHeader = {name: 'مشخصات', mobile: 'شماره تماس', state: 'استان', speciality: 'دسته تخصص', payment: 'پرداختی (ریال)', status: 'وضعیت'}
const tempDataMobileHeader = {name: 'مشخصات', mobile: 'شماره تماس', state: 'استان', speciality: 'دسته تخصص', payment: 'پرداختی (ریال)', status: 'وضعیت'}
const Order = () => {

  const [modal, setModal] = useState(false)

  return (
    <Div className={styles.wrapper}>
      <Table
        actions={true}
        pagination={true}
        selectRows={true}
        header={tempDataHeader}
        data={tempData}
        mobileHeader={tempDataMobileHeader}
        modalAction={() => {
          setModal(true)
        }}
        modal={true}
      />
      <Modal closeAfterTransition={true} className={styles.modal} open={modal} onClose={() => setModal(false)}>
        <Div mobile={'column'} className={styles.modalContainer}>
          <Button onClick={() => setModal(false)} shape={'circle'} variant={"text"} className={styles.closeContainer}>
            <Div className={styles.closeButton}>
              <Image src={CloseGreyIcon} alt={'close'}/>
            </Div>
          </Button>
          <Div className={styles.imageBorder}>
            <Div className={styles.profileImage}>
              <Image className={styles.image} src={Two} alt={'temp'}/>
            </Div>
            <Div className={styles.status}>
              <Text color={'common.white'} typography={'tiny'}>
                میزان رضایت : 2/8
              </Text>
            </Div>
          </Div>
          <Div mobile={"column"} className={styles.infoContainer}>
            <Text color={'grey.900'} typography={'tiny'}>
              این متخصص آماده به کار می باشد
            </Text>
            <Text color={'grey.900'} typography={'medium'} type={'bold'}>
              علی مرتضویان
            </Text>
            <Div className={styles.job}>
              <Text color={'grey.900'} typography={'tiny'}>
                (کاشیکار)
              </Text>
              <Text color={'primary'} typography={'tiny'}>
                فعال
              </Text>
            </Div>
          </Div>
          <Div mobile={'column'} className={styles.buttonContainer}>
            <Button className={styles.button}>
              ارسال درخواست
            </Button>
            <Button onClick={() => setModal(false)} className={styles.button} color={"secondary"}>
              انصراف از ارسال
            </Button>
          </Div>
        </Div>
      </Modal>
    </Div>
  )
}

export default Order