import axios from 'axios';

//const BASE_URL = "http://localhost:3000"
const BASE_URL = "http://192.168.31.123:3000"


export default axios.create({
 baseURL: "http://192.168.31.123:3000"
});

  export var getParagraphs = function() {
    return axios.get(`/paragraphs`).then(res => res.data);
  };


