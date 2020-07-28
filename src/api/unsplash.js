import axios from "axios";

//axio.create used to create some api section filre url
export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID 7uqasLCNBoLqdU-o2BeAG8basdZLeMnUewAuhVlCcOw",
  },
});
