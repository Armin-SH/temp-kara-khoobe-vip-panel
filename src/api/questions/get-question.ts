import routes from "@routes";
import {fetchApi} from '../fetch';

interface QuestionProps {
  specialityID: string
}

const getQuestionApi = ({specialityID}: QuestionProps) => {
  return fetchApi({
    method: "GET",
    URL: {
      pathname: routes["api.questions.get-question"],
      query: {
        specialityID: specialityID,
      }
    }
  });
}

export default getQuestionApi;
