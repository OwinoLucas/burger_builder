import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://my-react-burger-b5702-default-rtdb.firebaseio.com/'
});

export default instance;