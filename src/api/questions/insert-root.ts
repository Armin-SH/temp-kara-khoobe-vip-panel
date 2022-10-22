import routes from "@routes";
import {fetchApi} from '../fetch';

interface InsertRootProps {
  specialityID: string

  inOrder: number

  title: string

  type: string
}

const insertRootApi = ({inOrder, type, specialityID, title}: InsertRootProps) => {
  return fetchApi({
    method: "POST",
    URL: routes["api.question.crud-question"],
    payload: {
      specialityID: specialityID,
      inOrder: inOrder,
      title: title,
      type: type,
    }
  });
}

export default insertRootApi;
