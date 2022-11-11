import routes from "@routes";
import {fetchApi} from '../fetch';


const specialityCategoryApi = () => {
  return fetchApi({
    method: "GET",
    URL: {
      pathname: routes["api.order.speciality-category"],
      query: {
        city: "تهران"
      }
    },
    withToken: true,
  });
}

export default specialityCategoryApi;
