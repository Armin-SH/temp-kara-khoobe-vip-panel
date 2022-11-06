import routes from "@routes";
import {fetchApi} from '../fetch';


interface InsertNewAddressProps {
  title: string,
  geoLat: number,
  geoLong: number,
  number: string,
  unit: string,
  fullAddress: string,
}

const insertNewAddressApi = ({unit, fullAddress, geoLat, geoLong, number, title}: InsertNewAddressProps) => {
  return fetchApi({
    method: "POST",
    URL: routes["api.address.crud"],
    payload: {
      title: title,
      geoLat: geoLat,
      geoLong: geoLong,
      number: number,
      unit: unit,
      fullAddress: fullAddress
    },
    withToken: true,
  });
}

export default insertNewAddressApi;
