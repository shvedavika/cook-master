import axios from "axios";

export function fetchEvents() {
  return axios.get('/events.json')
    .then(({data}) => data);
}
