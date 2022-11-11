import React from 'react'
import {Button, Div, Image, Modal, Text} from "@elements";
import styles from "./request-modal.module.css";
import {CloseGreyIcon} from "@icons";
import {Two} from "@images";


const RequestModal = ({open, onClose}: { open: boolean, onClose: () => void }) => {

  return (
    <Modal closeAfterTransition={true} open={open} onClose={onClose}>
      <Div mobile={'column'} className={styles.modalContainer}>
        <Button onClick={onClose} shape={'circle'} variant={"text"} className={styles.closeContainer}>
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
          <Button onClick={onClose} className={styles.button} color={"secondary"}>
            انصراف از ارسال
          </Button>
        </Div>
      </Div>
    </Modal>
  )
}

export default RequestModal