import routes from "@routes";
import {fetchApi} from '../fetch';

interface sendValidationCodeProps {
  mobile: string
}

const sendValidationCodeApi = ({mobile}: sendValidationCodeProps) => {
  return fetchApi({
    method: "POST",
    URL: routes["api.auth.validation-code"],
    payload: {
      phonenumber: mobile,
    }
  });
}

export default sendValidationCodeApi;
