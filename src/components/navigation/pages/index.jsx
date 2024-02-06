import { Fragment } from "react";
import Asside from "./Asside";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

export default function IndexNavigation() {
  return (
    <Fragment>
      <Navbar />
      <Asside />
      <Outlet />
    </Fragment>
  );
}
