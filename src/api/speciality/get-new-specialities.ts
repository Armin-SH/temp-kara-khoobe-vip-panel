import routes from "@routes";
import {fetchApi} from '../fetch';

const getNewSpecialitiesApi = () => {
  return fetchApi({
    method: "GET",
    URL: routes["api.speciality.new-speciality"]
  });
}

export default getNewSpecialitiesApi;
