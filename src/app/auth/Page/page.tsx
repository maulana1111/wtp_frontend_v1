import { Fragment } from "react";
import ButtonLoader from "../../../components/Loader/ButtonLoader";
import PageLoader from "../../../components/Loader/PageLoader";
import * as React from "react";
import { PropsAuth } from "../Model/AuthInterface";

const PageAuth: React.FC<PropsAuth> = ({
  isViewPassword,
  isLoading,
  database,
  formData,
  isLoadingView,
  onChangeViewPass,
  handleChangeForm,
  handleSubmit,
}) => {

  const ButtonLogin = () => {
    return (
      <button className="btn btn-success" type="submit">
        Login
      </button>
    );
  };
  
  return (
    <div>
      <PageLoader cond={isLoadingView} />
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
            <form onSubmit={handleSubmit}>
              <div className="form-login">
                <span>Username</span>
                <input
                  type="text"
                  className="form-control"
                  value={formData.username}
                  onChange={(e) => handleChangeForm(e)}
                  name="username"
                />
                <span>Password</span>
                <div className="input-group">
                  <input
                    type={isViewPassword ? "text" : "password"}
                    className="form-control"
                    value={formData.password}
                    onChange={(e) => handleChangeForm(e)}
                    name="password"
                  />
                  <button
                    className="input-group-text"
                    id="basic-addon2"
                    style={{ backgroundColor: "#32D292" }}
                    onClick={onChangeViewPass}
                    type="button"
                  >
                    <i className="fa fa-eye" id="togglePassword1"></i>
                  </button>
                </div>
                <div className="form-group" style={{ marginTop: 5 }}>
                  <span>Database</span>
                  <select
                    name="database"
                    value={formData.database}
                    className="form-control select2"
                    id="simple-select2"
                    onChange={(e) => handleChangeForm(e)}
                  >
                    {/* <option value="testing">Testing</option> */}
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
            </form>
            <a href="/">Forgot Password</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageAuth;
