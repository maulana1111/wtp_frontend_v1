// actions.js
export const STORE_FORM_MODAL_MODUL = "STORE_FORM_MODAL_MODUL";
export const STORE_ID_DATA = "STORE_ID_DATA";

export interface InterfaceStoreFormModalModul {
  type: typeof STORE_FORM_MODAL_MODUL;
  data: boolean;
}

export interface InterfaceStoreIdModulUser {
  type: typeof STORE_ID_DATA;
  id: number;
  action: string;
}

export type ActionTypes =
  | InterfaceStoreFormModalModul
  | InterfaceStoreIdModulUser;

export const StoreFormModalModulAction = (data: boolean) => ({
  type: STORE_FORM_MODAL_MODUL,
  data: data,
});

export const StoreIdModulUserAction = (id: number, action: string) => ({
  type: STORE_ID_DATA,
  id: id,
  action: action,
});
