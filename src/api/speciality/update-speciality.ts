import routes from "@routes";
import {fetchApi} from '../fetch';

interface UpdateSpecialityProps {
  title: string

  description: string

  imageUrl: string

  id: string

  options: Array<{ title: string, value: string }>

  email: string
}

const updateSpecialityApi = ({options, id, email, description, imageUrl, title}: UpdateSpecialityProps) => {
  return fetchApi({
    method: "PUT",
    URL: routes["api.speciality.crud"],
    payload: {
      title: title,
      description: description,
      imageUrl: imageUrl,
      _id: id,
      options: options,
      email: email,
    }
  });
}

export default updateSpecialityApi;
