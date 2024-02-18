import * as React from "react";
import { ModalField, ModalProps } from "../interface/interfaceForm";
// Define interface for modal field

// Modal component
const ModalForm: React.FC<ModalProps> = ({
  modalFields,
  initialData,
  formData,
  onChange,
  onImageChange,
  onSubmit,
}) => {
  return (
    <div className="modal">
      <form onSubmit={onSubmit}>
        {modalFields.map((field) => {
          if (field.type === "radio") {
            return (
              <div key={field.id}>
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
            );
          } else if (field.type === "select") {
            return (
              <div key={field.id}>
                <label>{field.label}</label>
                <select
                  id={field.id}
                  onChange={onChange}
                  value={formData[field.id]}
                >
                  <option value="">Select {field.label}</option>
                  {field.options?.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            );
          } else if (field.type === "hidden") {
            return (
              <input
                key={field.id}
                type="hidden"
                id={field.id}
                value="hidden value"
                onChange={onChange}
              />
            );
          } else if (field.type === "image") {
            return (
              <div key={field.id}>
                <label>{field.label}</label>
                <input
                  type="file"
                  accept="image/*"
                  id={field.id}
                  onChange={onImageChange}
                />
                {formData[field.id] && (
                  <img
                    src={formData[field.id]}
                    alt="Uploaded"
                    style={{ maxWidth: "100px" }}
                  />
                )}
              </div>
            );
          } else {
            return (
              <div key={field.id}>
                <label>{field.label}</label>
                <input
                  type={field.type}
                  id={field.id}
                  value={formData[field.id]}
                  onChange={onChange}
                />
              </div>
            );
          }
        })}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ModalForm;
