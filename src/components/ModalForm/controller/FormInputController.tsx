import { useState } from "react";
import * as React from "react";
import ModalForm from "../pages/FormInputModal";
import { PropsModalController } from "../interface/interfaceForm";
// import Modal from './Modal';

const FormInputController: React.FC<PropsModalController> = ({
  modalFields,
  initialData,
}) => {
  const [formData, setFormData] = useState<{ [key: string]: string }>({
    name: "John Doe",
    email: "john@example.com",
    gender: "Male",
    country: "USA",
    avatar: "https://example.com/avatar.jpg", // Contoh URL avatar
  });

  //   const [initialData, setInitialData] = useState<{ [key: string]: string }>({
  //     name: "John Doe",
  //     email: "john@example.com",
  //     gender: "Male",
  //     country: "USA",
  //     avatar: "https://example.com/avatar.jpg", // Contoh URL avatar
  //   });

  const [initialDatas, setInitialDatas] = useState<{ [key: string]: string }>(
    initialData
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
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
    console.log("Form Data:", formData);
    // Place your form submission logic here
  };

  //   const modalFields = [
  //     { id: 'name', label: 'Name', type: 'text' },
  //     { id: 'email', label: 'Email', type: 'email' },
  //     { id: 'gender', label: 'Gender', type: 'radio', options: ['Male', 'Female', 'Other'] },
  //     { id: 'secret', label: 'Secret', type: 'hidden' },
  //     { id: 'country', label: 'Country', type: 'select', options: ['USA', 'Canada', 'UK', 'Australia'] },
  //     { id: 'avatar', label: 'Avatar', type: 'image' },
  //   ];

  return (
    <div>
      <h1>Parent Component</h1>
      <ModalForm
        initialData={initialDatas}
        formData={formData}
        modalFields={modalFields}
        onChange={handleChange}
        onImageChange={handleImageChange}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default FormInputController;
