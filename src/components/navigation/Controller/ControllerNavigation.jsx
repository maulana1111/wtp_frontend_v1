import { useEffect, useState } from "react";
import IndexNavigation from "../pages";
import { getLocalStorageItem } from "../../../utils/LocalStorage";

export default function ControllerNavigation() {
  const [menu, setMenu] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const menus = getLocalStorageItem("menu");
    setMenu(menus);
    setIsLoading(false);
  }, []);

  return isLoading ? <h1>Loading</h1> : <IndexNavigation menu={menu} />;
}
