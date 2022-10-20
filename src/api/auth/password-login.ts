import routes from "@routes";
import {fetchApi} from '../fetch';

interface PasswordLoginProps {
  mobile: string
  deviceID: string
  password: string
}

const passwordLoginApi = ({mobile, password, deviceID}: PasswordLoginProps) => {
  return fetchApi({
    method: "POST",
    URL: routes["api.auth.password-login"],
    payload: {
      phonenumber: mobile,
      password: password,
      deviceID: deviceID,
    }
  });
}

export default passwordLoginApi;
