import routes from "@routes";
import {fetchApi} from '../fetch';

interface SpecialitiesProps {
  specialityCategory: string
}

const specialitiesApi = ({specialityCategory}: SpecialitiesProps) => {
  return fetchApi({
    method: "GET",
    URL: {
      pathname: routes["api.order.specialities"],
      query: {
        categoryID: specialityCategory
      }
    },
    withToken: true,
  });
}

export default specialitiesApi;
