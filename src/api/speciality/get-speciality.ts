import routes from "@routes";
import {fetchApi} from '../fetch';

interface GetSpecialityProps {
  id: string
}

const getSpecialityApi = ({id}: GetSpecialityProps) => {
  return fetchApi({
    method: "GET",
    URL: {
      pathname: routes["api.speciality.get-speciality"],
      query: {
        id: id
      }
    }
  });
}

export default getSpecialityApi;
