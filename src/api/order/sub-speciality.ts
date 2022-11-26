import routes from "@routes";
import {fetchApi} from '../fetch';


const subSpecialityApi = ({parentId}: { parentId?: string }) => {
  return fetchApi({
    method: "GET",
    URL: {
      pathname: routes["api.order.sub-speciality-category"],
      query: {
        city: "تهران",
        parent: parentId,
      }
    },
    withToken: true,
  });
}

export default subSpecialityApi;
