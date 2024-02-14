import { useEffect, useState } from "react";
import PageAuth from "../Page/page";
import { showPopupAlert } from "../../../components/Notification/PopupAlert";
// import { fetchSuccessLogin } from "../../../redux/actions";
// import { useSelector } from "react-redux";
import requestData from "../../../redux/thunks";
import { setLocalStorageItem } from "../../../utils/LocalStorage";
import { useNavigate } from "react-router-dom";
import PageLoader from "../../../components/Loader/PageLoader";

function AuthController() {
  const [isViewPassword, setIsViewPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingView, setIsLoadingView] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [selectedDatabase, setSelectedDatabase] = useState("");
  const [database, setDatabase] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoadingView(true);
    getDatabase();
    setIsLoadingView(false);
  }, []);

  const getDatabase = async () => {
    const resp = await requestData("GET", "db-companies/", null, null);
    setDatabase(resp.results);
  };

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
        null
      );
      setLocalStorageItem([
        { access_token: respons.access },
        { menu: respons.authorities.menu },
        { refresh_token: respons.refresh },
        { database: selectedDatabase },
      ]);
      navigate("/");
      return showPopupAlert(true, "Success Login");
    } catch (error) {
      console.log(error);
      if (
        error.response &&
        error.response.status &&
        error.response.status === 401
      ) {
        setIsLoading(false);
        return showPopupAlert(false, "Password or Username is wrong");
      }
      setIsLoading(false);
      return showPopupAlert(false, error.message);
    }
  };

  const CheckField = () => {
    if (username === "" || password === "") {
      showPopupAlert(false, "Username Or Password Cannot be empty");
      return false; // Mengembalikan false jika bidang tidak valid
    }
    return true;
  };

  return isLoadingView ? (
    <PageLoader />
  ) : (
    <PageAuth
      username={username}
      password={password}
      onChangeUsername={(e) => setUsername(e)}
      onChangePassword={(e) => setPassword(e)}
      onChangeViewPass={toggleViewPassword}
      isViewPassword={isViewPassword}
      isLoading={isLoading}
      database={database}
      selectedDatabase={selectedDatabase}
      onClickLogin={() => doLogin()}
      onChangeSelectedDatabase={(e) => {
        console.log(e);
        setSelectedDatabase(e);
      }}
    />
  );
}

export default AuthController;
