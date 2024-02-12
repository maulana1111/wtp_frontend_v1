import { useState } from "react";
import PageAuth from "../Page/page";
import { showPopupAlert } from "../../../components/Notification/PopupAlert";
import { fetchSuccessLogin } from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import requestData from "../../../redux/thunks";

function AuthController() {
  const dispatch = useDispatch();
  const [isViewPassword, setIsViewPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(
    useSelector((state) => state.loading)
  );
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const toggleViewPassword = () => {
    setIsViewPassword(!isViewPassword);
  };

  const doLogin = async () => {
    setIsLoading(true);
    const isValid = CheckField(); // Memeriksa apakah bidang valid
    if (!isValid) {
      setIsLoading(false); // Menghentikan proses jika bidang tidak valid
      return; // Keluar dari fungsi
    }
    try {
      const respons = await requestData(
        "POST",
        "login/",
        { username: username, password: password },
        null,
        fetchSuccessLogin()
      );

      console.log(respons);
      console.log(respons.refresh);
    } catch (error) {
        console.log(error);
      if (error.response.status && error.response.status === 401) {
        setIsLoading(false);
        return showPopupAlert(false, "Password or Username is wrong");
      }
      setIsLoading(false);
      return showPopupAlert(false, error);
    }
    setIsLoading(false);
  };

  const CheckField = () => {
    if (username === "" || password === "") {
      showPopupAlert(false, "Username Or Password Cannot be empty");
      return false; // Mengembalikan false jika bidang tidak valid
    }
    return true;
  };

  return (
    <PageAuth
      username={username}
      password={password}
      onChangeUsername={(e) => setUsername(e)}
      onChangePassword={(e) => setPassword(e)}
      onChangeViewPass={toggleViewPassword}
      isViewPassword={isViewPassword}
      isLoading={isLoading}
      onClickLogin={() => doLogin()}
    />
  );
}

export default AuthController;
