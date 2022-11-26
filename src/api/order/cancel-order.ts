import routes from "@routes";
import {fetchApi} from '../fetch';

interface CancelOrderListProps {
  id: string
}

const cancelOrderListApi = ({id}: CancelOrderListProps) => {
  return fetchApi({
    method: "PUT",
    URL: {
      pathname: routes['api.order.cancel'],
      query: {
        id: id,
      }
    },
    withToken: true,
  });
}

export default cancelOrderListApi;
