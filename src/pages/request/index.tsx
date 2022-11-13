import React, {useEffect} from 'react'
import {Div} from '@elements'
import styles from '@styles/request/request.module.css'
import {useRouter} from "next/router";
import routes from "@routes";

const Request = () => {
  const router = useRouter()

  useEffect(() => {
    router.replace(routes['route.request.present'])
  }, [])
  return (
    <Div className={styles.wrapper}>

    </Div>
  )
}

export default Request