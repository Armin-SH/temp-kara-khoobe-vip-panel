import routes from "@routes";
import {fetchApi} from '../fetch';

interface DeleteCategoryProps {
  id: string
}

const deleteCategoryApi = ({id}: DeleteCategoryProps) => {
  return fetchApi({
    method: "DELETE",
    URL: routes["api.category.crud"],
    payload: {
      _id: id,
    }
  });
}

export default deleteCategoryApi;
