import axios from 'axios';

export default axios.create({
 baseURL: `http://localhost:3000/`
});

  export var getParagraphs = function() {
    return axios.get(`http://localhost:3000/paragraphs`).then(res => res.data);
  };


