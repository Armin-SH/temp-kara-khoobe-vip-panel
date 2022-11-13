import axios from "axios";


const mapAutoCompleteApi = async ({text}: { text: string }) => {

  return await axios.post('https://map.ir/search/v2/autocomplete', {
    text: text,
    $filter: "province eq تهران",
    $select: "neighborhood,roads,woodwater,poi",
  }, {
    headers: {
      'x-api-key': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6Ijc2NWE1NTgwNmNjNTM3MjJlODk1ZGQzNmYzYTA4MzIzNzRiNTY3NGI4NmUwYTQ2M2U3NzNmYWY4NDQxY2M4YTZlNzBkN2I5YWQzOTgyMzk5In0.eyJhdWQiOiIxNzAzNCIsImp0aSI6Ijc2NWE1NTgwNmNjNTM3MjJlODk1ZGQzNmYzYTA4MzIzNzRiNTY3NGI4NmUwYTQ2M2U3NzNmYWY4NDQxY2M4YTZlNzBkN2I5YWQzOTgyMzk5IiwiaWF0IjoxNjQ0NzM4OTk5LCJuYmYiOjE2NDQ3Mzg5OTksImV4cCI6MTY0NzI0NDU5OSwic3ViIjoiIiwic2NvcGVzIjpbImJhc2ljIl19.Ht8JNvY1f8tNYprSil-qV8jpyHH1165aN0ugTf6dRK5abwxCzqPA6kge6yt7xxYmNO3-urjLPfiU_PAqn_16xUt5yCUK8NQFQ6dT6qKHEJUg83t46AE90-S7_9weJ2yDV2lCzm4YpEmrlqeqOTNdBDPa7Jp2jkAeMFeNTIYPbz_7ubqLsvn2QbCpzhFjiaAmgudGWb11gaqGzamyOmqIYGpWHY-2QIEtexjVaK86F7JFvtakxuU1Kptmb6LRNmedKoWkah4VMg0Ify6T1PeDPPhleEDgXCeE9t8gCTIWKzeIRBV6BRmQHs6AxXEpoj4LJa4UUBWjhbCw6Py0Yo9g2g',
    }
  })
}

export default mapAutoCompleteApi