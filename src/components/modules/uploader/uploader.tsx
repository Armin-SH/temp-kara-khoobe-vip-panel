import React, {useRef} from 'react'
import {Div, IconButton, Image, Text} from "@elements";
import styles from "./uploader.module.css";
import {useDispatch} from "react-redux";
import {AlertActions} from "@store/alert/alert-action";
import {UploaderProps} from './uploader.props'
import {CrossBlackIcon, UploadCloudIcon} from "@icons";


const Uploader = (props: UploaderProps) => {

  const {file, fileCallback} = props
  const dispatch = useDispatch()
  const uploadFileRef = useRef(null)

  const uploadFileHandler = (e: any) => {
    const value = e.target.files[0];
    if (value?.type?.includes("image")) {
      fileCallback(value)
    } else {
      dispatch(AlertActions.showAlert({text: "فایل بارگذاری شده باید عکس باشد", severity: 'error'}))
    }
  };

  const removeFileHandler = () => {
    fileCallback(undefined)
  }

  const handleClick = () => {
    // @ts-ignore
    uploadFileRef?.current?.click();
  };

  if (file) {
    return (
      <Div onClick={handleClick} desktop={"column"} className={styles.uploaderContainer}>
        <Div className={styles.filePreview}>
          <IconButton onClick={removeFileHandler} className={styles.removeImage} variant={'text'}>
            <Image alt={"حذف"} src={CrossBlackIcon} objectFit={"contain"} layout={"fill"}/>
          </IconButton>
          <Image alt={"نمایش فایل"} src={URL.createObjectURL(file)} layout={"fill"} objectFit={"contain"}/>
        </Div>
      </Div>
    )
  }

  return (
    <Div onClick={handleClick} desktop={"column"} className={styles.uploaderContainer}>
      <input type={"file"} style={{display: "none"}} ref={uploadFileRef} onChange={uploadFileHandler}/>
      <Div className={styles.uploadIcon}>
        <Image alt={"آپلود فایل"} src={UploadCloudIcon} layout={"fill"} objectFit={"contain"}/>
      </Div>
      <Text color={"grey.500"} typography={"small"}>
        تصویر نسخه خود را درون این فضا بکشید و رها کنید
      </Text>
      <Text color={"grey.500"} typography={"tiny"}>
        حداکثر حجم تصویر جهت ارسال 4 مگابایت
      </Text>
    </Div>
  )
}


export default Uploader
