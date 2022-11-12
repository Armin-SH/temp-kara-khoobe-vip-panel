import React from 'react'
import {Div, Image, Modal, Text} from '@elements'
import styles from './mobile-menu.module.css'
import {useDispatch, useSelector} from "react-redux";
import {ReducerTypes} from "@store/reducer";
import {HomeActions} from "@store/home/home-actions";
import {AddRequestBlackIcon, AddRequestGreyIcon, AddRequestWhiteIcon, AddressBlackIcon, AddressGreyIcon, AddressWhiteIcon, ContactBlackIcon, ContactGreyIcon, ContactWhiteIcon, ExitIcon, HomeBlackIcon, HomeGreyIcon, HomeWhiteIcon, LogoIcon, MobileMenuIndicatorIcon, NotificationBlackIcon, NotificationGreyIcon, NotificationWhiteIcon, ProfileBlackIcon, ProfileGreyIcon, ProfileWhiteIcon, RequestsBlackIcon, RequestsGreyIcon, RequestsWhiteIcon, SettingBlackIcon, SettingGreyIcon, SettingWhiteIcon} from "@icons";
import {useRouter} from "next/router";
import routes from "@routes";
import {AlertActions} from "@store/alert/alert-action";
import {removeFromCookie} from "@utils";


const TopMenu = [
  {
    name: 'داشبورد',
    activeIcon: HomeBlackIcon,
    Icon: HomeWhiteIcon,
    disabledIcon: HomeGreyIcon,
    route: routes['route.home.index'],
    disabled: false,
    subRoutes: [
      {
        name: '. گزارش و آمار',
        route: routes["route.home.reports"],
        disabled: true,
      },
      {
        name: '. حسابداری',
        route: routes['route.home.accounting'],
        disabled: true,
      },
      {
        name: '. تقویم',
        route: routes['route.home.calendar'],
        disabled: true,
      },
    ]
  },
  {
    name: 'درخواست ها',
    activeIcon: RequestsBlackIcon,
    Icon: RequestsWhiteIcon,
    disabledIcon: RequestsGreyIcon,
    route: routes['route.request.index'],
    disabled: true,
    subRoutes: [
      {
        name: '. جاری',
        route: routes['route.request.present'],
        disabled: false,
      },
      {
        name: '. گذشته',
        route: routes['route.request.past'],
        disabled: false,
      },
    ]
  },
  {
    name: 'پیام ها',
    activeIcon: NotificationBlackIcon,
    Icon: NotificationWhiteIcon,
    disabledIcon: NotificationGreyIcon,
    route: routes['route.message.index'],
    subRoutes: [],
    disabled: true,
  },
  {
    name: 'ارتباط با متخصصان',
    activeIcon: ContactBlackIcon,
    Icon: ContactWhiteIcon,
    disabledIcon: ContactGreyIcon,
    route: routes['route.contact.index'],
    subRoutes: [],
    disabled: true,
  },
  {
    name: 'افزودن درخواست',
    activeIcon: AddRequestBlackIcon,
    Icon: AddRequestWhiteIcon,
    disabledIcon: AddRequestGreyIcon,
    route: routes['route.order.index'],
    subRoutes: [],
    disabled: false,
  },
  {
    name: 'آدرس های من',
    activeIcon: AddressBlackIcon,
    Icon: AddressWhiteIcon,
    disabledIcon: AddressGreyIcon,
    route: routes['route.address.index'],
    subRoutes: [],
    disabled: false,
  }
]

const BottomMenu = [
  {
    name: 'پروفایل',
    activeIcon: ProfileBlackIcon,
    Icon: ProfileWhiteIcon,
    disabledIcon: ProfileGreyIcon,
    route: routes['route.profile.index'],
    subRoutes: [],
    disabled: false,
  },
  {
    name: 'تنظیمات',
    activeIcon: SettingBlackIcon,
    Icon: SettingWhiteIcon,
    disabledIcon: SettingGreyIcon,
    route: routes['route.setting.index'],
    subRoutes: [],
    disabled: true,
  },
  {
    name: 'خروج',
    activeIcon: ExitIcon,
    Icon: ExitIcon,
    disabledIcon: ExitIcon,
    route: routes['route.auth.login'],
    subRoutes: [],
    disabled: false,
  }
]

const MobileMenu = () => {
  const dispatch = useDispatch()
  const {mobileMenu} = useSelector((state: ReducerTypes) => state.home);
  const router = useRouter()
  const indicatorPosition = `${router.pathname.replaceAll('/', '')}IndicatorPosition`
  const {restrictionLevel} = useSelector((state: ReducerTypes) => state.user);

  const handleClick = ({route, disabled}: { route: string, disabled: boolean }) => {
    if (disabled) {
      return null
    } else {
      if (restrictionLevel === 'Pending' && routes['route.auth.login'] !== route) {
        return dispatch(AlertActions.showAlert({
          text: 'مشخصات شما در حالی بررسی می باشد. بعد از تایید مشخصات مجاز به استفاده از پنل خواهید بود',
          severity: 'error',
        }))
      } else if (restrictionLevel !== "Vip" && routes['route.auth.login'] !== route) {
        return dispatch(AlertActions.showAlert({
          text: 'برای ادامه استفاده از پنل اطلاعات خود را تکمبل کنید',
          severity: 'error',
        }))
      } else {
        if (router.pathname === route) {
          dispatch(HomeActions.setMobileMenu({mobileMenu: false}))
        } else {
          dispatch(HomeActions.setMobileMenu({mobileMenu: false}))
          if (route === routes['route.auth.login']) {
            removeFromCookie('token')
            removeFromCookie('refreshToken')
          }
          router.push(route)
        }
      }
    }
  }

  const handleCloseMenu = () => {
    dispatch(HomeActions.setMobileMenu({mobileMenu: false}))
  }

  return (
    <Modal closeAfterTransition={true} className={styles.modal} open={mobileMenu} onClose={handleCloseMenu}>
      <Div className={styles.wrapper} onClick={handleCloseMenu}>
        <Div className={styles.rightMenuContainer}>
          <Div mobile={'column'} className={styles.rightMenuWrapper}>
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
                <Div key={index} mobile={"column"} className={styles.itemWrapper}>
                  <Div className={styles.iconContainer} onClick={() => handleClick({route: item.route, disabled: item.disabled})} key={index}>
                    <Div className={styles.icon}>
                      <Image src={item.disabled ? item.disabledIcon : router.pathname === item.route ? item.activeIcon : item.Icon} alt={item.name}/>
                    </Div>
                    <Text className={styles.iconName} color={item.disabled ? 'grey.300' : router.pathname === item.route ? "grey.900" : "common.white"} typography={"small"}>
                      {item.name}
                    </Text>
                  </Div>
                  {item.subRoutes.length ? item.subRoutes.map((subItem: { name: string, route: string, disabled: boolean }, index) => (
                    <Div onClick={() => handleClick({route: subItem.route, disabled: subItem.disabled})} key={subItem.name} className={styles.subItem}>
                      <Text className={styles.iconName} color={subItem.disabled ? 'grey.300' : router.pathname === subItem.route ? "grey.900" : "common.white"} typography={"small"}>
                        {subItem.name}
                      </Text>
                    </Div>
                  )) : null}
                </Div>
              ))}
            </Div>
            <Div mobile={"column"} className={styles.bottomMenuContainer}>
              {BottomMenu.map((item, index) => (
                <Div key={index} mobile={"column"} className={styles.itemWrapper}>
                  <Div className={styles.iconContainer} onClick={() => handleClick({route: item.route, disabled: item.disabled})} key={index}>
                    <Div className={styles.icon}>
                      <Image src={item.disabled ? item.disabledIcon : router.pathname === item.route ? item.activeIcon : item.Icon} alt={item.name}/>
                    </Div>
                    <Text className={styles.iconName} color={item.disabled ? 'grey.300' : router.pathname === item.route ? "grey.900" : "common.white"} typography={"small"}>
                      {item.name}
                    </Text>
                  </Div>
                </Div>
              ))}
            </Div>
          </Div>
        </Div>
      </Div>
    </Modal>
  )
}

export default MobileMenu