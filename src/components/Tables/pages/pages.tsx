import { Fragment, useState } from "react";
import Tables from "../Component/Tables";
import EmptyTable from "../Component/EmptyTable";
import LoadingView from "../../Loader/LoadingView";
import FormInputController from "../../ModalForm/controller/FormInputController";
import * as React from "react";
import { PropsCrudView } from "../interface/interface";

const CrudViewPages: React.FC<PropsCrudView> = ({
  isLoading,
  title,
  data,
  field,
  onClickAction
}) => {
  const [isShowModal, setIsShowModal] = useState(false);
  const onChangeStateModal = () => {
    // dispatch(StoreFormModalModul(true));
    setIsShowModal(!isShowModal);
  };

  return (
    <Fragment>
      {
        <FormInputController
          modalFields={field}
          showModal={isLoading}
          initialData={}
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
                  handleClickButton={(param: any, id: any) =>
                    onClickAction(param, id)
                  }
                />
              ) : (
                <EmptyTable />
              )}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CrudViewPages;
