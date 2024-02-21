import * as React from "react";
import { FieldProps, ModalProps } from "../interface/interfaceForm";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import makeAnimated from "react-select/animated";
import Select, { OnChangeValue } from "react-select";
// Define interface for modal field
// Modal component

const animatedComponents = makeAnimated();
// Modal.setAppElement('#popup-root');
const ModalForm: React.FC<ModalProps> = ({
  field,
  formData,
  isViewFormModal,
  onChange,
  onSubmit,
  onChangeStateViewModal,
  title,
}) => {
  // component
  const getFieldComponent = (
    key: string,
    fieldData: FieldProps[keyof FieldProps]
  ) => {
    // const handleChangeSelectOption = (
    //   selectedOptions: any,
    //   actionMeta: any
    // ) => {
    //   onChange({
    //     target: {
    //       name: actionMeta.name,
    //       value: selectedOptions?.map((option: any) => parseInt(option.value)), // Memilih nilai dari selectedOptions
    //     },
    //   } as React.ChangeEvent<HTMLInputElement | HTMLSelectElement>);
    // };

    const handleChangeSelectOption = (
      selectedOptions: any,
      actionMeta: any
    ) => {
      let value;
      if (Array.isArray(selectedOptions)) {
        // Multi select
        value = selectedOptions.map((option: any) => parseInt(option.value));
      } else {
        // Single select
        value = parseInt(selectedOptions.value);
      }

      const event = {
        target: {
          name: actionMeta.name,
          value: value,
        },
      } as unknown;

      onChange(
        event as React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
      );
    };

    const onChangeCheckbox = (
      e: React.ChangeEvent<HTMLInputElement>,
      key: string
    ) => {
      const { checked } = e.target;
      const value = checked ? "true" : "false";
      onChange({
        target: {
          name: key,
          value: value,
        },
      } as React.ChangeEvent<HTMLInputElement>);
    };

    switch (fieldData.type) {
      case "CharField":
        return (
          <div className="">
            <input
              type="text"
              className="form-control"
              id={key}
              name={key}
              value={formData[key] || ""}
              onChange={onChange}
              required={fieldData.required}
            />
          </div>
        );
      case "EmailField":
        return (
          <div className="">
            <input
              type="email"
              className="form-control"
              id={key}
              name={key}
              value={formData[key] || ""}
              onChange={onChange}
              required={fieldData.required}
            />
          </div>
        );
      case "BooleanField":
        return (
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id={key}
              name={key}
              checked={formData[key] === "true" ? true : false || false}
              onChange={(e) => onChangeCheckbox(e, key)}
              required={fieldData.required}
            />
            <br />
          </div>
        );
      case "ModelChoiceField":
        return (
          <div className="">
            {
              <Select
                name={key}
                id={key}
                closeMenuOnSelect={true}
                components={animatedComponents}
                isMulti={false}
                value={formData[key] || ""}
                onChange={handleChangeSelectOption}
                options={fieldData.options?.map(
                  ([id, label]: [string, string]) => ({
                    value: id,
                    label: label,
                  })
                )}
              />
            }
          </div>
        );
      case "DateField":
        return (
          <div className="">
            <input
              type="date"
              className="form-control"
              id={key}
              name={key}
              value={formData[key] || ""}
              onChange={onChange}
              required={fieldData.required}
            />
          </div>
        );
      case "DateTimeField":
        return (
          <div className="">
            <input
              type="datetime-local"
              className="form-control"
              id={key}
              name={key}
              value={formData[key] || ""}
              onChange={onChange}
              required={fieldData.required}
            />
          </div>
        );
      case "FileField":
        return (
          <div className="">
            <input
              type="file"
              className="form-control-file"
              id={key}
              name={key}
              onChange={onChange}
              required={fieldData.required}
            />
          </div>
        );
      case "IntegerField":
        return (
          <div className="">
            <input
              type="number"
              className="form-control"
              id={key}
              name={key}
              value={formData[key] || ""}
              onChange={onChange}
              required={fieldData.required}
            />
          </div>
        );
      case "ModelMultipleChoiceField":
        return (
          <div className="">
            {
              <Select
                name={key}
                id={key}
                closeMenuOnSelect={false}
                components={animatedComponents}
                isMulti={true}
                defaultValue={formData[key] || []}
                onChange={handleChangeSelectOption}
                options={fieldData.options?.map(
                  ([id, label]: [string, string]) => ({
                    value: id,
                    label: label,
                  })
                )}
              />
            }
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <Modal
      size="lg"
      show={isViewFormModal}
      onHide={() => onChangeStateViewModal}
      aria-labelledby="example-modal-sizes-title-lg"
      container={document.getElementById("popup-root")}
    >
      <Modal.Header>
        <Modal.Title>Form {title}</Modal.Title>
      </Modal.Header>

      <form onSubmit={onSubmit}>
        <Modal.Body>
          {Object.keys(field).map((key) => {
            const fieldData = field[key];
            // console.log(fieldData);
            return (
              <div key={key} className="form-group">
                <label htmlFor={key}>{fieldData.label}</label>
                <br />
                {getFieldComponent(key, fieldData)}
              </div>
            );
          })}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onChangeStateViewModal}>
            Close
          </Button>
          <Button variant="primary" type="submit">
            Save Changes
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
};

export default ModalForm;
