import axios from "axios";

const instance = axios.create({
  baseURL: "https://community-open-weather-map.p.rapidapi.com/",

  headers: {
    "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
    "x-rapidapi-key": "75b6a754a9mshdbe28bd93b21c09p1ee0abjsn032d45005478",
  },
});

export default instance;
