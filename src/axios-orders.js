import axios from 'axios';

const instance = axios.create({
    baseURL: "https://burger-builder-ec9cf.firebaseio.com/"
});

export default instance;