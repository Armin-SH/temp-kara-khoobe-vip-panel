import routes from "@routes";
import {fetchApi} from '../fetch';

interface SubmitReferralCodeProps {
  referralCode: string
}

const submitReferralCodeApi = ({referralCode}: SubmitReferralCodeProps) => {
  return fetchApi({
    method: "POST",
    URL: routes["api.user.profile-info"],
    payload: {
      referalCode: referralCode
    }
  });
}

export default submitReferralCodeApi;
