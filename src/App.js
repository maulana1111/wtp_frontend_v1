import "./App.css";
import { Route, Routes } from "react-router-dom";
import AuthController from "./app/auth/Controller/AuthController";
import ControllerNavigation from "./components/navigation/Controller/ControllerNavigation";
import ControllerDashboard from "./app/modul/dashboard/Controller/ControllerDashboard";
import ControllerMenu from "./app/modul/menu_modul/Controller/MenuController";

function App() {
  return (
    <Routes>
      <Route path="login" element={<AuthController />} />
      <Route path="/" element={<ControllerNavigation />}>
        <Route index element={<ControllerDashboard />} />
        <Route path="/menu" element={<ControllerMenu />} />
      </Route>
    </Routes>
  );
}

export default App;
