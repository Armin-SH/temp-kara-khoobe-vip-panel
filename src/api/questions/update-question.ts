import routes from "@routes";
import {fetchApi} from '../fetch';

interface UpdateQuestionProps {
  id: string

  title: string

  type: string
}

const updateQuestionApi = ({id, title, type}: UpdateQuestionProps) => {
  return fetchApi({
    method: "PUT",
    URL: routes["api.question.crud-question"],
    payload: {
      _id: id,
      title: title,
      type: type
    }
  });
}

export default updateQuestionApi;
