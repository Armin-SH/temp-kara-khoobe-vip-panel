import routes from "@routes";
import {fetchApi} from '../fetch';

interface InsertSpecialityProps {
  title: string

  description: string

  imageUrl: string

  thumbnailUrl: string

  summery: string

  categoryId: string

  keyWords: string

  options: Array<{ title: string, value: string }>
}

const insertSpecialityApi = ({categoryId, keyWords, options, summery, imageUrl, thumbnailUrl, title, description}: InsertSpecialityProps) => {
  return fetchApi({
    method: "POST",
    URL: routes["api.speciality.crud"],
    payload: {
      title: title,
      description: description,
      imageUrl: imageUrl,
      thumbnailUrl: thumbnailUrl,
      summery: summery,
      categoryID: categoryId,
      keyWords: keyWords,
      options: options,
    }
  });
}

export default insertSpecialityApi;
