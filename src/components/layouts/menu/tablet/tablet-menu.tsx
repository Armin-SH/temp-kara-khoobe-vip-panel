import React from 'react'
import {Div, Image} from '@elements'
import styles from "./tablet-menu.module.css";
import {AddRequestBlackIcon, AddRequestWhiteIcon, ContactBlackIcon, ContactWhiteIcon, ExitIcon, HomeBlackIcon, LogoIcon, NotificationBlackIcon, NotificationWhiteIcon, ProfileBlackIcon, ProfileWhiteIcon, RequestsBlackIcon, RequestsWhiteIcon, SettingBlackIcon, SettingWhiteIcon, TabletMenuIndicatorIcon} from "@icons";

const TopMenu = [
  {
    name: 'داشبورد',
    activeIcon: HomeBlackIcon,
    Icon: HomeBlackIcon,
  },
  {
    name: 'درخواست ها',
    activeIcon: RequestsBlackIcon,
    Icon: RequestsWhiteIcon,
  },
  {
    name: 'پیام ها',
    activeIcon: NotificationBlackIcon,
    Icon: NotificationWhiteIcon,
  },
  {
    name: 'ارتباط با متخصصان',
    activeIcon: ContactBlackIcon,
    Icon: ContactWhiteIcon,
  },
  {
    name: 'افزودن درخواست',
    activeIcon: AddRequestBlackIcon,
    Icon: AddRequestWhiteIcon,
  }
]

const BottomMenu = [
  {
    name: 'پروفایل',
    activeIcon: ProfileBlackIcon,
    Icon: ProfileWhiteIcon,
  },
  {
    name: 'تنظیمات',
    activeIcon: SettingBlackIcon,
    Icon: SettingWhiteIcon,
  },
  {
    name: 'خروج',
    activeIcon: ExitIcon,
    Icon: ExitIcon,
  }
]


const TabletMenu = () => {

  return (
      <Div className={styles.rightMenu}>
        <Div mobile={'column'} className={styles.rightMenuContainer}>
          <Div className={styles.tabletIndicatorContainer}>
            <Div className={styles.tabletIndicator}>
              <Image src={TabletMenuIndicatorIcon} alt={'indicator'}/>
            </Div>
          </Div>
          <Div className={styles.menuIcon}>
            <Image src={LogoIcon} alt={"کاراخوبه"}/>
          </Div>
          <Div mobile={"column"}>
            {TopMenu.map((item, index) => (
                <Div key={index} className={styles.icon}>
                  <Image src={item.Icon} alt={item.name}/>
                </Div>
            ))}
          </Div>
          <Div mobile={"column"} className={styles.bottomMenuContainer}>
            {BottomMenu.map((item, index) => (
                <Div key={index} className={styles.icon}>
                  <Image src={item.Icon} alt={item.name}/>
                </Div>
            ))}
          </Div>
        </Div>
      </Div>
  )
}

export default TabletMenu