import axios from 'axios';
const instance =axios.create({
  baseURL:'http://192.168.200.1:8005',
  timeout:6000
});

export function request (config) {
  return instance(config);
}
