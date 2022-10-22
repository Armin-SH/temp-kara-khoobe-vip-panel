import routes from "@routes";
import {fetchApi} from '../fetch';

interface GetCategoryProps {
  city: string
}

const getCategoryApi = ({city}: GetCategoryProps) => {
  return fetchApi({
    method: "GET",
    URL: {
      pathname: routes["api.category.get-category"],
      query: {
        city: city
      }
    },
  });
}

export default getCategoryApi;
