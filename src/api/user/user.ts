import routes from "@routes";
import {fetchApi} from '../fetch';


const userApi = () => {
  return fetchApi({
    method: "GET",
    URL: routes["api.user.user-info"],
  });
}

export default userApi;
