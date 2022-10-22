import routes from "@routes";
import {fetchApi} from '../fetch';

interface UpdateAnswerProps {
  id: string

  questionID: string

  title: string
}

const updateAnswerApi = ({id, questionID, title}: UpdateAnswerProps) => {
  return fetchApi({
    method: "PUT",
    URL: routes["api.question.crud-question"],
    payload: {
      _id: id,
      questionID: questionID,
      title: title,
    }
  });
}

export default updateAnswerApi;
