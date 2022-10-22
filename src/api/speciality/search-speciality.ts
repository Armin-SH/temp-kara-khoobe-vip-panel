import routes from "@routes";
import {fetchApi} from '../fetch';

interface SearchSpecialityProps {
  city: string

  text: string
}

const searchSpecialityApi = ({city, text}: SearchSpecialityProps) => {
  return fetchApi({
    method: "GET",
    URL: {
      pathname: routes["api.speciality.search-speciality"],
      query: {
        city: city,
        text: text,
      }
    }
  });
}

export default searchSpecialityApi;
