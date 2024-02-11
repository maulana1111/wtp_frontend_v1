import { Fragment } from "react";

export default function Asside() {
  return (
    <Fragment>
      <aside
        className="sidebar-left border-right bg-white shadow"
        id="leftSidebar"
        data-simplebar
      >
        <a
          href="#"
          className="btn collapseSidebar toggle-btn d-lg-none text-muted ml-2 mt-3"
          data-toggle="toggle"
        >
          <i className="fe fe-x">
            <span className="sr-only"></span>
          </i>
        </a>
        <nav className="vertnav navbar navbar-light">
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
                  style={{ textAlign: "left", marginLeft: 5, display: 'grid' }}
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

          <p className="text-muted nav-heading mt-4 mb-1">
            <span>Admin Modul</span>
          </p>

          <ul className="navbar-nav flex-fill w-100 mb-2">
            <li className="nav-item dropdown">
              <a
                href="#setting"
                data-toggle="collapse"
                aria-expanded="false"
                className="dropdown-toggle nav-link"
              >
                <i className="fa fa-cog" aria-hidden="true"></i>
                <span className="ml-3 item-text">Setting</span>
              </a>
              <ul className="collapse list-unstyled pl-4 w-100" id="setting">
                <a className="nav-link pl-3" href="./contacts-list.html">
                  <i className="fa fa-th-list" aria-hidden="true"></i>
                  <span className="ml-1">Menu</span>
                </a>
                <a className="nav-link pl-3" href="./contacts-grid.html">
                  <i className="fa fa-users" aria-hidden="true"></i>
                  <span className="ml-1">Role</span>
                </a>
                <a className="nav-link pl-3" href="./contacts-grid.html">
                  <i className="fa fa-user-plus" aria-hidden="true"></i>
                  <span className="ml-1">System User</span>
                </a>
              </ul>
            </li>
          </ul>

          <ul className="navbar-nav flex-fill w-100 mb-2">
            <li className="nav-item dropdown">
              <a
                href="#master"
                data-toggle="collapse"
                aria-expanded="false"
                className="dropdown-toggle nav-link"
              >
                <i className="fa fa-file" aria-hidden="true"></i>
                <span className="ml-3 item-text">Master</span>
              </a>
              <ul className="collapse list-unstyled pl-4 w-100" id="master">
                <a className="nav-link pl-3" href="./contacts-list.html">
                  <i className="fa fa-book" aria-hidden="true"></i>
                  <span className="ml-1">Document Type</span>
                </a>
                <a className="nav-link pl-3" href="./contacts-grid.html">
                  <i className="fa fa-book" aria-hidden="true"></i>
                  <span className="ml-1">Form Field</span>
                </a>
                <a className="nav-link pl-3" href="./contacts-grid.html">
                  <i className="fa fa-shopping-basket" aria-hidden="true"></i>
                  <span className="ml-1">Transaction Type</span>
                </a>
                <a className="nav-link pl-3" href="./contacts-grid.html">
                  <i className="fa fa-sliders" aria-hidden="true"></i>
                  <span className="ml-1">Mapping Field - Type</span>
                </a>
              </ul>
            </li>
          </ul>

          <p className="text-muted nav-heading mt-4 mb-1">
            <span>Dashboard</span>
          </p>

          <ul className="navbar-nav flex-fill w-100 mb-2">
            <li className="nav-item w-100">
              <a href="#dashboard" className="nav-link">
                <i className="fa fa-home fe-16"></i>
                <span className="ml-3 item-text">Dashboard</span>
              </a>
            </li>
          </ul>

          <p className="text-muted nav-heading mt-4 mb-1">
            <span>Purchasing</span>
          </p>

          <ul className="navbar-nav flex-fill w-100 mb-2">
            <li className="nav-item dropdown">
              <a
                href="#Purchasing"
                data-toggle="collapse"
                aria-expanded="false"
                className="dropdown-toggle nav-link"
              >
                <i className="fa fa-shopping-bag" aria-hidden="true"></i>
                <span className="ml-3 item-text">Purchase Request</span>
              </a>
              <ul className="collapse list-unstyled pl-4 w-100" id="Purchasing">
                <a className="nav-link pl-3" href="./contacts-list.html">
                  <i className="fa fa-shopping-bag" aria-hidden="true"></i>
                  <span className="ml-1">General Service</span>
                </a>
                <a className="nav-link pl-3" href="./contacts-grid.html">
                  <i className="fa fa-shopping-bag" aria-hidden="true"></i>
                  <span className="ml-1">Document Vessel</span>
                </a>
              </ul>
            </li>
          </ul>

          <ul className="navbar-nav flex-fill w-100 mb-2">
            <li className="nav-item dropdown">
              <a
                href="#grpo"
                data-toggle="collapse"
                aria-expanded="false"
                className="dropdown-toggle nav-link"
              >
                <i className="fa fa-book" aria-hidden="true"></i>
                <span className="ml-3 item-text">Goods Receipt PO</span>
              </a>
              <ul className="collapse list-unstyled pl-4 w-100" id="grpo">
                <a className="nav-link pl-3" href="./contacts-list.html">
                  <i className="fa fa-shopping-bag" aria-hidden="true"></i>
                  <span className="ml-1">General Service</span>
                </a>
                <a className="nav-link pl-3" href="./contacts-grid.html">
                  <i className="fa fa-shopping-bag" aria-hidden="true"></i>
                  <span className="ml-1">Document Vessel</span>
                </a>
              </ul>
            </li>
          </ul>
        </nav>
      </aside>
    </Fragment>
  );
}
