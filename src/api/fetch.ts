import axios from 'axios';
import {getFromCookie, getParseUrl, removeFromCookie, saveToCookie, sha1Hash} from "@utils";
import Router from 'next/router'
import routes from '@routes'
import {refreshTokenApi} from '@api/auth'

interface ConfigProps {
  method: "GET" | "PUT" | "DELETE" | "POST"
  URL: string | {
    pathname: string,
    query: object | any
  }
  payload?: any
  userType?: 'auth' | 'user' | 'admin'
  withToken?: boolean
  responseType?: any
}

const axiosClient = axios.create();

export async function fetchApi({method, payload, withToken, URL, userType, responseType = 'json'}: ConfigProps): Promise<any> {
  const parseUrl = getParseUrl(URL);
  const axiosClient = getAxiosClient();
  const token = getFromCookie("token");

  const CatchFunction = async (error: any) => {
    if (error?.response?.status === 401) {
      if (token) {
        await removeFromCookie("token");
        const refreshToken = await getFromCookie('refreshToken')
        const id = navigator.userAgent;
        const hashId = sha1Hash(id)
        if (refreshToken) {
          refreshTokenApi({token: refreshToken, deviceID: hashId}).then((response) => {
            console.log(response)
            saveToCookie('token', response?.data?.token)
          }).catch((e) => {
            console.log(e)
            if (e.response.data.statusCode === 401) {
              Router.push({pathname: routes['route.auth.login'], query: {redirect: encodeURIComponent(Router.asPath)}});
              removeFromCookie('refreshToken')
            }
          })
        }
      }
    } else if (error?.response?.status === 404) {
      return {
        notFound: true
      }
    }
    throw error;
  };


  // set token for Authorization
  let headers = {};
  if (withToken) {
    headers = Object.assign({}, headers, {
      Authorization: 'Bearer ' + token
    })
  }

  let baseURL: string = `${process.env.NEXT_PUBLIC_API_BASE_URL}/${process.env.NEXT_PUBLIC_API_VERSION}/`;

  switch (method) {
    case "GET": {
      return (
        axiosClient.get(encodeURI(`/${parseUrl}`), {
          headers: {...headers},
          baseURL: baseURL,
          responseType: responseType
        })
          .then(response => response)
          .catch(CatchFunction)
      )
    }
    case "PUT": {
      return (
        axiosClient.put(encodeURI(`/${parseUrl}`), payload, {
          headers: {...headers},
          baseURL: baseURL,
          responseType: responseType
        })
          .then(response => response)
          .catch(CatchFunction)
      )
    }
    case "DELETE": {
      return (
        axiosClient.delete(encodeURI(`/${parseUrl}`), {
          headers: {...headers},
          baseURL: baseURL,
          responseType: responseType
        })
          .then(response => response)
          .catch(CatchFunction)
      )
    }
    case "POST": {
      return (
        axiosClient.post(encodeURI(`/${parseUrl}`), payload, {
          headers: {...headers},
          baseURL: baseURL,
          responseType: responseType
        })
          .then(response => response)
          .catch(CatchFunction)
      )
    }
  }
}

function getAxiosClient() {
  axiosClient.defaults.timeout = 100000;
  axiosClient.defaults.headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };

  return axiosClient;
}
