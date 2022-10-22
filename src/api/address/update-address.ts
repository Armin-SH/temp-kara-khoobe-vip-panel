import routes from "@routes";
import {fetchApi} from '../fetch';

interface UpdateAddressProps {
  id: string

  title: string

  geoLat: string

  geoLong: string

  number: string

  unit: string

  fullAddress: string
}

const updateAddressApi = ({fullAddress, geoLat, geoLong, id, number, unit, title}: UpdateAddressProps) => {
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
    }
  });
}

export default updateAddressApi;
