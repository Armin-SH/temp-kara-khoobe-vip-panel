import '../styles/globals.css'
import React, {useEffect} from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Head from 'next/head'
import PropTypes from 'prop-types';
import {ThemeProvider} from '@mui/material/styles';
import {wrapper} from '@store/store'
import Router from 'next/router'
import NProgress from 'nprogress';
import {useDispatch} from 'react-redux'
import {SWRConfig} from 'swr';
import {theme} from "@config/material/web-theme";
import {Detector} from "react-detect-offline";
import {AlertActions} from "@store/alert/alert-action";
import createCache from '@emotion/cache';
import {Layout, SnackbarAlert} from "@modules";


Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());
NProgress.configure({showSpinner: false});


const cache = createCache({
  key: 'css',
  prepend: true,
});

function MyApp({fallback, Component, pageProps}: any) {
  const dispatch = useDispatch();

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
          <Layout sideBar={Component.sideBar} hasHeader={Component.hasHeader} isAuthentication={Component.isAuthentication} hasNavigation={Component.hasNavigation}>
            <Component {...pageProps}/>
          </Layout>
          <Detector
            render={({online}: { online: boolean }) => {
              return (online ? null : <Alert/>)
            }}
          />
        </SWRConfig>
      </ThemeProvider>
    </React.Fragment>
  )
}

const Alert = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(AlertActions.showAlert({text: "در حال حاضر اینترنت شما قطع شده است، لطفا ابتدا از ارتباط خود اطمینان حاصل کنید و ترجیحا فیلترشکن خود را خاموش کنید.", severity: "error"}))
  }, []);
  return null;
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default wrapper.withRedux(MyApp)

