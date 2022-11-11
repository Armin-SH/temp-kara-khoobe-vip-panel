import routes from "@routes";
import {fetchApi} from '../fetch';
import {OrderItemProps} from '@store/order/order'


const storeOrderApi = ({orderItem}: { orderItem: OrderItemProps }) => {
  return fetchApi({
    method: "POST",
    URL: routes["api.order.store"],
    withToken: true,
    payload: orderItem
  });
}

export default storeOrderApi;
