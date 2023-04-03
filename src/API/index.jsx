import axios from './axios';

const travellersList = () => {
  return axios.get('/travellers').then((res) => {
    return res;
  });
};

const createTraveller = (data) => {
  return axios.post('/travellers/createTraveller', data).then((res) => {
    return res;
  });
};

export { travellersList, createTraveller };
