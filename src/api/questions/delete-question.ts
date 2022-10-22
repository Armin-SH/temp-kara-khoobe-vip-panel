import routes from "@routes";
import {fetchApi} from '../fetch';

interface DeleteQuestionProps {
  id: string
}

const deleteQuestionApi = ({id}: DeleteQuestionProps) => {
  return fetchApi({
    method: "DELETE",
    URL: routes["api.question.crud-question"],
    payload: {
      _id: id
    }
  });
}

export default deleteQuestionApi;
