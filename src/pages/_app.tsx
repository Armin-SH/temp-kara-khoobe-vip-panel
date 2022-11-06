import '../styles/globals.css'
import React, {useEffect} from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Head from 'next/head'
import PropTypes from 'prop-types';
import {ThemeProvider} from '@mui/material/styles';
import {wrapper} from '@store/store'
import Router, {useRouter} from 'next/router'
import NProgress from 'nprogress';
import {useDispatch, useSelector} from 'react-redux'
import {SWRConfig} from 'swr';
import {theme} from "@config/material/web-theme";
import createCache from '@emotion/cache';
import {Layout, SnackbarAlert} from "@modules";
import {ReducerTypes} from "@store/reducer";
import {AuthActions} from "@store/auth/auth-actions";
import {getFromCookie, sha1Hash} from "@utils";
import {UserActions} from "@store/user/user-actions";
import routes from "@routes";
import {Div, LoadingIndicator} from '@elements'


Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());
NProgress.configure({showSpinner: false});


const cache = createCache({
  key: 'css',
  prepend: true,
});

/**
 * Secure Hash Algorithm (SHA1)
 * http://www.webtoolkit.info/
 **/

function MyApp({fallback, Component, pageProps}: any) {
  const dispatch = useDispatch();
  const router = useRouter()
  const {deviceId} = useSelector((state: ReducerTypes) => state.auth);
  const {restrictionLevel, getInfoLoading} = useSelector((state: ReducerTypes) => state.user);
  const token = getFromCookie("token");

  useEffect(() => {
    if (!deviceId) {
      const id = navigator.userAgent;
      const hashId = sha1Hash(id)
      dispatch(AuthActions.setDeviceId({deviceId: hashId}))
    }
    if (!!token) {
      dispatch(UserActions.getUserInfo())
    }
  }, [token])

  useEffect(() => {
    if (restrictionLevel !== 'Vip' && restrictionLevel !== undefined) {
      router.push(routes['route.profile.index'])
    }

  }, [restrictionLevel, token])
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>کارا خوبه (VIP)</title>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>
        <link href="/favicon.ico" rel="icon"/>
        <link rel="stylesheet" type="text/css" href="/nprogress.css"/>
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <SnackbarAlert/>
        {/*<Support/>*/}
        <SWRConfig value={{refreshInterval: 30000, fallback}}>
          {getInfoLoading ? (
            <Div style={{
              flex: 1,
              minHeight: '100vh',
              position: "fixed",
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0,0,0,0.3)',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 9999999999999999
            }}>
              <LoadingIndicator size={'60px'} color={'secondary'}/>
            </Div>
          ) : null}
          <Layout sideBar={Component.sideBar} hasHeader={Component.hasHeader} isAuthentication={Component.isAuthentication} hasNavigation={Component.hasNavigation}>
            <Component {...pageProps}/>
          </Layout>
        </SWRConfig>
      </ThemeProvider>
    </React.Fragment>
  )
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default wrapper.withRedux(MyApp)

