import routes from "@routes";
import {fetchApi} from '../fetch';


const userInfoApi = () => {
  return fetchApi({
    method: "GET",
    URL: routes["api.user.profile-info"],
    withToken: true,
  });
}

export default userInfoApi;
