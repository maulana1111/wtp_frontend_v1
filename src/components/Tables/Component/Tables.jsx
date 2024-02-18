import { Fragment, useEffect } from "react";
import { removeUnderscoreAndCapitalize } from "../../../utils/keyUtils";
import $ from "jquery";
import "datatables.net";

const Tables = ({ data }) => {
  useEffect(() => {
    $("#dataTables-1").DataTable({
      autoWidth: true,
      lengthMenu: [
        [5, 10, 15, -1],
        [5, 10, 15, "All"],
      ],
    });

    // Membersihkan setelah komponen tidak lagi diperlukan
    return () => {
      $("#dataTables-1").DataTable().destroy();
    };
  }, []);
  const keys = Object.keys(data[0]);

  const renderValue = (value, key) => {
    if (key === "id") return null;
    if (key === "is_active") {
      return value ? "true" : "false";
    }
    if (Array.isArray(value)) {
      return value.map((item, index) => (
        <span key={index}>{item.name}</span>
      ));
    } else {
      return value;
    }
  };

  return (
    <Fragment>
      <table id="dataTables-1" className="display table datatables">
        <thead>
          <tr>
            {keys.map((key, i) => (
              key !== "id" && <th key={i}>{removeUnderscoreAndCapitalize(key)}</th>
            ))}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((obj, index) => (
            <tr key={index}>
              {Object.entries(obj).map(
                ([key, value], i) =>
                  key !== "id" && <td key={i}>{renderValue(value, key)}</td>
              )}
              <td className="d-flex flex-row">
                <button className="btn btn-warning" type="button">
                  <i className="fa fa-pencil" aria-hidden="true"></i>
                </button>
                &nbsp;
                <button className="btn btn-danger" type="button">
                  <i className="fa fa-trash" aria-hidden="true"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default Tables;
