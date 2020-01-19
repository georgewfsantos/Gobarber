import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333',
  // on Android : 'http://10.0.2.2:3333'
  // genymotion: 'http://10.0.3.2:3333'
  // physical device: 'http://ip_address_of_your_machine:3333'
});

export default api;
