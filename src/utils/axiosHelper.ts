import axios from 'axios';

const BACKEND_PORT_NUMBER = '8082';
const SERVER_URL = `http://'${window.location.hostname}:${BACKEND_PORT_NUMBER}/`;

export async function get(endpoint: string, params = '') {
  console.log(`%cGET 요청 ${SERVER_URL}${endpoint}/${params}`, 'color: #a25cd1;');

  return (
    axios.get(`${SERVER_URL}${endpoint}/${params}`),
    {
      headers: {
        Authorization: sessionStorage.getItem('userToken'),
      },
    }
  );
}

export async function post(endpoint: string, data: Object) {
  const bodyData = JSON.stringify(data);
  console.log(`%cPOST 요청:${SERVER_URL}${endpoint}`, 'color: #296aba;');
  console.log(`%cPOST 요청 데이터: ${bodyData}`, 'color: #296aba;');

  return axios.post(`${SERVER_URL}${endpoint}`, bodyData, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: sessionStorage.getItem('userToken'),
    },
  });
}