import axios from 'axios';

export function fetchMenu() {
  return axios.get('/menu.json')
    .then(({data}) => data);
}
