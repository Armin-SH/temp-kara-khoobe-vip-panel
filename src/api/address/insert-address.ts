import routes from "@routes";
import {fetchApi} from '../fetch';

interface InsertAddressProps {
  title: string

  geoLat: string

  geoLong: string

  number: string

  unit: string

  fullAddress: string

  userInfo: { firstname: string, lastname: string, phonenumber: string }
}

const insertAddressApi = ({fullAddress, geoLat, geoLong, unit, number, userInfo, title}: InsertAddressProps) => {
  return fetchApi({
    method: "POST",
    URL: routes["api.address.crud"],
    payload: {
      title: title,
      geoLat: geoLat,
      geoLong: geoLong,
      number: number,
      unit: unit,
      fullAddress: fullAddress,
      userInfo: userInfo,
    }
  });
}

export default insertAddressApi;
