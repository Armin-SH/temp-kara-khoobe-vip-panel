import React from 'react'
import {Button, Div, Image, Text} from '@elements'
import styles from "./desktop-menu.module.css";
import {AddRequestBlackIcon, AddRequestGreyIcon, AddRequestWhiteIcon, AddressBlackIcon, AddressGreyIcon, AddressWhiteIcon, ContactBlackIcon, ContactGreyIcon, ContactWhiteIcon, ExitIcon, HomeBlackIcon, HomeGreyIcon, HomeWhiteIcon, LogoIcon, NotificationBlackIcon, NotificationGreyIcon, NotificationWhiteIcon, ProfileBlackIcon, ProfileGreyIcon, ProfileWhiteIcon, RequestsBlackIcon, RequestsGreyIcon, RequestsWhiteIcon, SettingBlackIcon, SettingGreyIcon, SettingWhiteIcon, TabletMenuIndicatorIcon} from "@icons";
import routes from '@routes'
import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";
import {ReducerTypes} from "@store/reducer";
import {HomeActions} from "@store/home/home-actions";
import {AlertActions} from "@store/alert/alert-action";
import {removeFromCookie} from "@utils";
import 'animate.css';
import {CSSTransition} from 'react-transition-group'

const TopMenu = [
  {
    name: 'داشبورد',
    activeIcon: HomeBlackIcon,
    Icon: HomeWhiteIcon,
    disabledIcon: HomeGreyIcon,
    route: routes['route.home.index'],
    disabled: true,
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

const DesktopMenu = () => {
  const dispatch = useDispatch()
  const {expanded} = useSelector((state: ReducerTypes) => state.home);
  const router = useRouter()
  const {restrictionLevel} = useSelector((state: ReducerTypes) => state.user);

  const indicatorClass = `${expanded}IndicatorContainer`
  const iconNameClass = `${expanded}IconName`
  const rightContainer = `${expanded}RightMenuContainer`
  const subItemClass = `${expanded}SubItem`
  const indicatorPosition = `${expanded}${router.pathname.replaceAll('/', '')}IndicatorPosition`

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
          dispatch(HomeActions.setExpandedMenu({expand: !expanded}))
        } else {
          if (route === routes['route.auth.login']) {
            removeFromCookie('token')
            removeFromCookie('refreshToken')
          }
          router.push(route)
        }
      }
    }
  }

  const handleMouseOver = () => {
    dispatch(HomeActions.setExpandedMenu({expand: true}))
  }

  const handleMouseLeave = () => {
    dispatch(HomeActions.setExpandedMenu({expand: false}))
  }

  return (
    <Div onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave} className={styles.rightMenu}>
      <Div mobile={'column'} className={styles[rightContainer]}>
        <Div className={`${styles[indicatorClass]} ${styles[indicatorPosition]}`}>
          <Div className={styles.tabletIndicator}>
            <Image src={TabletMenuIndicatorIcon} alt={'indicator'}/>
          </Div>
        </Div>
        <Div className={styles.menuIcon}>
          <Image src={LogoIcon} alt={"کاراخوبه"}/>
        </Div>
        <Div className={styles.transitionWrapper}>
          <CSSTransition
            in={!expanded}
            timeout={1000}
            unmountOnExit
            onExit={handleMouseOver}
            onEnter={handleMouseLeave}
            classNames={{
              enterActive: `animate__animated animate__slideInLeft`,
              exitActive: `animate__animated animate__slideOutLeft`,
            }}
          >
            <Div style={expanded ? {opacity: 0, transition: 'all', transitionDuration: '1000ms'} : {opacity: 1, transition: 'all', transitionDuration: '1000ms'}} mobile={'column'} className={styles.closedMenuWrapper}>
              <Div className={styles.closedMenuContainer} mobile={"column"}>
                {TopMenu.map((item, index) => (
                  <Button variant={'text'} shape={'circle'} key={`topMenu_${index}`} className={styles.iconContainer} onClick={() => handleClick({route: item.route, disabled: item.disabled})}>
                    <Div className={styles.icon}>
                      <Image src={item.disabled ? item.disabledIcon : router.pathname === item.route ? item.activeIcon : item.Icon} alt={item.name}/>
                    </Div>
                  </Button>
                ))}
              </Div>
              <Div className={styles.closedBottomMenuContainer} mobile={"column"}>
                {BottomMenu.map((item, index) => (
                  <Button variant={'text'} shape={'circle'} key={`bottomMenu_${index}`} className={styles.iconContainer} onClick={() => handleClick({route: item.route, disabled: item.disabled})}>
                    <Div className={styles.icon}>
                      <Image src={item.disabled ? item.disabledIcon : router.pathname === item.route ? item.activeIcon : item.Icon} alt={item.name}/>
                    </Div>
                  </Button>
                ))}
              </Div>
            </Div>
          </CSSTransition>
          <CSSTransition
            in={expanded}
            timeout={1000}
            unmountOnExit
            onExit={handleMouseLeave}
            onEnter={handleMouseOver}
            classNames={{
              enterActive: `animate__animated animate__slideInRight`,
              exitActive: `animate__animated animate__slideOutRight`,
            }}
          >
            <Div style={expanded ? {opacity: 1, transition: 'all', transitionDuration: '1000ms'} : {opacity: 0, transition: 'all', transitionDuration: '500ms'}} mobile={'column'} className={styles.openedMenuWrapper}>
              <Div className={styles.openedMenuContainer} mobile={"column"}>
                {TopMenu.map((item, index) => (
                  <Div key={index} mobile={"column"} className={styles.itemWrapper}>
                    <Div className={styles.openedIconContainer} onClick={() => handleClick({route: item.route, disabled: item.disabled})}>
                      <Div className={styles.icon}>
                        <Image src={item.disabled ? item.disabledIcon : router.pathname === item.route ? item.activeIcon : item.Icon} alt={item.name}/>
                      </Div>
                      <Text color={item.disabled ? "grey.300" : router.pathname === item.route ? "grey.900" : "common.white"} typography={"small"}>
                        {item.name}
                      </Text>
                    </Div>
                    <Div mobile={'column'}>
                      {item.subRoutes.map((subItem: { name: string, route: string, disabled: boolean }, index) => (
                        <Div onClick={() => handleClick({route: subItem.route, disabled: subItem.disabled})} key={item.name} className={styles.openSubItem}>
                          <Text className={styles.openIconName} color={subItem.disabled ? 'grey.300' : router.pathname === subItem.route ? "grey.900" : "common.white"} typography={"small"}>
                            {subItem.name}
                          </Text>
                        </Div>
                      ))}
                    </Div>
                  </Div>
                ))}
              </Div>
              <Div className={styles.openedBottomMenuContainer} mobile={"column"}>
                {BottomMenu.map((item, index) => (
                  <Div key={index} mobile={"column"} className={styles.itemWrapper}>
                    <Div className={styles.openedIconContainer} onClick={() => handleClick({route: item.route, disabled: item.disabled})}>
                      <Div className={styles.icon}>
                        <Image src={item.disabled ? item.disabledIcon : router.pathname === item.route ? item.activeIcon : item.Icon} alt={item.name}/>
                      </Div>
                      <Text color={item.disabled ? 'grey.300' : router.pathname === item.route ? "grey.900" : "common.white"} typography={"small"}>
                        {item.name}
                      </Text>
                    </Div>
                  </Div>
                ))}
              </Div>
            </Div>
          </CSSTransition>
        </Div>
      </Div>
    </Div>
  )
}

export default DesktopMenu