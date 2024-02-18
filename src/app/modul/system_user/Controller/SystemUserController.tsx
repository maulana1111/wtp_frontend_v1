import { useEffect, useState } from "react";
import * as React from "react";
import PageSystemUser from "../View/Page";
import { UsersDataProps } from "../Model/Interface";
import RequestData from "../../../../redux/RequestAPI";
import { showPopupAlert } from "../../../../components/Notification/PopupAlert";

const ControllerSystemUser: React.FC = () => {
  const Title = "System User";
  const [users, setUsers] = useState<UsersDataProps[]>([]);
  const [isLoading, setIsloading] = useState<boolean>(false);

  useEffect(() => {
    getDataUser();
  }, []);

  const getDataUser = async () => {
    setIsloading(true);
    try {
      const respons = await RequestData({
        method: "GET_RESTRICT",
        url: "users/",
        data: {},
        config: {},
      });
      setUsers(respons.results);
      setIsloading(false);
    } catch (error) {
      setIsloading(false);
      return showPopupAlert(false, "Something is wrong is wrong");
    }
  };

  return <PageSystemUser title={Title} isLoading={isLoading} data={users} />;
};

export default ControllerSystemUser;
