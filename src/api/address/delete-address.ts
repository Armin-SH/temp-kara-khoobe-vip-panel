import routes from "@routes";
import {fetchApi} from '../fetch';

interface DeleteAddressProps {
  id: string
}

const deleteAddressApi = ({id}: DeleteAddressProps) => {
  return fetchApi({
    method: "DELETE",
    URL: routes["api.address.crud"],
    payload: {
      _id: id,
    }
  });
}

export default deleteAddressApi;
