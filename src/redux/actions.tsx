// actions.js
export const STORE_FORM_MODAL_MODUL = "STORE_FORM_MODAL_MODUL";
export const STORE_ID_DATA = "STORE_ID_DATA";

export interface StoreFormModalModulAction {
  type: typeof STORE_FORM_MODAL_MODUL;
  data: boolean;
}

export interface StoreIdModulUserAction {
  type: typeof STORE_ID_DATA;
  data: any;
}

export const StoreFormModalModulAction = (
  data: boolean
): StoreFormModalModulAction => ({
  type: STORE_FORM_MODAL_MODUL,
  data: data,
});

export const StoreIdModulUserAction = (data: any): StoreIdModulUserAction => ({
  type: STORE_ID_DATA,
  data: data,
});
