import {fetchEvents} from "../containers/EventsPage/EventsHelper";

export const doSearch = (query, events) => ({type: DO_SEARCH, payload: {query, events}});
const DO_SEARCH = 'search/do-search';

export function performSearch(query) {
  return (dispatch) => {
    fetchEvents().then((events) => {
      dispatch(doSearch(query, events));
    })
  };
}

const initialState = {
  enteredValue: '',
  searchData: {
    "/": "CookMaster",
    "/menu": "Menu",
    "/about-us": "About us",
    "/contacts": "Contacts",
    "/book-table": "Book table",
    "/events": "Events",
  },
  results: [],
};
export default function(state = initialState, action){
  switch(action.type){
    case DO_SEARCH : {
      const {query, events} = action.payload;
      const enteredValue = query.toLowerCase();
      const resultsPages = Object.entries(state.searchData).filter(([key, item]) => {
        return item.toLowerCase().includes(enteredValue);
      });
      const resultsEvents = events
        .filter((event) => event.name.toLowerCase().includes(enteredValue))
        .map((event) => [`/event/${event.id}`, event.name]);
      return {
        ...state,
        enteredValue,
        results: [...resultsPages, ...resultsEvents],
      }
    }
    default: return state;
  }
}
