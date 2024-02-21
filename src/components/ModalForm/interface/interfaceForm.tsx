export interface ModalField {
  id: string;
  label: string;
  type: "text" | "email" | "radio" | "hidden" | "select" | "image"; // Tambahkan 'image' sebagai opsi tipe
  options?: string[];
}

// Define interface for props
export interface ModalProps {
  field: any;
  // initialData?: FormDataState; // Tambahkan prop initialData
  formData?: any;
  title: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  onSubmit: (e: React.FormEvent) => void;
  isViewFormModal: boolean;
  onChangeStateViewModal: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface PropsModalController<T> {
  modalFieldsUrl: any;
  initialData: T;
}

export interface FormDataState {
  [key: string]: string | number | boolean; // sesuaikan dengan tipe data yang diharapkan untuk setiap field
}

export interface FieldProps {
  [key: string]: {
    type: string;
    widget_type?: string;
    hidden: boolean;
    required: boolean;
    label: string;
    help_text: string;
    initial_value: string | null;
    min_length: number | null;
    max_length: number | null;
    options?: [string, string][];
  };
}
