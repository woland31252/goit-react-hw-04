import axios from "axios";

// axios.defaults.baseURL = "https://api.unsplash.com";


const instance = axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    "Accept-Version": "v1",
    "Authorization": "Client-ID ttzhhG7hqkbd8IQK8enG5op-M_TFf5hzj7ukGd_vSRU"  },
});

 export const fetchImages = async (searchQuery, curentPage)=> {
    const response = await instance.get('/search/photos', {
      params: {
        query: searchQuery,
        page: curentPage,
        per_page: 12,
        },
    });
    return response.data;
 }

 