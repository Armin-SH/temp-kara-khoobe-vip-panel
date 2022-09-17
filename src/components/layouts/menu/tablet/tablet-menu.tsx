import React from 'react'
import {Div, Image, Text} from '@elements'
import styles from "./tablet-menu.module.css";
import {AddRequestBlackIcon, AddRequestWhiteIcon, ContactBlackIcon, ContactWhiteIcon, ExitIcon, HomeBlackIcon, LogoIcon, NotificationBlackIcon, NotificationWhiteIcon, ProfileBlackIcon, ProfileWhiteIcon, RequestsBlackIcon, RequestsWhiteIcon, SettingBlackIcon, SettingWhiteIcon, TabletMenuIndicatorIcon} from "@icons";
import {useDispatch, useSelector} from "react-redux";
import {ReducerTypes} from "@store/reducer";
import {useRouter} from "next/router";
import {HomeActions} from "@store/home/home-actions";
import routes from "@routes";

const TopMenu = [
  {
    name: 'داشبورد',
    activeIcon: HomeBlackIcon,
    Icon: HomeBlackIcon,
    route: '/',
  },
  {
    name: 'درخواست ها',
    activeIcon: RequestsBlackIcon,
    Icon: RequestsWhiteIcon,
    route: routes['route.request.index'],
  },
  {
    name: 'پیام ها',
    activeIcon: NotificationBlackIcon,
    Icon: NotificationWhiteIcon,
    route: routes['route.message.index'],
  },
  {
    name: 'ارتباط با متخصصان',
    activeIcon: ContactBlackIcon,
    Icon: ContactWhiteIcon,
    route: routes['route.contact.index'],
  },
  {
    name: 'افزودن درخواست',
    activeIcon: AddRequestBlackIcon,
    Icon: AddRequestWhiteIcon,
    route: routes['route.order.index'],
  }
]

const BottomMenu = [
  {
    name: 'پروفایل',
    activeIcon: ProfileBlackIcon,
    Icon: ProfileWhiteIcon,
    route: routes['route.profile.index'],
  },
  {
    name: 'تنظیمات',
    activeIcon: SettingBlackIcon,
    Icon: SettingWhiteIcon,
    route: routes['route.setting.index'],
  },
  {
    name: 'خروج',
    activeIcon: ExitIcon,
    Icon: ExitIcon,
    route: routes['route.auth.login'],
  }
]

const TabletMenu = () => {
  const dispatch = useDispatch()
  const {expanded} = useSelector((state: ReducerTypes) => state.home);
  const router = useRouter()

  const indicatorClass = `${expanded}IndicatorContainer`
  const iconNameClass = `${expanded}IconName`
  const rightContainer = `${expanded}RightMenuContainer`
  const indicatorPosition = `${router.pathname.replace('/', '')}IndicatorPosition`

  const handleClick = ({route}: { route: string }) => {
    if (router.pathname === route) {
      dispatch(HomeActions.setExpandedMenu({expand: !expanded}))
    } else {
      router.push(route)
    }
  }

  return (
      <Div className={styles.rightMenu}>
        <Div mobile={'column'} className={styles[rightContainer]}>
          <Div className={`${styles[indicatorClass]} ${styles[indicatorPosition]}`}>
            <Div className={styles.tabletIndicator}>
              <Image src={TabletMenuIndicatorIcon} alt={'indicator'}/>
            </Div>
          </Div>
          <Div className={styles.menuIcon}>
            <Image src={LogoIcon} alt={"کاراخوبه"}/>
          </Div>
          <Div className={styles.topMenuContainer} mobile={"column"}>
            {TopMenu.map((item, index) => (
                <Div className={styles.iconContainer} onClick={() => handleClick({route: item.route})} key={index}>
                  <Div className={styles.icon}>
                    <Image src={item.Icon} alt={item.name}/>
                  </Div>
                  <Text className={styles[iconNameClass]} color={"common.white"} typography={"small"}>
                    {item.name}
                  </Text>
                </Div>
            ))}
          </Div>
          <Div mobile={"column"} className={styles.bottomMenuContainer}>
            {BottomMenu.map((item, index) => (
                <Div className={styles.iconContainer} onClick={() => handleClick({route: item.route})} key={index}>
                  <Div key={index} className={styles.icon}>
                    <Image src={item.Icon} alt={item.name}/>
                  </Div>
                  <Text className={styles[iconNameClass]} color={"common.white"} typography={"small"}>
                    {item.name}
                  </Text>
                </Div>
            ))}
          </Div>
        </Div>
      </Div>
  )
}

export default TabletMenu