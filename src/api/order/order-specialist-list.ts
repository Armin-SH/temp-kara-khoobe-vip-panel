import routes from "@routes";
import {fetchApi} from '../fetch';

interface OrderSpecialistListProps {
  id: string
}

const orderSpecialistListApi = ({id}: OrderSpecialistListProps) => {
  return fetchApi({
    method: "GET",
    URL: {
      pathname: routes['api.request.order-specialist'],
      query: {
        _id: id,
      }
    },
    withToken: true,
  });
}

export default orderSpecialistListApi;
