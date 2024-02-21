// reducers.js
import { combineReducers } from "@reduxjs/toolkit";
import { STORE_FORM_MODAL_MODUL, STORE_ID_DATA } from "./actions";
import { DataState } from "./interface/InterfaceRedux";

const initialDataState: DataState = {
  stateForm: false,
  passing_id_param: {
    id: null,
    action: "",
  },
};

const reducers_redux = (state = initialDataState, action: any): DataState => {
  switch (action.type) {
    case STORE_FORM_MODAL_MODUL:
      return {
        ...state,
        stateForm: action.data,
      };
    case STORE_ID_DATA:
      return {
        ...state,
        passing_id_param: {
          id: action.id, // Mengisi nilai id
          action: action.action, // Mengisi nilai param
        },
      };
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  data: reducers_redux,
});

export type RootState = ReturnType<typeof rootReducer>;
