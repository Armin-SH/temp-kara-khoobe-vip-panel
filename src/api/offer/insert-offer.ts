import routes from "@routes";
import {fetchApi} from '../fetch';

interface InsertOfferProps {
  title: string

  description: string

  amount: number

  discount: number

  maxDiscount: number

  discountType: string

  expDays: number

  imageUrl: string

  specialityID: string
}

const insertOfferApi = ({amount, description, expDays, discount, maxDiscount, discountType, imageUrl, specialityID, title}: InsertOfferProps) => {
  return fetchApi({
    method: "POST",
    URL: routes["api.offer.crud"],
    payload: {
      title: title,
      description: description,
      amount: amount,
      discount: discount,
      maxDiscount: maxDiscount,
      discountType: discountType,
      expDays: expDays,
      imageUrl: imageUrl,
      specialityID: specialityID,
    }
  });
}

export default insertOfferApi;
