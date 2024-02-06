import { useState } from "react";
import PageAuth from "../Page/page";

function AuthController() {
  const [isViewPassword, setIsViewPassword] = useState(false);

  const toggleViewPassword = () => {
    setIsViewPassword(!isViewPassword);
  };

  const authProps = {
    toggleViewPassword,
    isViewPassword,
  };

  return (
    <PageAuth
      onChangeViewPass={toggleViewPassword}
      isViewPassword={isViewPassword}
    />
  );
}

export default AuthController;
