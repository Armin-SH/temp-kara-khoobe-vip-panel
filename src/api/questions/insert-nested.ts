import routes from "@routes";
import {fetchApi} from '../fetch';

interface InsertNestedProps {
  dependsOn: string

  answerIndex: number

  inOrder: number

  title: string

  type: string
}

const insertNestedApi = ({answerIndex, type, title, inOrder, dependsOn}: InsertNestedProps) => {
  return fetchApi({
    method: "POST",
    URL: routes["api.question.crud-question"],
    payload: {
      dependsOn: dependsOn,
      answerIndex: answerIndex,
      inOrder: inOrder,
      title: title,
      type: type,
    }
  });
}

export default insertNestedApi;
