import React from 'react'
import {Div, Media, Text} from '@elements'
import styles from './report-Progress.module.css'


const ReportProgress = ({total}: { total: number }) => {

  return (
    <Div tablet={"column"} className={styles.container}>
      <Media className={styles.mobile} greaterThan={"xs"}>
        <Text className={styles.total} typography={"huge"} type={"bold"} color={"secondary.main"}>
          {total}
        </Text>
        <svg width="250" height="250" viewBox="0 0 250 250" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle opacity="0.2" cx="126" cy="124" r="71" className={styles.fillPath}/>
          <path d="M0.856174 139.605C2.7705 155.877 7.86502 171.614 15.8499 185.92L28.8768 178.649C21.8448 166.05 17.3583 152.192 15.6725 137.862L0.856174 139.605Z" className={styles.fillPath}/>
          <path d="M6.25524 85.9528C1.13725 101.517 -0.87107 117.935 0.344518 134.274L15.2219 133.167C14.1514 118.779 15.92 104.32 20.4272 90.613L6.25524 85.9528Z" className={styles.fillPath}/>
          <path d="M30.6309 43.0277C20.652 54.5156 12.8546 67.729 7.62223 82.0179L21.631 87.1477C26.2389 74.5642 33.1057 62.9278 41.8936 52.8109L30.6309 43.0277Z" className={styles.fillPath}/>
          <path d="M72.5613 11.5311C58.7617 17.9085 46.2411 26.7496 35.6144 37.6203L46.2824 48.0489C55.6408 38.4756 66.6671 30.6896 78.8197 25.0734L72.5613 11.5311Z" className={styles.fillPath}/>
          <path d="M122.606 0.0229326C107.407 0.314116 92.388 3.37535 78.2874 9.05633L83.8625 22.894C96.2801 17.891 109.506 15.1951 122.891 14.9387L122.606 0.0229326Z" className={styles.fillPath}/>
          <path d="M173.747 9.89693C159.749 3.96851 144.786 0.643274 129.595 0.0844766L129.046 14.9929C142.425 15.485 155.602 18.4134 167.929 23.6342L173.747 9.89693Z" className={styles.fillPath}/>
          <path d="M216.007 39.3099C205.585 28.2421 193.233 19.168 179.555 12.5333L173.044 25.956C185.089 31.7989 195.968 39.7899 205.145 49.5368L216.007 39.3099Z" className={styles.path}/>
          <path d="M242.801 83.1912C237.716 68.8648 230.061 55.586 220.211 44.0069L208.848 53.6732C217.522 63.8704 224.264 75.5644 228.742 88.181L242.801 83.1912Z" className={styles.path}/>
          <path d="M249.673 134.031C250.772 118.869 249.095 103.634 244.726 89.0731L230.437 93.3609C234.285 106.184 235.761 119.601 234.794 132.953L249.673 134.031Z" className={styles.path}/>
          <path d="M235.548 183.344C242.644 169.9 247.228 155.274 249.074 140.184L234.266 138.372C232.64 151.661 228.603 164.541 222.355 176.381L235.548 183.344Z" className={styles.path}/>
        </svg>
      </Media>
      <Media className={styles.mobile} at={'xs'}>
        <Text className={styles.total} typography={"huge"} type={"bold"} color={"secondary.main"}>
          {total}
        </Text>
        <svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle opacity="0.2" cx="80.4627" cy="79.1848" r="45.3397" className={styles.fillPath}/>
          <path d="M0.546742 89.15C1.76921 99.541 5.0225 109.59 10.1216 118.726L18.4403 114.083C13.9498 106.038 11.0848 97.1877 10.0082 88.0369L0.546742 89.15Z" className={styles.fillPath}/>
          <path d="M3.99452 54.8883C0.726234 64.8274 -0.556254 75.312 0.220005 85.7458L9.72049 85.0389C9.03687 75.8504 10.1663 66.6171 13.0445 57.8643L3.99452 54.8883Z" className={styles.fillPath}/>
          <path d="M19.5605 27.4769C13.1881 34.813 8.20879 43.2509 4.86746 52.3756L13.8133 55.6514C16.7558 47.6157 21.1409 40.1848 26.7527 33.7243L19.5605 27.4769Z" className={styles.fillPath}/>
          <path d="M46.3367 7.36364C37.5245 11.4361 29.529 17.0819 22.7429 24.0238L29.5553 30.6834C35.5315 24.57 42.5727 19.598 50.3332 16.0115L46.3367 7.36364Z" className={styles.fillPath}/>
          <path d="M78.2944 0.0146445C68.5884 0.20059 58.9978 2.15546 49.9933 5.78326L53.5535 14.6198C61.4832 11.4249 69.9293 9.70339 78.4769 9.53964L78.2944 0.0146445Z" className={styles.fillPath}/>
          <path d="M110.953 6.32005C102.014 2.53424 92.4587 0.410786 82.7575 0.0539457L82.4074 9.57425C90.9507 9.8885 99.3652 11.7585 107.237 15.0925L110.953 6.32005Z" className={styles.fillPath}/>
          <path d="M137.939 25.1028C131.284 18.035 123.396 12.2405 114.661 8.00361L110.504 16.5751C118.196 20.3063 125.142 25.4093 131.003 31.6336L137.939 25.1028Z" className={styles.path}/>
          <path d="M155.049 53.1248C151.802 43.9761 146.914 35.4965 140.624 28.1022L133.367 34.275C138.907 40.7868 143.212 48.2544 146.071 56.3112L155.049 53.1248Z" className={styles.path}/>
          <path d="M159.438 85.5906C160.14 75.9082 159.069 66.1791 156.279 56.8809L147.154 59.619C149.611 67.8075 150.554 76.3755 149.936 84.9023L159.438 85.5906Z" className={styles.path}/>
          <path d="M150.418 117.081C154.949 108.496 157.876 99.1558 159.056 89.5199L149.599 88.3627C148.561 96.8485 145.983 105.074 141.993 112.635L150.418 117.081Z" className={styles.path}/>
        </svg>
      </Media>
      <Div className={styles.infoContainer} mobile={"column"}>
        <Text color={"grey.900"} typography={'large'} type={"bold"}>
          عملکرد شما
        </Text>
        <Text color={"secondary.main"} typography={'large'} type={"bold"}>
          ضعیف
        </Text>
      </Div>
    </Div>
  )
}

export default ReportProgress