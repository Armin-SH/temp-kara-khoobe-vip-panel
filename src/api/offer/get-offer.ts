import routes from "@routes";
import {fetchApi} from '../fetch';

const getOfferApi = ({page}: { page: number }) => {
  return fetchApi({
    method: "GET",
    URL: {
      pathname: routes["api.offer.get-offer"],
      query: {
        page: page
      }
    }
  });
}

export default getOfferApi;
