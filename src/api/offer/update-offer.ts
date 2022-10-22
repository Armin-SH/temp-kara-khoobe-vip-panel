import routes from "@routes";
import {fetchApi} from '../fetch';

interface UpdateOfferProps {
  title: string

  description: string

  amount: number

  discount: number

  maxDiscount: number

  discountType: string

  expDays: number

  imageUrl: string

  specialityId: string

  id: string

  categoryId: string
}

const updateOfferApi = ({id, categoryId, imageUrl, specialityId, amount, discount, discountType, maxDiscount, expDays, title, description}: UpdateOfferProps) => {
  return fetchApi({
    method: "PUT",
    URL: routes["api.offer.crud"],
    payload: {
      _id: id,
      title: title,
      description: description,
      amount: amount,
      discount: discount,
      maxDiscount: maxDiscount,
      discountType: discountType,
      expDays: expDays,
      imageUrl: imageUrl,
      specialityID: specialityId,
      categoryID: categoryId,
    }
  });
}

export default updateOfferApi;
