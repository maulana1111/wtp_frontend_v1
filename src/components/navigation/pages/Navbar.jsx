import {Fragment} from "react";

export default function Navbar() {
  return (
    <Fragment>
      <nav className="topnav navbar navbar-light">
        <button
            type="button"
            className="navbar-toggler text-muted mt-2 p-0 mr-3 collapseSidebar"
        >
          <i className="fe fe-menu navbar-toggler-icon"></i>
        </button>
        <ul className="nav">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle text-muted pr-0"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span className="avatar avatar-sm mt-2">
                <img
                  src="assets/assets/avatars/face-1.jpg"
                  alt="..."
                  className="avatar-img rounded-circle"
                />
              </span>
            </a>
            <div
              className="dropdown-menu dropdown-menu-right"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <a className="dropdown-item" href="#">
                Profile
              </a>
              <a className="dropdown-item" href="/logout">
                Logout
              </a>
            </div>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
}
