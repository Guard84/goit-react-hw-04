import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";

const getImages = async (searchQuery, page) => {
    const response = await axios.get("/search/photos", {
      params: {
        query: searchQuery,
        per_page: 10,
        page
      },
      headers: {
        Authorization: "Client-ID IBMrBYoLEGfuRk2jfQN7pv6x5klZzVrhc-_N7k0yNeY",
        "Accept-Version": "v1"
      },
    });
  
    return response.data.results;
};

export default getImages;