// reducers.js
import { combineReducers } from "@reduxjs/toolkit";
import {
  STORE_FORM_MODAL_MODUL,
  StoreFormModalModulAction,
  STORE_ID_DATA,
  StoreIdModulUserAction,
} from "./actions";
import { DataState } from "./interface/InterfaceRedux";

const initialDataState: DataState = {
  stateForm: false,
  id_modul_users: 0,
};

export type ActionTypes = StoreFormModalModulAction | StoreIdModulUserAction;

const reducers_redux = (
  state = initialDataState,
  action: ActionTypes
): DataState => {
  switch (action.type) {
    case STORE_FORM_MODAL_MODUL:
      return {
        ...state,
        stateForm: action.data,
      };
    case STORE_ID_DATA:
      return {
        ...state,
        id_modul_users: action.data,
      };
    default:
      return state;
  }
};

export interface RootState {
  data: DataState;
}

const rootReducer = combineReducers({
  data: reducers_redux,
});

export default rootReducer;
