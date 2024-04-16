import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com"

export const fetchImages = async ()=> {
    const response = axios.get("/search/photos?query=dogs", {
      params: {
        page: 1,
        per_page: 10,
        client_id: "ttzhhG7hqkbd8IQK8enG5op-M_TFf5hzj7ukGd_vSRU",
      },
    });
    return response.results;
}