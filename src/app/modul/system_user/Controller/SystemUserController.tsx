import { useEffect, useState } from "react";
import * as React from "react";
// import PageSystemUser from "../View/Page";
import { UsersDataProps } from "../Model/Interface";
import RequestData from "../../../../redux/RequestAPI";
import { showPopupAlert } from "../../../../components/Notification/PopupAlert";
import CrudViewPages from "../../../../components/Tables/pages/pages";
// import { UserFields } from "../Model/Fields";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/reducers";
import { data } from "jquery";
const API_NEXT_URL: string = process.env.REACT_APP_NEXT_URL || "";

const ControllerSystemUser: React.FC = () => {
  const reduxData = useSelector(
    (state: RootState) => state.data.passing_id_param
  );
  const Title = "System User";
  const slug = "system-user";
  const [users, setUsers] = useState<UsersDataProps[]>([]);
  const [formData, setFormData] = useState<any>({});
  const [isLoading, setIsloading] = useState<boolean>(false);
  const [fields, setFields] = useState<any>({});
  const [counter, setCounter] = useState<number>(0);
  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    setIsActive(true);
    return () => {
      setIsActive(false); // Set controller tidak aktif ketika komponen di-unmount
    };
  }, []);

  useEffect(() => {
    // Lakukan sesuatu ketika ada perubahan pada reduxData hanya jika controller aktif
    if (isActive) {
      // Lakukan sesuatu dengan reduxData
      console.log("Redux data changed:", reduxData);
      if (reduxData.action === "delete") {
        deleteData(reduxData.id);
      }
    }
  }, [reduxData, isActive]);

  useEffect(() => {
    const getDataMenusBySlug = async () => {
      setIsloading(true);
      try {
        await RequestData({
          method: "GET_RESTRICT",
          url: `${API_NEXT_URL}menus/`,
          data: { slug: slug },
          config: {},
        })
          .then(async (data: any) => {
            await getData(data.results[0].crud_endpoint);
            await getDataFields(data.results[0].form_endpoint);
          })
          .finally(() => {
            setIsloading(false);
          });
      } catch (error) {
        setIsloading(false);
        return showPopupAlert(false, "Something is wrong is wrong " + error);
      }
    };
    getDataMenusBySlug();
  }, [counter]);

  const getDataFields = async (param: any, id?: number) => {
    try {
      const respons = await RequestData({
        method: "GET_RESTRICT",
        url: id ? `${param}/${id}` : param,
        data: {},
        config: {},
      });
      setFields(respons);
    } catch (error) {
      setIsloading(false);
      return showPopupAlert(false, "Something is wrong is wrong");
    }
  };

  const getData = async (param: any) => {
    try {
      const respons = await RequestData({
        method: "GET_RESTRICT",
        url: param,
        data: {},
        config: {},
      });
      setUsers(respons.results);
    } catch (error) {
      setIsloading(false);
      return showPopupAlert(false, "Something is wrong is wrong");
    }
  };

  const deleteData = async (id: number) => {
    await RequestData({
      method: "DELETE",
      url: `${API_NEXT_URL}users/${id}`,
      data: {},
      config: {},
    })
      .then(() => {
        setIsloading(false);
        let cont = counter + 1;
        setCounter(cont);
        showPopupAlert(true, "Success Delete");
      })
      .catch((errors: any) => {
        setIsloading(false);
        showPopupAlert(false, errors);
      });
  };

  const handlePassing = async (props?: any) => {
    setIsloading(true);

    props.is_active = props.is_active === "true" ? true : false;

    const { groups, ...rest } = props;
    const data = {
      ...rest,
      group_ids: groups,
    };

    await RequestData({
      method: data.id && data.id !== "" ? "PATCH" : "POST",
      url: `${API_NEXT_URL}users/`,
      data: data,
      config: {},
    })
      .then(() => {
        setIsloading(false);
        let cont = counter + 1;
        setCounter(cont);
        showPopupAlert(true, "Success");
      })
      .catch((errors: any) => {
        setIsloading(false);
        showPopupAlert(false, errors);
      });
  };

  return (
    <CrudViewPages
      title={Title}
      data={users}
      isLoading={isLoading}
      fields={fields}
      formData={formData}
      onSubmit={(data: any) => handlePassing(data)}
    />
  );
};

export default ControllerSystemUser;
