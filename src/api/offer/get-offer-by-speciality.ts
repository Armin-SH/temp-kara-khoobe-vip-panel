import routes from "@routes";
import {fetchApi} from '../fetch';

const getOfferBySpecialityApi = () => {
  return fetchApi({
    method: "GET",
    URL: routes["api.offer.crud"],
  });
}

export default getOfferBySpecialityApi;
