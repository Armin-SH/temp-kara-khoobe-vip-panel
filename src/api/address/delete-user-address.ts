import routes from "@routes";
import {fetchApi} from '../fetch';


interface DeleteUserAddressProps {
  id: string
}

const deleteUserAddressApi = ({id}: DeleteUserAddressProps) => {
  return fetchApi({
    method: "DELETE",
    URL: routes["api.address.crud"],
    payload: {
      _id: id,
    },
    withToken: true,
  });
}

export default deleteUserAddressApi;
