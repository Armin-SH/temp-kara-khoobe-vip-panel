import routes from "@routes";
import {fetchApi} from '../fetch';

interface DeleteOfferProps {
  id: string
}

const deleteOfferApi = ({id}: DeleteOfferProps) => {
  return fetchApi({
    method: "DELETE",
    URL: routes["api.offer.crud"],
    payload: {
      _id: id,
    }
  });
}

export default deleteOfferApi;
