import { useEffect, useState } from "react";
import PageAuth from "../Page/page";
import { showPopupAlert } from "../../../components/Notification/PopupAlert";
import RequestData from "../../../redux/RequestAPI";
import { setLocalStorageItem } from "../../../utils/LocalStorage";
import { useNavigate } from "react-router-dom";
import { FormData, databases } from "../Model/AuthInterface";
import * as React from "react";
import { AxiosError } from "axios";

const AuthController: React.FC = () => {
  const [isViewPassword, setIsViewPassword] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isLoadingView, setIsLoadingView] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    username: "",
    password: "",
    database: "",
  });
  const [database, setDatabase] = useState<databases[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    getDatabase();
  }, []);

  const getDatabase = async () => {
    setIsLoadingView(true);
    // const resp = await requestData("GET", "db-companies/", null, null);
    try {
      const resp = await RequestData({
        method: "GET",
        url: "db-companies/",
        data: {},
        config: {},
      });
      if (resp.results.length > 0) {
        setFormData((prevState) => ({
          ...prevState,
          database: resp.results[0].db_code, // Menggunakan kategori pertama sebagai nilai default
        }));
      }
      setDatabase(resp.results);
      setIsLoadingView(false);
    } catch (e) {
      setIsLoadingView(false);
      return showPopupAlert(false, "Something is wrong is wrong");
    }
  };

  const toggleViewPassword = () => {
    setIsViewPassword(!isViewPassword);
  };

  const CheckField = () => {
    if (formData.username === "" || formData.password === "") {
      showPopupAlert(false, "Username Or Password Cannot be empty");
      return false; // Mengembalikan false jika bidang tidak valid
    }
    return true;
  };

  const handleChangeForm = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Lakukan sesuatu dengan data formulir, misalnya, kirim ke backend
    setIsLoading(true);
    const isValid = CheckField(); // Memeriksa apakah bidang valid
    if (!isValid) {
      setIsLoading(false); // Menghentikan proses jika bidang tidak valid
      return; // Keluar dari fungsi
    }
    try {
      const respons = await RequestData({
        method: "POST",
        url: "login/",
        data: { username: formData.username, password: formData.password },
        config: {},
      });
      setLocalStorageItem([
        { access_token: respons.access },
        { menu: respons.authorities.menu },
        { refresh_token: respons.refresh },
        { database: formData.database },
      ]);
      // resetFormData();
      navigate("/");
      return showPopupAlert(true, "Success Login");
    } catch (error) {
      resetFormData();
      if (
        (error as AxiosError).response &&
        (error as AxiosError).response?.status &&
        (error as AxiosError).response?.status === 401
      ) {
        setIsLoading(false);
        return showPopupAlert(false, "Password or Username is wrong");
      }
      setIsLoading(false);
      return showPopupAlert(false, (error as Error).message);
    }
    // Lakukan reset formulir setelah pengiriman
  };

  const resetFormData = () => {
    setFormData({
      username: "",
      password: "",
      database: "", // Reset juga nilai select option
    });
  };

  return (
    <PageAuth
      formData={formData}
      isViewPassword={isViewPassword}
      isLoading={isLoading}
      database={database}
      handleChangeForm={handleChangeForm}
      handleSubmit={handleSubmit}
      isLoadingView={isLoadingView}
      onChangeViewPass={toggleViewPassword}
    />
  );
};

export default AuthController;
