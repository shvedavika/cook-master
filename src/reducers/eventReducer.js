export const eventSortBy = property => ({type: EVENT_SORT_BY, payload: property});
const EVENT_SORT_BY = 'event/sort';


export const eventFilterBy = property => ({type: EVENT_FILTER_BY, payload: property});
const EVENT_FILTER_BY = 'event/filter';


export const eventLoadedSuccessfully = events => ({type: EVENT_LOADED_SUCCESSFULLY, payload: events});
const EVENT_LOADED_SUCCESSFULLY = 'event/loaded_successfully';

export const setPageNumber = number => ({type: SET_PAGE_NUMBER, payload: number});
const SET_PAGE_NUMBER = 'event/set_page';

const initialState = {
  events: [],
  eventsFiltered: [],
  page: 1,
};

export default function (state = initialState, action) {
  let stateToUpdate = [...state.events];
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
      if(action.payload === ''){
        return {
          ...state,
          eventsFiltered: [...state.events],
        };
      }
      return {
        ...state,
        eventsFiltered: stateToUpdate,
      }
    }
    case EVENT_LOADED_SUCCESSFULLY: {
      return {
        ...state,
        events: action.payload,
        eventsFiltered: action.payload,
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
