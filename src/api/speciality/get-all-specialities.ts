import routes from "@routes";
import {fetchApi} from '../fetch';

const getAllSpecialitiesApi = () => {
  return fetchApi({
    method: "GET",
    URL: routes["api.speciality.get-all"],
  });
}

export default getAllSpecialitiesApi;
