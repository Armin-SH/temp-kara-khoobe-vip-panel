import routes from "@routes";
import {fetchApi} from '../fetch';


interface UpdateNewAddressProps {
  title: string,
  geoLat: string,
  geoLong: string,
  number: string,
  unit: string,
  fullAddress: string,
  id: string
}

const updateNewAddressApi = ({unit, fullAddress, geoLat, geoLong, number, title, id}: UpdateNewAddressProps) => {
  return fetchApi({
    method: "PUT",
    URL: routes["api.address.crud"],
    payload: {
      _id: id,
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
