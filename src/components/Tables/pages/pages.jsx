import { Fragment } from "react";
import Tables from "../Component/Tables";
import EmptyTable from "../Component/EmptyTable";
import LoadingView from "../../Loader/LoadingView";

export default function CrudViewPages({ isLoading, title, data }) {
  return (
    <Fragment>
      <div className="d-flex justify-content-between">
        <h2 className="mb-2 page-title">{title}</h2>
        <h2 className="mb-2">
          <button className="btn btn-info">Add</button>
        </h2>
      </div>
      <div className="row my-4">
        <div className="col-md-12">
          <div className="card shadow">
            <div className="card-body">
              {isLoading ? (
                <LoadingView />
              ) : data && data.length !== 0 ? (
                <Tables data={data} />
              ) : (
                <EmptyTable />
              )}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
