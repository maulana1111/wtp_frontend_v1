import { useEffect, useState } from "react";
import * as React from "react";
import PageSystemUser from "../View/Page";
import { UsersDataProps } from "../Model/Interface";
import RequestData from "../../../../redux/RequestAPI";
import { showPopupAlert } from "../../../../components/Notification/PopupAlert";
import { UserFields } from "../Model/Fields";

const ControllerSystemUser: React.FC = () => {
  const Title = "System User";
  const [users, setUsers] = useState<UsersDataProps[]>([]);
  const [formData, setFormData] = useState<UsersDataProps>();
  const [isLoading, setIsloading] = useState<boolean>(false);

  useEffect(() => {
    getDataUser();
    getDataGroups();
  }, []);

  const getDataGroups = async () => {
    setIsloading(true);
    try {
      const respons = await RequestData({
        method: "GET_RESTRICT",
        url: "groups/",
        data: {},
        config: {},
      });

      // Ambil nilai opsi dari data yang diperoleh dari backend
      const options = respons.results.map((group: any) => group.name); // Anggap data berisi objek grup dengan properti 'name'

      // Perbarui opsi untuk field 'group' dalam UserFields
      UserFields.map((field) => {
        if (field.id === "group" && field.type === "select") {
          return { ...field, options: options };
        }
        return field;
      });

      setIsloading(false);
    } catch (error) {
      setIsloading(false);
      return showPopupAlert(false, "Something is wrong is wrong");
    }
  };

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

  const handleEditDeleteButton = async (param: any, id: any) => {
    setIsloading(true);
    try {
      const respons = await RequestData({
        method: param === "update" ? "PATCH" : "DELETE",
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

  return (
    <PageSystemUser
      title={Title}
      isLoading={isLoading}
      data={users}
      field={UserFields}
      onClickAction={(param: any, id: any) => handleEditDeleteButton(param, id)}
    />
  );
};

export default ControllerSystemUser;
