import routes from "@routes";
import {fetchApi} from '../fetch';

interface UserInfoProps {
  firstName: string

  lastName: string

  nationalCode: string

  birthDate: string

  sex: "Male" | " Female"

  email: string
}

const setUserInfoApi = ({firstName, lastName, nationalCode, birthDate, sex, email}: UserInfoProps) => {
  return fetchApi({
    method: "PUT",
    URL: routes["api.user.profile-info"],
    payload: {
      firstname: firstName,
      lastname: lastName,
      nationalCode: nationalCode,
      birthdate: birthDate,
      gender: sex,
      email: email,
    }
  });
}

export default setUserInfoApi;
