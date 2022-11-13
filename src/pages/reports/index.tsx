import React, {useEffect} from 'react'
import {Div, Image} from '@elements'
import {ReportProgress} from '@modules'
import styles from '@styles/home/reports.module.css'
import {Chart} from '@images'
import {ReportTable} from '@screens/reports'
import {useRouter} from "next/router";
import routes from "@routes";

const Reports = () => {
  const router = useRouter()

  useEffect(() => {
    router.replace(routes['route.request.present'])
  }, [])
  return (
    <Div mobile={"column"} className={styles.wrapper}>
      <Div mobile={"column"} tablet={'row-reverse'} className={styles.container}>
        <Div className={styles.progressContainer}>
          <ReportProgress total={13}/>
        </Div>
        <Div className={styles.chartContainer}>
          <Div className={styles.chart}>
            <Image src={Chart} alt={"chart"}/>
          </Div>
        </Div>
      </Div>
      <Div className={styles.tableContainer}>
        <ReportTable/>
      </Div>
    </Div>
  )
}


Reports.sideBar = true;


export default Reports