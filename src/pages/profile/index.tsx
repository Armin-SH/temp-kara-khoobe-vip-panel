import React, {ChangeEvent, useEffect} from 'react'
import {Button, Div, Image, Text, TextField} from '@elements'
import styles from '@styles/profile/profile.module.css'
import {ProfileBackBackImage, ProfileBackFrontImage, ProfileImage} from '@images'
import {CameraIcon, CloseGreyIcon, StarIcon} from '@icons'
import {PasswordModal} from '@screens/profile'
import {Uploader} from '@modules'
import {useDispatch, useSelector} from "react-redux";
import {UserActions} from "@store/user/user-actions";
import {ReducerTypes} from "@store/reducer";
import {UserInfoFields} from "@store/user/user";


const Profile = () => {
  const {file, uploadFileLoading, userInfo, updateUSerInfoLoading} = useSelector((state: ReducerTypes) => state.user);
  const dispatch = useDispatch()


  const inputHandler = ({e, key}: { e: ChangeEvent<HTMLInputElement>, key: UserInfoFields }) => {
    dispatch(UserActions.setUserDetails({key: key, value: e.target.value}))
  }

  const clearTextField = ({key}: { key: UserInfoFields }) => {
    dispatch(UserActions.setUserDetails({key: key, value: ''}))
  }

  const handleUploadFileApi = () => {
    dispatch(UserActions.uploadUserFile())
  }

  const handleUploadFile = (state: any) => {
    dispatch(UserActions.setUserFile({file: state}))
  }

  const handleUpdateUser = () => {
    dispatch(UserActions.updateUserInfo())
  }

  useEffect(() => {
    dispatch(UserActions.getUserInfo())
  }, [])

  return (
    <Div mobile={'column'} className={styles.container}>
      <Div className={styles.backgroundImage}>
        <Div className={styles.backImage}>
          <Image src={ProfileBackBackImage}/>
        </Div>
        <Div className={styles.frontImage}>
          <Image src={ProfileBackFrontImage}/>
        </Div>
      </Div>
      <Div className={styles.bottomContainer} mobile={"column"}>
        <Div className={styles.profileInfo} mobile={"column"}>
          <Div className={styles.profileBackground}>
            <Div className={styles.profile}>
              <Image src={ProfileImage}/>
            </Div>
          </Div>
          <Button className={styles.cameraButton} shape={"circle"} size={"small"}>
            <Div className={styles.camera}>
              <Image src={CameraIcon}/>
            </Div>
          </Button>
          <Div mobile={"column"} className={styles.names}>
            <Text color={'grey.500'} typography={"small"}>
              شرکت
            </Text>
            <Div className={styles.companyName}>
              <Text color={'grey.900'} type={"bold"} typography={"large"}>
                ساختمانی البرز
              </Text>
              <Button variant={"text"}>
                <Text color={'primary'} typography={"small"}>
                  ویرایش
                </Text>
              </Button>
            </Div>
            <Div className={styles.starIcon}>
              <Image src={StarIcon}/>
            </Div>
          </Div>
        </Div>
        <Div mobile={"column"} tablet={"row-reverse"} className={styles.inputFields}>
          <Div className={styles.inputWrapper}>
            <Text className={styles.inputLabel} color={"grey.900"} typography={'tiny'} type={"bold"}>
              نام :
            </Text>
            <TextField value={userInfo.firstName} onChange={(e: ChangeEvent<HTMLInputElement>) => inputHandler({e: e, key: 'firstName'})} className={styles.input} variant={"filled"} size={'medium'} color={"common.white"}/>
            <Button onClick={() => clearTextField({key: 'firstName'})} shape={"circle"} variant={"text"} size={"small"}>
              <Div className={styles.clearInput}>
                <Image src={CloseGreyIcon}/>
              </Div>
            </Button>
          </Div>
          <Div className={styles.inputWrapper}>
            <Text className={styles.inputLabel} color={"grey.900"} typography={'tiny'} type={"bold"}>
              نام خانوادگی :
            </Text>
            <TextField value={userInfo.lastName} onChange={(e: ChangeEvent<HTMLInputElement>) => inputHandler({e: e, key: 'lastName'})} size={'medium'} className={styles.input} variant={"filled"} color={"common.white"}/>
            <Button onClick={() => clearTextField({key: 'lastName'})} shape={"circle"} variant={"text"} size={"small"}>
              <Div className={styles.clearInput}>
                <Image src={CloseGreyIcon}/>
              </Div>
            </Button>
          </Div>
          <Div className={styles.inputWrapper}>
            <Text className={styles.inputLabel} color={"grey.900"} typography={'tiny'} type={"bold"}>
              شماره همراه :
            </Text>
            <TextField value={userInfo.phoneNumber} onChange={(e: ChangeEvent<HTMLInputElement>) => inputHandler({e: e, key: 'phoneNumber'})} size={'medium'} className={styles.input} variant={"filled"} color={"common.white"}/>
            <Button onClick={() => clearTextField({key: 'phoneNumber'})} shape={"circle"} variant={"text"} size={"small"}>
              <Div className={styles.clearInput}>
                <Image src={CloseGreyIcon}/>
              </Div>
            </Button>
          </Div>
          <Div className={styles.inputWrapper}>
            <Text className={styles.inputLabel} color={"grey.900"} typography={'tiny'} type={"bold"}>
              تلفن داخلی :
            </Text>
            <TextField className={styles.input} value={userInfo.internalNumber} onChange={(e: ChangeEvent<HTMLInputElement>) => inputHandler({e: e, key: 'internalNumber'})} size={'medium'} variant={"filled"} color={"common.white"}/>
            <Button onClick={() => clearTextField({key: 'internalNumber'})} shape={"circle"} variant={"text"} size={"small"}>
              <Div className={styles.clearInput}>
                <Image src={CloseGreyIcon}/>
              </Div>
            </Button>
          </Div>
          <Div className={styles.inputWrapper}>
            <Text className={styles.inputLabel} color={"grey.900"} typography={'tiny'} type={"bold"}>
              کد ملی :
            </Text>
            <TextField value={userInfo.nationalCode} onChange={(e: ChangeEvent<HTMLInputElement>) => inputHandler({e: e, key: 'nationalCode'})} size={'medium'} className={styles.input} variant={"filled"} color={"common.white"}/>
            <Button onClick={() => clearTextField({key: 'nationalCode'})} shape={"circle"} variant={"text"} size={"small"}>
              <Div className={styles.clearInput}>
                <Image src={CloseGreyIcon}/>
              </Div>
            </Button>
          </Div>
          <Div className={styles.inputWrapper}>
            <Text className={styles.inputLabel} color={"grey.900"} typography={'tiny'} type={"bold"}>
              نام شرکت :
            </Text>
            <TextField value={userInfo.corporationName} onChange={(e: ChangeEvent<HTMLInputElement>) => inputHandler({e: e, key: 'corporationName'})} size={'medium'} className={styles.input} variant={"filled"} color={"common.white"}/>
            <Button onClick={() => clearTextField({key: 'corporationName'})} shape={"circle"} variant={"text"} size={"small"}>
              <Div className={styles.clearInput}>
                <Image src={CloseGreyIcon}/>
              </Div>
            </Button>
          </Div>
          <Div className={styles.inputWrapper}>
            <Text className={styles.inputLabel} color={"grey.900"} typography={'tiny'} type={"bold"}>
              تلفن شرکت :
            </Text>
            <TextField value={userInfo.corporationTelephone} onChange={(e: ChangeEvent<HTMLInputElement>) => inputHandler({e: e, key: 'corporationTelephone'})} size={'medium'} className={styles.input} variant={"filled"} color={"common.white"}/>
            <Button onClick={() => clearTextField({key: 'corporationTelephone'})} shape={"circle"} variant={"text"} size={"small"}>
              <Div className={styles.clearInput}>
                <Image src={CloseGreyIcon}/>
              </Div>
            </Button>
          </Div>
          <Div className={styles.inputWrapper}>
            <Text className={styles.inputLabel} color={"grey.900"} typography={'tiny'} type={"bold"}>
              کد شرکت :
            </Text>
            <TextField value={userInfo.corporationCode} onChange={(e: ChangeEvent<HTMLInputElement>) => inputHandler({e: e, key: 'corporationCode'})} size={'medium'} className={styles.input} variant={"filled"} color={"common.white"}/>
            <Button onClick={() => clearTextField({key: 'corporationCode'})} shape={"circle"} variant={"text"} size={"small"}>
              <Div className={styles.clearInput}>
                <Image src={CloseGreyIcon}/>
              </Div>
            </Button>
          </Div>
          <Div className={styles.buttonContainer}>
            <Button disabled={updateUSerInfoLoading} loading={updateUSerInfoLoading} onClick={handleUpdateUser} className={styles.button}>
              دخیره اطلاعات
            </Button>
          </Div>
          {userInfo.ceoNationalCardUrl ? (
            <Div className={styles.nationalCard}>
              <Image loader={() => userInfo.ceoNationalCardUrl} src={userInfo.ceoNationalCardUrl}/>
            </Div>
          ) : (
            <>
              <Uploader file={file} fileCallback={handleUploadFile}/>
              {file ? (
                <Button loading={uploadFileLoading} disabled={uploadFileLoading} className={styles.button} onClick={handleUploadFileApi}>
                  بارگذاری تصویر
                </Button>
              ) : null}
            </>
          )}
        </Div>
      </Div>
      <PasswordModal/>
    </Div>
  )
}

Profile.hasHeader = false;

export default Profile