import routes from "@routes";
import {fetchApi} from '../fetch';


const getSkillsApi = () => {
  return fetchApi({
    method: "PUT",
    URL: routes["api.speciality.get-skills"],
  });
}

export default getSkillsApi;
