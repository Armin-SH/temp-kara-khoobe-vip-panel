export const orderRoutes = {
  'route.order.index': '/order',

  'api.order.store': 'vipOrder/create',
  'api.order.get': 'vipOrder/getVipOrders?live=[live]&page=[page]',
  'api.order.specialities': 'speciality/summery?categoryID=[categoryID]',
  'api.order.speciality-category': 'category?city=[city]',
  'api.order.sub-speciality-category': 'category?city=[city]&parent=[parent]',
  'api.order.cancel': 'vipOrder/cancelVipOrder?_id=[id]',
};
