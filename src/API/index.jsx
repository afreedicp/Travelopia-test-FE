import axios from './axios';

const travellersList = (successCB) => {
  return axios.get('/travellers').then((res) => {
    successCB(res.data);
    return res.data;
  });
};

const createTraveller = (data) => {
  return axios.post('/travellers/createTraveller', data).then((res) => {
    return res;
  });
};

export { travellersList, createTraveller };
