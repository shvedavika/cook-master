import axios from 'axios';
import {getCurrentDate, getCurrentTime} from "../components/BookTable/BookTableCalendar/dateHelper";

export const tablesLoadedSuccessfully = tables => ({type: TABLES_LOAD_SUCCESSFULLY, payload: tables});
const TABLES_LOAD_SUCCESSFULLY = 'tables/loaded_successfully';

export const saveDate = date => ({type: SAVE_DATE, payload: date});
const SAVE_DATE = 'tables/save-date';

export const saveTime = time => ({type: SAVE_TIME, payload: time});
const SAVE_TIME = 'tables/save-time';

export const saveSelectedTable = table => ({type: SAVE_SELECTED_TABLE, payload: table});
const SAVE_SELECTED_TABLE = 'tables/save-selected-table';

export const bookTable = payload => ({type: BOOK_TABLE, payload});
const BOOK_TABLE = 'tables/book-table';

export const saveBookedTable = table => ({type: SAVE_BOOKED_TABLE, payload: table});
const SAVE_BOOKED_TABLE = 'tables/save-booked-table';

export function loadTables() {
  return (dispatch) => {
    axios.get('/tables.json')
      .then(({data}) => dispatch(tablesLoadedSuccessfully(data)));
  };
}

const initialState = {
  tables: [],
  bookedTables: [],
  date: getCurrentDate(),
  time: getCurrentTime() || '',
  selectedTable: null,
  order: {},
  isMockedDataLoaded: false,
};
export default function(state = initialState, action) {
  switch(action.type){
    case TABLES_LOAD_SUCCESSFULLY: {
      if (state.isMockedDataLoaded) {
        return state;
      }
      return {
        ...state,
        tables: action.payload,
        bookedTables: action.payload,
        isMockedDataLoaded: true,
      }
    }
    case SAVE_DATE: {
      if (action.payload === getCurrentDate()) {
        return {
          ...state,
          date: action.payload,
          time: getCurrentTime(),
        }
      }
      return {
        ...state,
        date: action.payload,
      }
    }
    case SAVE_TIME: {
      return {
        ...state,
        time: action.payload,
      }
    }
    case SAVE_SELECTED_TABLE: {
      return {
        ...state,
        selectedTable: action.payload,
      }
    }
    case BOOK_TABLE: {
      return {
        ...state,
        order: {...action.payload},
      }
    }
    case SAVE_BOOKED_TABLE: {
      return {
        ...state,
        selectedTable: null,
        bookedTables: [
          ...state.bookedTables,
          action.payload
        ],
      }
    }
    default: return state;
  }
}
