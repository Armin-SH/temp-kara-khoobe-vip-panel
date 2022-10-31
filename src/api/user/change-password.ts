import routes from "@routes";
import {fetchApi} from '../fetch';


interface ChangePasswordProps {
  newPassword: string
  oldPassword: string
}

const changePasswordApi = ({newPassword, oldPassword}: ChangePasswordProps) => {
  return fetchApi({
    method: "PUT",
    URL: routes["api.user.change-password"],
    payload: {
      oldPassword: oldPassword,
      newPassword: newPassword,
    },
    withToken: true,
  });
}

export default changePasswordApi;
