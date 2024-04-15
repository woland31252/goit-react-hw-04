import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/search/photos"

export const fetchImages = async (image)=> {
    const response = axios.get(`?query=${image}`, {
      params: {
        client_id: "ttzhhG7hqkbd8IQK8enG5op-M_TFf5hzj7ukGd_vSRU",
        page: 1,
        per_page: 10,
      }
    })
    return response.results.urls;
}