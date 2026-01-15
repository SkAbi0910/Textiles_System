import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.example.com',
  timeout: 10000,   
    withCredentials: true,
    headers: {
    'Content-Type': 'application/json',
    },      
});
export default instance;