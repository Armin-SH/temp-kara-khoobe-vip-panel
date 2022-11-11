import routes from "@routes";
import {fetchApi} from '../fetch';

interface OrderListProps {
  page: number

  live: boolean
}

const orderListApi = ({live, page}: OrderListProps) => {
  return fetchApi({
    method: "GET",
    URL: {
      pathname: routes['api.order.get'],
      query: {
        live: live,
        page: page
      }
    },
    withToken: true,
  });
}

export default orderListApi;
