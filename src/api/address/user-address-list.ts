import routes from "@routes";
import {fetchApi} from '../fetch';

const userAddressListApi = () => {
  return fetchApi({
    method: "GET",
    URL: routes["api.address.crud"],
    withToken: true,
  });
}

export default userAddressListApi;
