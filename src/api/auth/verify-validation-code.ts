import routes from "@routes";
import {fetchApi} from '../fetch';

interface VerifyValidationCodeProps {
  mobile: string
  deviceID: string
  id: string
  code: string
}

const verifyValidationCodeApi = ({mobile, id, code, deviceID}: VerifyValidationCodeProps) => {
  return fetchApi({
    method: "POST",
    URL: routes["api.auth.verify-code"],
    payload: {
      phonenumber: mobile,
      type: 'vipUser',
      deviceID: deviceID,
      id: id,
      code: code,
    }
  });
}

export default verifyValidationCodeApi;
