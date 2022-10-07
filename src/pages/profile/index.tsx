import React, {useState} from 'react'
import {Button, Div, Image, MenuItem, Select, Text, TextField} from '@elements'
import styles from '@styles/profile/profile.module.css'
import {ProfileBackBackImage, ProfileBackFrontImage, ProfileImage} from '@images'
import {CameraIcon, CloseGreyIcon, StarIcon} from '@icons'

const User = ['شخصی', 'وی ای پی']

const Profile = () => {

  const [userKind, setUserKind] = useState()
  const [name, setName] = useState('')
  const [mobile, setMobile] = useState('')
  const [state, setState] = useState('')
  const [company, setCompany] = useState('')
  const [nationalId, setNationalId] = useState('')

  const typeInputHandler = (value: string) => {

  }
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
      <Div className={styles.bottomContainer} mobile={"column"} desktop={"row"}>
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
              نام و نام خانوادگی :
            </Text>
            <TextField value={name} onChange={(e: { target: { value: string } }) => setName(e.target.value)} className={styles.input} variant={"filled"} color={"common.white"}/>
            <Button onClick={() => setName('')} shape={"circle"} variant={"text"} size={"small"}>
              <Div className={styles.clearInput}>
                <Image src={CloseGreyIcon}/>
              </Div>
            </Button>
          </Div>
          <Div className={styles.inputWrapper}>
            <Text className={styles.inputLabel} color={"grey.900"} typography={'tiny'} type={"bold"}>
              شماره همراه :
            </Text>
            <TextField value={mobile} onChange={(e: { target: { value: string } }) => setMobile(e.target.value)} className={styles.input} variant={"filled"} color={"common.white"}/>
            <Button onClick={() => setMobile('')} shape={"circle"} variant={"text"} size={"small"}>
              <Div className={styles.clearInput}>
                <Image src={CloseGreyIcon}/>
              </Div>
            </Button>
          </Div>
          <Div className={styles.inputWrapper}>
            <Text className={styles.inputLabel} color={"grey.900"} typography={'tiny'} type={"bold"}>
              نوع کاربر :
            </Text>
            <Select
              hasPadding={false}
              value={userKind}
              onChange={(e: { target: { value: string } }) => typeInputHandler(e?.target?.value)}
              className={styles.selectTypeContainer}>
              <MenuItem style={{display: 'none'}} value={' '}>
                <Text color={"grey.500"} typography={"small"}>
                  نوع
                </Text>
              </MenuItem>
              {User.map((typeItem) => (
                <MenuItem
                  className={styles.selectTypeStyle}
                  key={`menuItem_${typeItem}`}
                  value={typeItem}
                >
                  <Text color={"grey.900"} typography={"small"}>
                    {typeItem}
                  </Text>
                </MenuItem>
              ))}
            </Select>
          </Div>
          <Div className={styles.inputWrapper}>
            <Text className={styles.inputLabel} color={"grey.900"} typography={'tiny'} type={"bold"}>
              موقعیت مکانی :
            </Text>
            <TextField value={state} onChange={(e: { target: { value: string } }) => setState(e.target.value)} className={styles.input} variant={"filled"} color={"common.white"}/>
            <Button onClick={() => setState('')} shape={"circle"} variant={"text"} size={"small"}>
              <Div className={styles.clearInput}>
                <Image src={CloseGreyIcon}/>
              </Div>
            </Button>
          </Div>
          <Div className={styles.inputWrapper}>
            <Text className={styles.inputLabel} color={"grey.900"} typography={'tiny'} type={"bold"}>
              نام شرکت :
            </Text>
            <TextField value={company} onChange={(e: { target: { value: string } }) => setCompany(e.target.value)} className={styles.input} variant={"filled"} color={"common.white"}/>
            <Button onClick={() => setCompany('')} shape={"circle"} variant={"text"} size={"small"}>
              <Div className={styles.clearInput}>
                <Image src={CloseGreyIcon}/>
              </Div>
            </Button>
          </Div>
          <Div className={styles.inputWrapper}>
            <Text className={styles.inputLabel} color={"grey.900"} typography={'tiny'} type={"bold"}>
              کد ملی :
            </Text>
            <TextField value={nationalId} onChange={(e: { target: { value: string } }) => setNationalId(e.target.value)} className={styles.input} variant={"filled"} color={"common.white"}/>
            <Button onClick={() => setNationalId('')} shape={"circle"} variant={"text"} size={"small"}>
              <Div className={styles.clearInput}>
                <Image src={CloseGreyIcon}/>
              </Div>
            </Button>
          </Div>
        </Div>
      </Div>
    </Div>
  )
}

Profile.hasHeader = false;

export default Profile