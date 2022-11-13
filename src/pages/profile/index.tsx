import React, {ChangeEvent, useEffect} from 'react'
import {Button, Div, Image, Text, TextField} from '@elements'
import styles from '@styles/profile/profile.module.css'
import {ProfileBackBackImage, ProfileBackFrontImage, ProfileImage} from '@images'
import {CloseGreyIcon, StarIcon} from '@icons'
import {PasswordModal} from '@screens/profile'
import {Uploader} from '@modules'
import {useDispatch, useSelector} from "react-redux";
import {UserActions} from "@store/user/user-actions";
import {ReducerTypes} from "@store/reducer";
import {UserInfoFields} from "@store/user/user";
import {AlertActions} from "@store/alert/alert-action";
import {InputAdornment} from '@mui/material'


const Profile = () => {
  const {identifierFile, nationalIdFile, uploadFileLoading, userInfo, updateUSerInfoLoading, userInfoError} = useSelector((state: ReducerTypes) => state.user);
  const dispatch = useDispatch()


  const inputHandler = ({e, key}: { e: ChangeEvent<HTMLInputElement>, key: UserInfoFields }) => {
    dispatch(UserActions.setUserDetails({key: key, value: e.target.value}))
  }

  const clearTextField = ({key}: { key: UserInfoFields }) => {
    dispatch(UserActions.setUserDetails({key: key, value: ''}))
  }

  const handleUploadNationalCardFileApi = () => {
    dispatch(UserActions.uploadUserFile({key: 'ceoNationalCard'}))
  }

  const handleUploadNationalCardFile = (state: any) => {
    dispatch(UserActions.setUserFile({file: state, key: 'ceoNationalCard'}))
  }

  const handleUploadIdentifierFileApi = () => {
    dispatch(UserActions.uploadUserFile({key: 'corporationIdentifier'}))
  }

  const handleUploadIdentifierFile = (state: any) => {
    dispatch(UserActions.setUserFile({file: state, key: 'corporationIdentifier'}))
  }

  const handleUpdateUser = () => {
    if (userInfoError) {
      dispatch(AlertActions.showAlert({
        severity: 'error',
        text: 'تمامی فیلد ها اجباری هستند'
      }))
    } else {
      dispatch(UserActions.updateUserInfo())
    }
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
          <Div mobile={"column"} className={styles.names}>
            <Text color={'grey.500'} typography={"small"}>
              شرکت
            </Text>
            <Div className={styles.companyName}>
              <Text color={'grey.900'} type={"bold"} typography={"large"}>
                {userInfo.corporationName || ''}
              </Text>
            </Div>
            <Div className={styles.starIcon}>
              <Image src={StarIcon}/>
            </Div>
          </Div>
        </Div>
        <Div mobile={"column"} tablet={"row-reverse"} className={styles.inputFields}>
          <TextField
            size={"large"}
            value={userInfo.firstName}
            onChange={(e: ChangeEvent<HTMLInputElement>) => inputHandler({e: e, key: 'firstName'})}
            className={styles.textInput}
            variant={"filled"}
            color={"common.white"}
            InputProps={{
              endAdornment: (
                <InputAdornment sx={{marginLeft: "6px"}} position="end">
                  <Button onClick={() => clearTextField({key: 'firstName'})} shape={"circle"} variant={"text"} size={"small"}>
                    <Div className={styles.clearInput}>
                      <Image src={CloseGreyIcon}/>
                    </Div>
                  </Button>
                </InputAdornment>
              ),
              startAdornment: (
                <InputAdornment sx={{marginLeft: "8px"}} position="end">
                  <Text className={styles.inputLabel} color={"grey.900"} typography={'tiny'} type={"bold"}>
                    نام :
                  </Text>
                </InputAdornment>
              ),
              className: styles.input,
            }}
          />
          <TextField
            size={"large"}
            value={userInfo.lastName}
            onChange={(e: ChangeEvent<HTMLInputElement>) => inputHandler({e: e, key: 'lastName'})}
            className={styles.textInput}
            variant={"filled"}
            color={"common.white"}
            InputProps={{
              endAdornment: (
                <InputAdornment sx={{marginLeft: "6px"}} position="end">
                  <Button onClick={() => clearTextField({key: 'lastName'})} shape={"circle"} variant={"text"} size={"small"}>
                    <Div className={styles.clearInput}>
                      <Image src={CloseGreyIcon}/>
                    </Div>
                  </Button>
                </InputAdornment>
              ),
              startAdornment: (
                <InputAdornment sx={{marginLeft: "8px"}} position="end">
                  <Text className={styles.inputLabel} color={"grey.900"} typography={'tiny'} type={"bold"}>
                    نام خانوادگی :
                  </Text>
                </InputAdornment>
              ),
              className: styles.input,
            }}
          />
          <TextField
            size={"large"}
            value={userInfo.phoneNumber}
            onChange={(e: ChangeEvent<HTMLInputElement>) => inputHandler({e: e, key: 'phoneNumber'})}
            className={styles.textInput}
            variant={"filled"}
            color={"common.white"}
            InputProps={{
              endAdornment: (
                <InputAdornment sx={{marginLeft: "6px"}} position="end">
                  <Button onClick={() => clearTextField({key: 'phoneNumber'})} shape={"circle"} variant={"text"} size={"small"}>
                    <Div className={styles.clearInput}>
                      <Image src={CloseGreyIcon}/>
                    </Div>
                  </Button>
                </InputAdornment>
              ),
              startAdornment: (
                <InputAdornment sx={{marginLeft: "8px"}} position="end">
                  <Text className={styles.inputLabel} color={"grey.900"} typography={'tiny'} type={"bold"}>
                    شماره همراه مدیر عامل :
                  </Text>
                </InputAdornment>
              ),
              className: styles.input,
            }}
          />
          <TextField
            size={"large"}
            value={userInfo.internalNumber}
            onChange={(e: ChangeEvent<HTMLInputElement>) => inputHandler({e: e, key: 'internalNumber'})}
            className={styles.textInput}
            variant={"filled"}
            color={"common.white"}
            InputProps={{
              endAdornment: (
                <InputAdornment sx={{marginLeft: "6px"}} position="end">
                  <Button onClick={() => clearTextField({key: 'internalNumber'})} shape={"circle"} variant={"text"} size={"small"}>
                    <Div className={styles.clearInput}>
                      <Image src={CloseGreyIcon}/>
                    </Div>
                  </Button>
                </InputAdornment>
              ),
              startAdornment: (
                <InputAdornment sx={{marginLeft: "8px"}} position="end">
                  <Text className={styles.inputLabel} color={"grey.900"} typography={'tiny'} type={"bold"}>
                    تلفن ثابت شرکت :
                  </Text>
                </InputAdornment>
              ),
              className: styles.input,
            }}
          />
          <TextField
            size={"large"}
            value={userInfo.nationalCode}
            onChange={(e: ChangeEvent<HTMLInputElement>) => inputHandler({e: e, key: 'nationalCode'})}
            className={styles.textInput}
            variant={"filled"}
            color={"common.white"}
            InputProps={{
              endAdornment: (
                <InputAdornment sx={{marginLeft: "6px"}} position="end">
                  <Button onClick={() => clearTextField({key: 'nationalCode'})} shape={"circle"} variant={"text"} size={"small"}>
                    <Div className={styles.clearInput}>
                      <Image src={CloseGreyIcon}/>
                    </Div>
                  </Button>
                </InputAdornment>
              ),
              startAdornment: (
                <InputAdornment sx={{marginLeft: "8px"}} position="end">
                  <Text className={styles.inputLabel} color={"grey.900"} typography={'tiny'} type={"bold"}>
                    کد ملی :
                  </Text>
                </InputAdornment>
              ),
              className: styles.input,
            }}
          />
          <TextField
            size={"large"}
            value={userInfo.corporationTelephone}
            onChange={(e: ChangeEvent<HTMLInputElement>) => inputHandler({e: e, key: 'corporationTelephone'})}
            className={styles.textInput}
            variant={"filled"}
            color={"common.white"}
            InputProps={{
              endAdornment: (
                <InputAdornment sx={{marginLeft: "6px"}} position="end">
                  <Button onClick={() => clearTextField({key: 'corporationTelephone'})} shape={"circle"} variant={"text"} size={"small"}>
                    <Div className={styles.clearInput}>
                      <Image src={CloseGreyIcon}/>
                    </Div>
                  </Button>
                </InputAdornment>
              ),
              startAdornment: (
                <InputAdornment sx={{marginLeft: "8px"}} position="end">
                  <Text className={styles.inputLabel} color={"grey.900"} typography={'tiny'} type={"bold"}>
                    داخلی مدیر عامل :
                  </Text>
                </InputAdornment>
              ),
              className: styles.input,
            }}
          />
          <TextField
            size={"large"}
            value={userInfo.corporationName}
            onChange={(e: ChangeEvent<HTMLInputElement>) => inputHandler({e: e, key: 'corporationName'})}
            className={styles.textInput}
            variant={"filled"}
            color={"common.white"}
            InputProps={{
              endAdornment: (
                <InputAdornment sx={{marginLeft: "6px"}} position="end">
                  <Button onClick={() => clearTextField({key: 'corporationName'})} shape={"circle"} variant={"text"} size={"small"}>
                    <Div className={styles.clearInput}>
                      <Image src={CloseGreyIcon}/>
                    </Div>
                  </Button>
                </InputAdornment>
              ),
              startAdornment: (
                <InputAdornment sx={{marginLeft: "8px"}} position="end">
                  <Text className={styles.inputLabel} color={"grey.900"} typography={'tiny'} type={"bold"}>
                    نام شرکت :
                  </Text>
                </InputAdornment>
              ),
              className: styles.input,
            }}
          />
          <TextField
            size={"large"}
            value={userInfo.corporationCode}
            onChange={(e: ChangeEvent<HTMLInputElement>) => inputHandler({e: e, key: 'corporationCode'})}
            className={styles.textInput}
            variant={"filled"}
            color={"common.white"}
            InputProps={{
              endAdornment: (
                <InputAdornment sx={{marginLeft: "6px"}} position="end">
                  <Button onClick={() => clearTextField({key: 'corporationCode'})} shape={"circle"} variant={"text"} size={"small"}>
                    <Div className={styles.clearInput}>
                      <Image src={CloseGreyIcon}/>
                    </Div>
                  </Button>
                </InputAdornment>
              ),
              startAdornment: (
                <InputAdornment sx={{marginLeft: "8px"}} position="end">
                  <Text className={styles.inputLabel} color={"grey.900"} typography={'tiny'} type={"bold"}>
                    شناسه ثبت شرکت :
                  </Text>
                </InputAdornment>
              ),
              className: styles.input,
            }}
          />
          <Div mobile={'column'} desktop={'row-reverse'} className={styles.uploaderContainer}>
            <Div mobile={'column'} className={styles.uploaderWrapper}>
              <Text color={'grey.900'} typography={'small'} type={'bold'}>
                تصویر کارت ملی مدیر عامل
              </Text>
              {userInfo.ceoNationalCardUrl ? (
                <Div className={styles.nationalCard}>
                  <Image loader={() => `${userInfo.ceoNationalCardUrl}?mobile=true`} src={`${userInfo.ceoNationalCardUrl}?mobile=true`}/>
                </Div>
              ) : (
                <>
                  <Uploader file={nationalIdFile} fileCallback={handleUploadNationalCardFile}/>
                  {nationalIdFile ? (
                    <Button loading={uploadFileLoading} disabled={uploadFileLoading} className={styles.button} onClick={handleUploadNationalCardFileApi}>
                      بارگذاری تصویر
                    </Button>
                  ) : null}
                </>
              )}
            </Div>
            <Div mobile={'column'} className={styles.uploaderWrapper}>
              <Text color={'grey.900'} typography={'small'} type={'bold'}>
                تصویر آخرین روزنامه رسمی
              </Text>
              {userInfo.corporationIdentifierUrl ? (
                <Div className={styles.nationalCard}>
                  <Image loader={() => `${userInfo.ceoNationalCardUrl}?mobile=true`} src={`${userInfo.ceoNationalCardUrl}?mobile=true`}/>
                </Div>
              ) : (
                <>
                  <Uploader file={identifierFile} fileCallback={handleUploadIdentifierFile}/>
                  {identifierFile ? (
                    <Button loading={uploadFileLoading} disabled={uploadFileLoading} className={styles.button} onClick={handleUploadIdentifierFileApi}>
                      بارگذاری تصویر
                    </Button>
                  ) : null}
                </>
              )}
            </Div>
          </Div>
          <Div className={styles.buttonContainer}>
            <Button disabled={updateUSerInfoLoading} loading={updateUSerInfoLoading} onClick={handleUpdateUser} className={styles.button}>
              ذخیره اطلاعات
            </Button>
          </Div>
        </Div>
      </Div>
      <PasswordModal/>
    </Div>
  )
}

Profile.hasHeader = false;

export default Profile