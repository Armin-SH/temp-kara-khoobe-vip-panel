import routes from "@routes";
import {fetchApi} from '../fetch';

interface UpdateCategoryProps {
  title: string

  imageUrl: string

  cities: Array<string>

  id: string
}

const updateCategoryApi = ({cities, id, imageUrl, title}: UpdateCategoryProps) => {
  return fetchApi({
    method: "PUT",
    URL: routes["api.category.crud"],
    payload: {
      title: title,
      imageUrl: imageUrl,
      cities: cities,
      _id: id,
    }
  });
}

export default updateCategoryApi;
