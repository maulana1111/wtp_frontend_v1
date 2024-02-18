import * as React from "react";
import { ModalProps } from "../interface/interfaceForm";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
// Define interface for modal field

// Modal component
const ModalForm: React.FC<ModalProps> = ({
  modalFields,
  // initialData,
  formData,
  onChange,
  onImageChange,
  onSubmit,
  isViewFormModal,
  onChangeStateViewModal,
}) => {
  return (
    <Modal
      size="lg"
      show={isViewFormModal}
      onHide={() => onChangeStateViewModal}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>

      <form onSubmit={onSubmit}>
        <Modal.Body>
          <div className="modal">
            {modalFields.map((field) => (
              <div className="form-group" key={field.id}>
                {field.type === "radio" && (
                  <div className="form-check">
                    <label>{field.label}</label>
                    {field.options?.map((option) => (
                      <label key={option}>
                        <input
                          type="radio"
                          id={field.id}
                          name={field.id}
                          value={option}
                          checked={formData[field.id] === option}
                          onChange={onChange}
                        />
                        {option}
                      </label>
                    ))}
                  </div>
                )}
                {field.type === "select" && (
                  <div>
                    <label>{field.label}</label>
                    <select
                      id={field.id}
                      onChange={onChange}
                      value={formData[field.id] as string}
                    >
                      <option value="">Select {field.label}</option>
                      {field.options?.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
                {field.type === "hidden" && (
                  <input
                    type="hidden"
                    id={field.id}
                    value="hidden value"
                    onChange={onChange}
                  />
                )}
                {field.type === "image" && (
                  <div>
                    <label>{field.label}</label>
                    <input
                      type="file"
                      accept="image/*"
                      id={field.id}
                      onChange={onImageChange}
                    />
                    {formData[field.id] && (
                      <img
                        src={formData[field.id] as string}
                        alt="Uploaded"
                        style={{ maxWidth: "100px" }}
                      />
                    )}
                  </div>
                )}
                {["text", "email"].includes(field.type) && (
                  <div>
                    <label>{field.label}</label>
                    <input
                      type={field.type}
                      id={field.id}
                      value={formData[field.id] as string}
                      onChange={onChange}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
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
