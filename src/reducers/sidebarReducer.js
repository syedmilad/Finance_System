import { SET_MENU_ITEM, SET_SUB_MENU_ITEM } from "../actions";

const initialState = {
  menuItem: { name: "portfolio", label: "Portfolio" },
  subMenuItem: null,
};

export const sidebarReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MENU_ITEM:
      return {
        ...state,
        menuItem: action.payload,
      };
    case SET_SUB_MENU_ITEM:
      return {
        ...state,
        subMenuItem: action.payload,
      };
    default:
      return state;
  }
};
