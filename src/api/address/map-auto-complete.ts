import axios from "axios";


const mapAutoCompleteApi = async ({text}: { text: string }) => {

  return await axios.post('https://map.ir/search/v2/autocomplete', {
    text: text,
    $filter: "province eq تهران",
    $select: "neighborhood,roads,woodwater,poi",
  }, {
    headers: {
      'x-api-key': process.env.NEXT_PUBLIC_MAP_TOKEN,
    }
  })
}

export default mapAutoCompleteApi