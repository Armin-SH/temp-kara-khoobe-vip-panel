import routes from "@routes";
import {fetchApi} from '../fetch';

interface DeleteAnswerProps {
  questionID: string,
  id: string
}

const deleteAnswerApi = ({id, questionID}: DeleteAnswerProps) => {
  return fetchApi({
    method: "DELETE",
    URL: routes["api.question.crud-answer"],
    payload: {
      _id: id,
      questionID: questionID,
    }
  });
}

export default deleteAnswerApi;
