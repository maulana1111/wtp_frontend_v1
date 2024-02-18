export interface ModalField {
  id: string;
  label: string;
  type: "text" | "email" | "radio" | "hidden" | "select" | "image"; // Tambahkan 'image' sebagai opsi tipe
  options?: string[];
}

// Define interface for props
export interface ModalProps {
  modalFields: ModalField[];
  // initialData?: FormDataState; // Tambahkan prop initialData
  formData: FormDataState;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  onImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
  isViewFormModal: boolean;
  onChangeStateViewModal: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface PropsModalController<T> {
  modalFields: any;
  initialData: T;
  showModal: boolean;
}

export interface FormDataState {
  [key: string]: string | number | boolean; // sesuaikan dengan tipe data yang diharapkan untuk setiap field
}
