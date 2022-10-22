import routes from "@routes";
import {fetchApi} from '../fetch';

interface InsertAnswerProps {
  questionID: string

  title: string
}

const insertAnswerApi = ({questionID, title}: InsertAnswerProps) => {
  return fetchApi({
    method: "POST",
    URL: routes["api.question.crud-answer"],
    payload: {
      questionID: questionID,
      title: title,
    }
  });
}

export default insertAnswerApi;
