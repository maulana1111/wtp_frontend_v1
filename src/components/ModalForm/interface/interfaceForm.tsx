export interface ModalField {
  id: string;
  label: string;
  type: "text" | "email" | "radio" | "hidden" | "select" | "image"; // Tambahkan 'image' sebagai opsi tipe
  options?: string[];
}

// Define interface for props
export interface ModalProps {
  modalFields: ModalField[];
  initialData: { [key: string]: string }; // Tambahkan prop initialData
  formData: { [key: string]: string };
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  onImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export interface PropsModalController {
  modalFields: ModalField[];
  initialData: { [key: string]: string };
}
