import routes from "@routes";
import {fetchApi} from '../fetch';

const getAddressApi = () => {
  return fetchApi({
    method: "GET",
    URL: routes["api.address.crud"],
  });
}

export default getAddressApi;
