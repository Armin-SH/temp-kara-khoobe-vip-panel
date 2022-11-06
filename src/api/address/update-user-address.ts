import routes from "@routes";
import {fetchApi} from '../fetch';


interface UpdateNewAddressProps {
  title: string,
  geoLat: number,
  geoLong: number,
  number: string,
  unit: string,
  fullAddress: string,
  _id: string
}

const updateNewAddressApi = ({unit, fullAddress, geoLat, geoLong, number, title, _id}: UpdateNewAddressProps) => {
  return fetchApi({
    method: "PUT",
    URL: routes["api.address.crud"],
    payload: {
      _id: _id,
      title: title,
      geoLat: geoLat,
      geoLong: geoLong,
      number: number,
      unit: unit,
      fullAddress: fullAddress,
    },
    withToken: true,
  });
}

export default updateNewAddressApi;
