import React from 'react'
import {Div, Image, Text} from '@elements'
import styles from "./tablet-menu.module.css";
import {AddRequestBlackIcon, AddRequestWhiteIcon, ContactBlackIcon, ContactWhiteIcon, ExitIcon, HomeBlackIcon, HomeWhiteIcon, LogoIcon, NotificationBlackIcon, NotificationWhiteIcon, ProfileBlackIcon, ProfileWhiteIcon, RequestsBlackIcon, RequestsWhiteIcon, SettingBlackIcon, SettingWhiteIcon, TabletMenuIndicatorIcon} from "@icons";
import routes from '@routes'
import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";
import {ReducerTypes} from "@store/reducer";
import {HomeActions} from "@store/home/home-actions";

const TopMenu = [
  {
    name: 'داشبورد',
    activeIcon: HomeBlackIcon,
    Icon: HomeWhiteIcon,
    route: routes['route.home.index'],
    subRoutes: [
      {
        name: '. گزارش و آمار',
        route: routes["route.home.reports"],
      },
      {
        name: '. حسابداری',
        route: routes['route.home.accounting'],
      },
      {
        name: '. تقویم',
        route: routes['route.home.calendar'],
      },
    ]
  },
  {
    name: 'درخواست ها',
    activeIcon: RequestsBlackIcon,
    Icon: RequestsWhiteIcon,
    route: routes['route.request.index'],
    subRoutes: [
      {
        name: '. جاری',
        route: routes['route.request.present'],
      },
      {
        name: '. گذشته',
        route: routes['route.request.past'],
      },
    ]
  },
  {
    name: 'پیام ها',
    activeIcon: NotificationBlackIcon,
    Icon: NotificationWhiteIcon,
    route: routes['route.message.index'],
    subRoutes: []
  },
  {
    name: 'ارتباط با متخصصان',
    activeIcon: ContactBlackIcon,
    Icon: ContactWhiteIcon,
    route: routes['route.contact.index'],
    subRoutes: []
  },
  {
    name: 'افزودن درخواست',
    activeIcon: AddRequestBlackIcon,
    Icon: AddRequestWhiteIcon,
    route: routes['route.order.index'],
    subRoutes: []
  }
]

const BottomMenu = [
  {
    name: 'پروفایل',
    activeIcon: ProfileBlackIcon,
    Icon: ProfileWhiteIcon,
    route: routes['route.profile.index'],
    subRoutes: []
  },
  {
    name: 'تنظیمات',
    activeIcon: SettingBlackIcon,
    Icon: SettingWhiteIcon,
    route: routes['route.setting.index'],
    subRoutes: []
  },
  {
    name: 'خروج',
    activeIcon: ExitIcon,
    Icon: ExitIcon,
    route: routes['route.auth.login'],
    subRoutes: []
  }
]

const TabletMenu = () => {
  const dispatch = useDispatch()
  const {expanded} = useSelector((state: ReducerTypes) => state.home);
  const router = useRouter()

  const indicatorClass = `${expanded}IndicatorContainer`
  const iconNameClass = `${expanded}IconName`
  const rightContainer = `${expanded}RightMenuContainer`
  const subItemClass = `${expanded}SubItem`
  const indicatorPosition = `${expanded}${router.pathname.replaceAll('/', '')}IndicatorPosition`

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
        <Div className={styles[`${expanded}TopMenuContainer`]} mobile={"column"}>
          {TopMenu.map((item, index) => (
            <Div key={index} mobile={"column"} className={styles.itemWrapper}>
              <Div className={styles.iconContainer} onClick={() => handleClick({route: item.route})}>
                <Div className={styles.icon}>
                  <Image src={router.pathname === item.route ? item.activeIcon : item.Icon} alt={item.name}/>
                </Div>
                <Text className={styles[iconNameClass]} color={router.pathname === item.route ? "grey.900" : "common.white"} typography={"small"}>
                  {item.name}
                </Text>
              </Div>
              {item.subRoutes.length ? item.subRoutes.map((subItem: { name: string, route: string }, index) => (
                <Div onClick={() => handleClick({route: subItem.route})} key={item.name} className={styles[subItemClass]}>
                  <Text className={styles[iconNameClass]} color={router.pathname === subItem.route ? "grey.900" : "common.white"} typography={"small"}>
                    {subItem.name}
                  </Text>
                </Div>
              )) : null}
            </Div>
          ))}
        </Div>
        <Div mobile={"column"} className={styles[`${expanded}BottomMenuContainer`]}>
          {BottomMenu.map((item, index) => (
            <Div key={index} mobile={"column"} className={styles.itemWrapper}>
              <Div className={styles.iconContainer} onClick={() => handleClick({route: item.route})}>
                <Div className={styles.icon}>
                  <Image src={router.pathname === item.route ? item.activeIcon : item.Icon} alt={item.name}/>
                </Div>
                <Text className={styles[iconNameClass]} color={router.pathname === item.route ? "grey.900" : "common.white"} typography={"small"}>
                  {item.name}
                </Text>
              </Div>
            </Div>
          ))}
        </Div>
      </Div>
    </Div>
  )
}

export default TabletMenu