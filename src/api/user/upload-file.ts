import axios from 'axios'
import {getFromCookie} from "@utils";


interface UploadFileProps {
  file: File

  key: string
}

const uploadFileApi = async ({file, key}: UploadFileProps) => {
  const requestData = new FormData();
  requestData.append('file', file);
  requestData.append('key', key)
  const token = await getFromCookie("token");

  return await axios.post('https://devil.karakhoobe.ir/v0.0.1/vipUser/uploadFile', requestData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      'x-auth-token': token
    }
  })
}

export default uploadFileApi;
