import { Fragment } from "react";
import ButtonLoader from "../../../components/Loader/ButtonLoader";

export default function PageAuth({
  username,
  password,
  isViewPassword,
  onChangeViewPass,
  onChangeUsername,
  onChangePassword,
  isLoading,
  database,
  selectedDatabase,
  onClickLogin,
  onChangeSelectedDatabase,
}) {
  const ButtonLogin = () => {
    return (
      <button className="btn btn-success" onClick={() => onClickLogin()}>
        Login
      </button>
    );
  };

  return (
    <Fragment>
      <div className="login-content">
        <div className="frame">
          <img src="vessel_image.png" alt="vessel" />
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
              <input
                type="text"
                className="form-control"
                value={username}
                onChange={(e) => onChangeUsername(e.target.value)}
              />
              <span>Password</span>
              <div className="input-group">
                <input
                  type={isViewPassword ? "text" : "password"}
                  className="form-control"
                  value={password}
                  onChange={(e) => onChangePassword(e.target.value)}
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
              <div className="form-group" style={{ marginTop: 5 }}>
                <span>Database</span>
                <select
                  value={selectedDatabase}
                  className="form-control select2"
                  id="simple-select2"
                  onChange={(e) => onChangeSelectedDatabase(e.target.value)}
                >
                  {database.map((value, i) => (
                    <option key={i} value={value.db_code}>
                      {value.company_name}
                    </option>
                  ))}
                </select>
              </div>
              <br />
              {isLoading ? <ButtonLoader /> : <ButtonLogin />}
            </div>

            <a href="/">Forgot Password</a>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
