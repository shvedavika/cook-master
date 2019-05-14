import {fetchEvents} from "../containers/EventsPage/EventsHelper";

export const eventsSortBy = property => ({type: EVENT_SORT_BY, payload: property});
const EVENT_SORT_BY = 'event/sort';

export const eventsFilterBy = property => ({type: EVENT_FILTER_BY, payload: property});
const EVENT_FILTER_BY = 'event/filter';

export const eventsLoadedSuccessfully = events => ({type: EVENTS_LOADED_SUCCESSFULLY, payload: events});
const EVENTS_LOADED_SUCCESSFULLY = 'event/events_loaded_successfully';

export const eventLoad = () => ({type: EVENT_LOAD});
const EVENT_LOAD = 'event/event_load';

export const eventLoadedSuccessfully = event => ({type: EVENT_LOADED_SUCCESSFULLY, payload: event});
const EVENT_LOADED_SUCCESSFULLY = 'event/event_loaded_successfully';

export const setPageNumber = number => ({type: SET_PAGE_NUMBER, payload: number});
const SET_PAGE_NUMBER = 'event/set_page';

export function loadEvents() {
  return (dispatch) => {
    fetchEvents()
      .then((events) => dispatch(eventsLoadedSuccessfully(events)));
  }
}
export function loadEvent(id) {
  return (dispatch) => {
    dispatch(eventLoad());
    fetchEvents()
      .then((events) => {
        const idNumber = Number(id);
        const event = events.find((event) => event.id === idNumber);
        dispatch(eventLoadedSuccessfully(event));
      });
  }
}

const initialState = {
  events: [],
  event: null,
  eventsFiltered: [],
  page: 1,
};

export default function (state = initialState, action) {
  let stateToUpdate = [...state.eventsFiltered];
  switch (action.type) {
    case EVENT_SORT_BY: {
      if (action.payload === 'name-asc') {
        stateToUpdate.sort((a, b) => {
          let nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase();
          if (nameA < nameB) {
            return -1;
          } else if (nameA > nameB) {
            return 1;
          }
          return 0;
        });
      }
      if (action.payload === 'name-desc') {
        stateToUpdate.sort((a, b) => {
          let nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase();
          if (nameA < nameB) {
            return 1;
          } else if (nameA > nameB) {
            return -1;
          }
          return 0;
        });
      }
      if (action.payload === 'price-asc') {
        stateToUpdate.sort((a, b) => a.price - b.price);
      }
      if (action.payload === 'price-desc') {
        stateToUpdate.sort((a, b) => {
          return b.price - a.price;
        })
      }
      if (action.payload === 'date-asc') {
        stateToUpdate.sort((a, b) => new Date(a.date) - new Date(b.date))
      }
      if (action.payload === 'date-desc') {
        stateToUpdate.sort((a, b) => {
          const dateA = new Date(a.date), dateB = new Date(b.date);
          return dateB - dateA;
        })
      }
      if(action.payload === ' '){
        return {
          ...state,
          eventsFiltered: [...state.events],
        };
      }
      return {
        ...state,
        eventsFiltered: stateToUpdate,
        page: 1,
      }
    }
    case EVENTS_LOADED_SUCCESSFULLY: {
      return {
        ...state,
        events: action.payload,
        eventsFiltered: action.payload,
      };
    }
    case EVENT_LOAD: {
      return {
        ...state,
        event: null,
      };
    }
    case EVENT_LOADED_SUCCESSFULLY: {
      return {
        ...state,
        event: action.payload,
      };
    }
    case EVENT_FILTER_BY: {
      let eventsFiltered = [];
      const filters = action.payload;
      const groupsToCheck = Object.keys(filters);
      const filtersIds = ['typeOfEvent', 'ageGroup'];

      if (!groupsToCheck.length) {
        return {
          ...state,
          eventsFiltered: [...state.events]
        };
      }

      eventsFiltered = [...state.events];
      filtersIds
        .filter((filter) => filters[filter])
        .forEach((filter) => {
          eventsFiltered = filterByGroup(filters, filter, eventsFiltered);
        });

      return {
        ...state,
        eventsFiltered,
        page: 1,
      }
    }
    case SET_PAGE_NUMBER: {
      return {
        ...state,
        page: action.payload,
      }
    }
    default:
      return state;
  }
};

function filterByGroup(filters, filter, events) {
  const filtered = [];
  const filterGroup = filters[filter];

  filterGroup.forEach(eventNameType => {
    events.forEach(item => {
      if (item[filter] === eventNameType) {
        filtered.push(item);
      }
    });
  });
  return filtered;
}
