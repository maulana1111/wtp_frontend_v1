import { useState } from "react";
import * as React from "react";
import ModalForm from "../pages/FormInputModal";
import {
  FormDataState,
  PropsModalController,
} from "../interface/interfaceForm";
// import { useDispatch, useSelector } from "react-redux";
// import { RootState } from "../../../redux/reducers";
// import { StoreFormModalModul } from "../../../redux/actions";
// import Modal from './Modal';

const FormInputController = <T extends Record<string, any>>({
  modalFields,
  initialData,
  showModal,
}: PropsModalController<T>) => {
  const [formData, setFormData] = useState<FormDataState>(initialData);

  const [isViewFormModal, setIsViewFormModal] = useState<boolean>(showModal);

  const handleChangeStateViewModal = () => {
    // dispatch(StoreFormModalModul(false));
    setIsViewFormModal(!isViewFormModal);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({
          ...formData,
          [e.target.id]: reader.result as string,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsViewFormModal(!isViewFormModal);
    console.log("Form Data:", formData);
    // Place your form submission logic here
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <ModalForm
        // initialData={formData}
        formData={formData}
        modalFields={modalFields}
        onChange={handleChange}
        onImageChange={handleImageChange}
        onSubmit={handleSubmit}
        isViewFormModal={isViewFormModal}
        onChangeStateViewModal={handleChangeStateViewModal}
        
      />
    </div>
  );
};

export default FormInputController;

//   const modalFields = [
//     { id: 'name', label: 'Name', type: 'text' },
//     { id: 'email', label: 'Email', type: 'email' },
//     { id: 'gender', label: 'Gender', type: 'radio', options: ['Male', 'Female', 'Other'] },
//     { id: 'secret', label: 'Secret', type: 'hidden' },
//     { id: 'country', label: 'Country', type: 'select', options: ['USA', 'Canada', 'UK', 'Australia'] },
//     { id: 'avatar', label: 'Avatar', type: 'image' },
//   ];

//   const [initialData, setInitialData] = useState<{ [key: string]: string }>({
//     name: "John Doe",
//     email: "john@example.com",
//     gender: "Male",
//     country: "USA",
//     avatar: "https://example.com/avatar.jpg", // Contoh URL avatar
//   });
