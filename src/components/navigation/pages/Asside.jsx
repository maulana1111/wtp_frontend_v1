import { Fragment } from "react";

export default function Asside() {
  return (
    <Fragment>
      <aside
        class="sidebar-left border-right bg-white shadow"
        id="leftSidebar"
        data-simplebar
      >
        <a
          href="#"
          class="btn collapseSidebar toggle-btn d-lg-none text-muted ml-2 mt-3"
          data-toggle="toggle"
        >
          <i class="fe fe-x">
            <span class="sr-only"></span>
          </i>
        </a>
        <nav class="vertnav navbar navbar-light">
          <div class="w-100 mb-4 d-flex">
            <a
              class="navbar-brand mx-auto mt-2 flex-fill text-center"
              href="./index.html"
            >
              <img
                src="Logo-pancaran-wtp.png"
                alt="logo"
                style={{ width: 113, height: 42 }}
              />
            </a>
          </div>
          <p class="text-muted nav-heading mt-4 mb-1">
            <span>Admin Modul</span>
          </p>

          <li class="nav-item dropdown">
            <a
              href="#contact"
              data-toggle="collapse"
              aria-expanded="false"
              class="dropdown-toggle nav-link"
            >
              <i class="fa fa-cog" aria-hidden="true"></i>
              <span class="ml-3 item-text">Setting</span>
            </a>
            <ul class="collapse list-unstyled pl-4 w-100" id="contact">
              <a class="nav-link pl-3" href="./contacts-list.html">
                <i class="fa fa-th-list" aria-hidden="true"></i>
                <span class="ml-1">Menu</span>
              </a>
              <a class="nav-link pl-3" href="./contacts-grid.html">
                <i class="fa fa-users" aria-hidden="true"></i>
                <span class="ml-1">Role</span>
              </a>
              <a class="nav-link pl-3" href="./contacts-grid.html">
                <i class="fa fa-user-plus" aria-hidden="true"></i>
                <span class="ml-1">System User</span>
              </a>
            </ul>
          </li>

          <li class="nav-item dropdown">
            <a
              href="#contact"
              data-toggle="collapse"
              aria-expanded="false"
              class="dropdown-toggle nav-link"
            >
              <i class="fa fa-file" aria-hidden="true"></i>
              <span class="ml-3 item-text">Master</span>
            </a>
            <ul class="collapse list-unstyled pl-4 w-100" id="contact">
              <a class="nav-link pl-3" href="./contacts-list.html">
                <i class="fa fa-book" aria-hidden="true"></i>
                <span class="ml-1">Document Type</span>
              </a>
              <a class="nav-link pl-3" href="./contacts-grid.html">
                <i class="fa fa-book" aria-hidden="true"></i>
                <span class="ml-1">Form Field</span>
              </a>
              <a class="nav-link pl-3" href="./contacts-grid.html">
                <i class="fa fa-shopping-basket" aria-hidden="true"></i>
                <span class="ml-1">Transaction Type</span>
              </a>
              <a class="nav-link pl-3" href="./contacts-grid.html">
                <i class="fa fa-sliders" aria-hidden="true"></i>
                <span class="ml-1">Mapping Field - Type</span>
              </a>
            </ul>
          </li>

          <p class="text-muted nav-heading mt-4 mb-1">
            <span>Dashboard</span>
          </p>
          <a
            href="#dashboard"
            data-toggle="collapse"
            aria-expanded="false"
            class="dropdown-toggle nav-link"
          >
            <i class="fe fe-home fe-16"></i>
            <span class="ml-3 item-text">Dashboard</span>
            <span class="sr-only">(current)</span>
          </a>

          <p class="text-muted nav-heading mt-4 mb-1">
            <span>Purchasing</span>
          </p>

          <li class="nav-item dropdown">
            <a
              href="#contact"
              data-toggle="collapse"
              aria-expanded="false"
              class="dropdown-toggle nav-link"
            >
              <i class="fa fa-shopping-bag" aria-hidden="true"></i>
              <span class="ml-3 item-text">Purchase Request</span>
            </a>
            <ul class="collapse list-unstyled pl-4 w-100" id="contact">
              <a class="nav-link pl-3" href="./contacts-list.html">
                <i class="fa fa-shopping-bag" aria-hidden="true"></i>
                <span class="ml-1">General Service</span>
              </a>
              <a class="nav-link pl-3" href="./contacts-grid.html">
                <i class="fa fa-shopping-bag" aria-hidden="true"></i>
                <span class="ml-1">Document Vessel</span>
              </a>
            </ul>
          </li>

          <li class="nav-item dropdown">
            <a
              href="#contact"
              data-toggle="collapse"
              aria-expanded="false"
              class="dropdown-toggle nav-link"
            >
              <i class="fa fa-book" aria-hidden="true"></i>
              <span class="ml-3 item-text">Goods Receipt PO</span>
            </a>
            <ul class="collapse list-unstyled pl-4 w-100" id="contact">
              <a class="nav-link pl-3" href="./contacts-list.html">
                <i class="fa fa-shopping-bag" aria-hidden="true"></i>
                <span class="ml-1">General Service</span>
              </a>
              <a class="nav-link pl-3" href="./contacts-grid.html">
                <i class="fa fa-shopping-bag" aria-hidden="true"></i>
                <span class="ml-1">Document Vessel</span>
              </a>
            </ul>
          </li>
        </nav>
      </aside>
    </Fragment>
  );
}
