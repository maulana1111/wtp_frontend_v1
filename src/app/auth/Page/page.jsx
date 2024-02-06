import { ChangeEvent, Fragment } from "react";

export default function PageAuth({ isViewPassword, onChangeViewPass }) {
  return (
    <Fragment>
      <div className="login-content">
        <div className="frame">
          <img src="vessel_image.png" />
          <div className="frame-login">
            <div className="logo">
              <div className="right">
                <img
                  src="logo_pancaran.png"
                  alt="logo"
                  style={{ width: 50, height: 50 }}
                />
                <span>
                  <b>Web Transaction Pancaran</b>
                </span>
                <span>Log In to your account</span>
              </div>
            </div>
            <div className="form-login">
              <span>Username</span>
              <input type="text" className="form-control" />
              <span>Password</span>
              <div className="input-group">
                <input
                  type={isViewPassword ? "text" : "password"}
                  className="form-control"
                />
                <button
                  className="input-group-text"
                  id="basic-addon2"
                  style={{ backgroundColor: "#32D292" }}
                  onClick={onChangeViewPass}
                >
                  <i className="fa fa-eye" id="togglePassword1"></i>
                </button>
              </div>
              <span>Database</span>
              <select className="form-control">
                <option value="">select</option>
              </select>
              <br />
              <button className="btn btn-success">Login</button>
            </div>

            <a href="#">Forgot Password</a>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
