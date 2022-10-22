import routes from "@routes";
import {fetchApi} from '../fetch';

interface InsertCategoryProps {
  title: string

  parent: string

  imageUrl: string

  thumbnailUrl: string

  cities: Array<string>
}

const insertCategoryApi = ({cities, imageUrl, thumbnailUrl, parent, title}: InsertCategoryProps) => {
  return fetchApi({
    method: "POST",
    URL: routes["api.category.crud"],
    payload: {
      title: title,
      parent: parent,
      imageUrl: imageUrl,
      thumbnailUrl: thumbnailUrl,
      cities: cities,
    }
  });
}

export default insertCategoryApi;
