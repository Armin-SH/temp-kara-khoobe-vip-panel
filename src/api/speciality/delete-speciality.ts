import routes from "@routes";
import {fetchApi} from '../fetch';

interface DeleteSpecialityProps {
  title: string

  description: string

  imageUrl: string

  id: string

  options: Array<{ title: string, value: string }>
}

const deleteSpecialityApi = ({id, description, imageUrl, options, title}: DeleteSpecialityProps) => {
  return fetchApi({
    method: "PUT",
    URL: routes["api.speciality.crud"],
    payload: {
      _id: id,
      title: title,
      description: description,
      imageUrl: imageUrl,
      options: options,
    }
  });
}

export default deleteSpecialityApi;
