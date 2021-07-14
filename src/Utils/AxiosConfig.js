import axios from "axios";

const instance = axios.create({
    baseURL: 'https://dummyapi.io/data/api',
    headers: {
        "app-id": "60b6023c98e5768341aefad0"
        }
        
  });

  export default instance; 