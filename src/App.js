import "./App.css";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import AuthController from "./app/auth/Controller/AuthController";
import ControllerNavigation from "./components/navigation/Controller/ControllerNavigation";
import ControllerDashboard from "./app/modul/dashboard/Controller/ControllerDashboard";
import ControllerMenu from "./app/modul/menu_modul/Controller/MenuController";
import ControllerSystemUser from "./app/modul/system_user/Controller/SystemUserController";
import { useEffect } from "react";
import {
  getLocalStorageItem,
  removeLocalStorageItem,
} from "./utils/LocalStorage";
import PageNotFound from "./components/Pages/Pages Not Found/page";

function App() {
  const navigate = useNavigate();
  const pathname = useLocation();

  useEffect(() => {
    // Periksa Local Storage untuk token
    const token = getLocalStorageItem("access_token");
    // Jika token tidak ada, arahkan pengguna ke halaman login

    if (!token) {
      // Jika pengguna mencoba mengakses halaman yang memerlukan autentikasi dan tidak ada token, arahkan ke halaman login
      navigate("/login");
    }

    if (token && pathname.pathname === "/login") {
      navigate("/");
    }
  }, [navigate]);

  const LogoutSystem = () => {
    const navigate = useNavigate();
    removeLocalStorageItem([
      "menu",
      "refresh_token",
      "access_token",
      "database",
    ]);
    navigate("/login");
    return null;
  };

  return (
    <Routes>
      <Route path="login" element={<AuthController />} />
      <Route path="logout" element={<LogoutSystem />} />
      <Route path="/" element={<ControllerNavigation />}>
        <Route index element={<ControllerDashboard />} />
        <Route path="menu" element={<ControllerMenu />} />
        <Route path="system-user" element={<ControllerSystemUser />} />
      </Route>

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
