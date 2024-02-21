import { Fragment } from "react";

export default function PageNotFound() {
  return (
    <div>
      <div className="align-items-center h-100 d-flex w-50 mx-auto">
        <div className="mx-auto text-center">
          <h1
            className="display-1 m-0 font-weight-bolder text-muted"
            style={{fontSize: 80}}
          >
            404
          </h1>
          <h1 className="mb-1 text-muted font-weight-bold">OOPS!</h1>
          <h6 className="mb-3 text-muted">The page could not be found.</h6>
          <a href="/" className="btn btn-lg btn-primary px-5">
            Back to Dashboard
          </a>
        </div>
      </div>
    </div>
  );
}
