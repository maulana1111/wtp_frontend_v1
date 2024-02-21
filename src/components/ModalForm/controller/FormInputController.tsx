import { useState, useEffect } from "react";
import * as React from "react";
import ModalForm from "../pages/FormInputModal";
import {
  PropsModalController,
} from "../interface/interfaceForm";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/reducers";
import { StoreFormModalModulAction } from "../../../redux/actions";
import { showPopupAlert } from "../../Notification/PopupAlert";
import RequestData from "../../../redux/RequestAPI";
// import Modal from './Modal';

const FormInputController = <T extends Record<string, any>>({
  modalFieldsUrl,
  initialData,
}: PropsModalController<T>) => {
  const dispatch = useDispatch();
  const stateForm = useSelector((state: RootState) => state.data.stateForm);
  const [formData, setFormData] = useState<any>(initialData);
  const [isViewFormModal, setIsViewFormModal] = useState<boolean>(stateForm);
  const [fields, setFields] = useState<any>({});

  useEffect(() => {
    getDataField();
  }, []);

  const getDataField = async () => {
    try {
      const respons = await RequestData({
        method: "GET_RESTRICT",
        url: modalFieldsUrl,
        data: {},
        config: {},
      });
      setFields(respons);
    } catch (error) {
      return showPopupAlert(false, "Something is wrong is wrong");
    }
  };

  const handleChangeStateViewModal = () => {
    dispatch(StoreFormModalModulAction(!stateForm));
    setIsViewFormModal(!isViewFormModal);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prevFormData: any) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleChangeStateViewModal();
    console.log("Form Data:", formData);
    // Place your form submission logic here
  };

  return (
    <div>
      {/* <ModalForm
        // initialData={formData}
        formData={formData}
        field={fields}
        onChange={handleChange}
        onSubmit={handleSubmit}
        isViewFormModal={isViewFormModal}
        onChangeStateViewModal={handleChangeStateViewModal}
      /> */}
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
