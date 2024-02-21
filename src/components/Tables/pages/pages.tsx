import { useState } from "react";
import Tables from "../Component/Tables";
import EmptyTable from "../Component/EmptyTable";
import LoadingView from "../../Loader/LoadingView";
import * as React from "react";
import { PropsCrudView } from "../interface/interface";
import ModalForm from "../../ModalForm/pages/FormInputModal";

const CrudViewPages: React.FC<PropsCrudView> = ({
  isLoading,
  title,
  data,
  fields,
  formData,
  onSubmit,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [formDatas, setFormDatas] = useState<any>(formData);

  React.useEffect(() => {
    setFormDatas(formData);
  }, [formData]);

  const onChangeStateModal = () => {
    setShowModal(!showModal);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    console.log(`${name}, ${value}`);
    
    setFormDatas((prevFormData: any) => ({
      ...prevFormData,
      [name]: value,
    }));
    console.log(JSON.stringify(formDatas));
    
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setShowModal(!showModal);
    const idValue = formData["id"] || "";

    // Memeriksa apakah formData["id"] memiliki nilai
    const updatedFormData =
      idValue !== ""
        ? { ...formDatas, id: idValue } // Jika ada, tambahkan id ke formDatas
        : { ...formDatas };

    onSubmit(updatedFormData);
  };

  return (
    <div>
      {
        <ModalForm
          field={fields}
          isViewFormModal={showModal}
          formData={formDatas}
          onChange={handleChange}
          onChangeStateViewModal={onChangeStateModal}
          onSubmit={(e: any) => handleSubmit(e)}
          title={title}
        />
      }
      <div className="d-flex justify-content-between">
        <h2 className="mb-2 page-title">{title}</h2>
        <h2 className="mb-2">
          <button className="btn btn-info" onClick={onChangeStateModal}>
            Add
          </button>
        </h2>
      </div>
      <div className="row my-4">
        <div className="col-md-12">
          <div className="card shadow">
            <div className="card-body">
              {isLoading ? (
                <LoadingView />
              ) : data && data.length !== 0 ? (
                <Tables
                  data={data}
                  handleClickButton={(param: any, data: any) =>
                    // onClickAction(param, data)
                    console.log("")
                  }
                />
              ) : (
                <EmptyTable />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrudViewPages;
