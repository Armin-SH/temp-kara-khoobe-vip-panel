import routes from "@routes";
import {fetchApi} from '../fetch';

interface RefreshTokenProps {
  token: string
  deviceID: string
}

const refreshTokenApi = ({token, deviceID}: RefreshTokenProps) => {
  return fetchApi({
    method: "POST",
    URL: routes["api.auth.refresh-token"],
    payload: {
      token: token,
      type: 'vipUser',
      deviceID: deviceID,
    }
  });
}

export default refreshTokenApi;
