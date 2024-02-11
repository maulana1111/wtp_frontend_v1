import { Fragment } from "react";
import Asside from "./Asside";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

export default function IndexNavigation() {
  return (
    <Fragment>
      <Navbar />
      <Asside />
      <main role="main" className="main-content">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-12">
              <Outlet />
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
}
