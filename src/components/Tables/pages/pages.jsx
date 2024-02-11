import { Fragment } from "react";
import { removeUnderscoreAndCapitalize } from "../../../utils/keyUtils";

export default function CrudViewPages({ title, data }) {
  //   console.log(data);
  const keys = Object.keys(data[0]);
  return (
    <Fragment>
      <h2 className="mb-2 page-title">{title}</h2>
      <div className="row my-4">
        <div className="col-md-12">
          <div className="card shadow">
            <div className="card-body">
              <table className="table datatables display" id="dataTable-1">
                <thead>
                  <tr>
                    {keys.map((key, i) => (
                      <th key={i}>{removeUnderscoreAndCapitalize(key)}</th>
                    ))}
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((obj, index) => (
                    <tr key={index}>
                      {Object.values(obj).map((value, i) => (
                        <td key={i}>{value}</td>
                      ))}
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
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
