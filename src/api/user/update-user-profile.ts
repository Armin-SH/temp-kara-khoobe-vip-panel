import routes from "@routes";
import {fetchApi} from '../fetch';


interface UpdateUserProfileProps {
  firstName: string,
  lastName: string,
  phoneNumber: string,
  internalNumber: string,
  nationalCode: string,
  corporationName: string,
  corporationTelephone: string,
  corporationCode: string
}

const updateUserProfileApi = ({corporationTelephone, corporationName, corporationCode, lastName, nationalCode, firstName, internalNumber, phoneNumber}: UpdateUserProfileProps) => {
  return fetchApi({
    method: "PUT",
    URL: routes["api.user.update-profile"],
    payload: {
      ceoFirstname: firstName,
      ceoLastname: lastName,
      ceoPhonenumber: phoneNumber,
      ceoInternalNumber: internalNumber,
      ceoNationalCode: nationalCode,
      corporationName: corporationName,
      corporationTelephone: corporationTelephone,
      corporationCode: corporationCode,
    },
    withToken: true,
  });
}

export default updateUserProfileApi;
