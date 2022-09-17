import React from 'react'
import {Div, Image, Modal, Text} from '@elements'
import styles from './mobile-menu.module.css'
import {useDispatch, useSelector} from "react-redux";
import {ReducerTypes} from "@store/reducer";
import {HomeActions} from "@store/home/home-actions";
import {AddRequestBlackIcon, AddRequestWhiteIcon, ContactBlackIcon, ContactWhiteIcon, ExitIcon, HomeBlackIcon, HomeWhiteIcon, LogoIcon, MobileMenuIndicatorIcon, NotificationBlackIcon, NotificationWhiteIcon, ProfileBlackIcon, ProfileWhiteIcon, RequestsBlackIcon, RequestsWhiteIcon, SettingBlackIcon, SettingWhiteIcon} from "@icons";
import {useRouter} from "next/router";
import routes from "@routes";


const TopMenu = [
  {
    name: 'داشبورد',
    activeIcon: HomeBlackIcon,
    Icon: HomeWhiteIcon,
    route: '/',
    subRoutes: [
      {
        name: '. گزارش و آمار',
        route: '',
      },
      {
        name: '. حسابداری',
        route: '',
      },
      {
        name: '. تقویم',
        route: '',
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
        route: '',
      },
      {
        name: '. گذشته',
        route: '',
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

const MobileMenu = () => {
  const dispatch = useDispatch()
  const {mobileMenu} = useSelector((state: ReducerTypes) => state.home);
  const router = useRouter()

  const indicatorPosition = `${router.pathname.replace('/', '')}IndicatorPosition`

  const handleClick = ({route}: { route: string }) => {
    if (router.pathname === route) {
      dispatch(HomeActions.setMobileMenu({mobileMenu: false}))
    } else {
      dispatch(HomeActions.setMobileMenu({mobileMenu: false}))
      router.push(route)
    }
  }

  const handleCloseMenu = () => {
    dispatch(HomeActions.setMobileMenu({mobileMenu: false}))
  }

  return (
      <Modal closeAfterTransition={true} className={styles.modal} open={mobileMenu} onClose={handleCloseMenu}>
        <Div onClick={handleCloseMenu} className={styles.wrapper}>
          <Div mobile={"column"} className={styles.container}>
            <Div className={styles.rightMenu}>
              <Div mobile={'column'} className={styles.rightMenuContainer}>
                <Div className={`${styles.indicatorContainer} ${styles[indicatorPosition]}`}>
                  <Div className={styles.tabletIndicator}>
                    <Image src={MobileMenuIndicatorIcon} alt={'indicator'}/>
                  </Div>
                </Div>
                <Div className={styles.menuIcon}>
                  <Image src={LogoIcon} alt={"کاراخوبه"}/>
                </Div>
                <Div className={styles.topMenuContainer} mobile={"column"}>
                  {TopMenu.map((item, index) => (
                      <Div className={styles.iconContainer} onClick={() => handleClick({route: item.route})} key={index}>
                        <Div className={styles.icon}>
                          <Image src={router.pathname === item.route ? item.activeIcon : item.Icon} alt={item.name}/>
                        </Div>
                        <Text className={styles.iconName} color={router.pathname === item.route ? "grey.900" : "common.white"} typography={"small"}>
                          {item.name}
                        </Text>
                      </Div>
                  ))}
                </Div>
                <Div mobile={"column"} className={styles.bottomMenuContainer}>
                  {BottomMenu.map((item, index) => (
                      <Div className={styles.iconContainer} onClick={() => handleClick({route: item.route})} key={index}>
                        <Div className={styles.icon}>
                          <Image src={router.pathname === item.route ? item.activeIcon : item.Icon} alt={item.name}/>
                        </Div>
                        <Text className={styles.iconName} color={router.pathname === item.route ? "grey.900" : "common.white"} typography={"small"}>
                          {item.name}
                        </Text>
                      </Div>
                  ))}
                </Div>
              </Div>
            </Div>
          </Div>
        </Div>
      </Modal>
  )
}

export default MobileMenu