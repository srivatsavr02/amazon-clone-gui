import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://amazon-clone-reactapi.herokuapp.com/'
});

export default instance;