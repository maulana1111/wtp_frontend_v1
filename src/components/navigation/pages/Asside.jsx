import { Fragment } from "react";
import Menu from "../Component/Menu";

export default function Asside({ menus }) {
  return (
    <Fragment>
      <aside
        className="sidebar-left border-right bg-white shadow"
        id="leftSidebar"
        data-simplebar
      >
        <a
          href=""
          className="btn collapseSidebar toggle-btn d-lg-none text-muted ml-2 mt-3"
          data-toggle="toggle"
        >
          <i className="fe fe-x">
            <span className="sr-only"></span>
          </i>
        </a>
        <nav className="vertnav navbar navbar-light">
          {/* LOGO */}
          <div className="w-100 mb-4 d-flex">
            <a
              className="navbar-brand mx-auto mt-2 flex-fill text-center"
              href="./index.html"
            >
              <div className="row" style={{ marginLeft: 2 }}>
                <img
                  src="Logo_pancaran.png"
                  alt="logo"
                  style={{ width: 55, height: 55, marginTop: 8 }}
                />
                <div
                  className="txt-logo "
                  style={{ textAlign: "left", marginLeft: 5, display: "grid" }}
                >
                  <span style={{ fontSize: 30, fontWeight: 700 }}>WTP</span>
                  <span
                    style={{ fontSize: 14, fontWeight: 500, color: "#0A146C" }}
                  >
                    Web Transaction Pancaran
                  </span>
                </div>
              </div>
            </a>
          </div>
          {/* LOGO */}
          <Menu items={menus} />
        </nav>
      </aside>
    </Fragment>
  );
}
