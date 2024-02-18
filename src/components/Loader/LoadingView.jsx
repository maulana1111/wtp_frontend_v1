import { Fragment } from "react";

const LoadingView = () => {
  const styles = {
    width: "3rem",
    height: "3rem",
  };
  return (
    <Fragment>
      <div className="align-items-center h-100 d-flex w-50 mx-auto">
        <div className="mx-auto text-center">
          <div
            class="spinner-border mr-3 text-info"
            style={styles}
            role="status"
          >
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default LoadingView;
