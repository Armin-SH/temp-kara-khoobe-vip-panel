import axios from "axios";


const mapReverseLocationApi = async ({lat, lng}: { lat: number, lng: number }) => {

  return await axios.get('https://map.ir/reverse/no', {
    headers: {
      'x-api-key': process.env.NEXT_PUBLIC_MAP_TOKEN,
    },
    params: {
      lat: lat,
      lon: lng,
    }
  })
}

export default mapReverseLocationApi