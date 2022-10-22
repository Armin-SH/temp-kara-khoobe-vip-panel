import routes from "@routes";
import {fetchApi} from '../fetch';

interface GetSummaryProps {
  categoryId: string

}

const getSummaryApi = ({categoryId}: GetSummaryProps) => {
  return fetchApi({
    method: "GET",
    URL: routes["api.speciality.get-summary"],
    payload: {
      categoryId: categoryId,
    }
  });
}

export default getSummaryApi;
