import {fetchMenu} from "../containers/MenuPage/MenuHelper";

export function loadMenu() {
  return (dispatch) => {
    fetchMenu()
      .then((menu) => dispatch(menuLoadedSuccessfully(menu)));
  }
}

export const menuLoadedSuccessfully = menu => ({type: MENU_LOADED_SUCCESSFULLY, payload: menu});
const MENU_LOADED_SUCCESSFULLY = 'menu/menu_loaded_successfully';

const initialState = {
  menu: [],
};
export default function(state = initialState, action){
  switch(action.type){
    case MENU_LOADED_SUCCESSFULLY: {
      return {
        ...state,
        menu: action.payload,
      }
    }
    default:
      return state;
  }
}
