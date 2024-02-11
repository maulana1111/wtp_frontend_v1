import MenuView from "../page/page";
import data from "../data.json"

export default function ControllerMenu() {
  const context = {
    title: "Menu View",
    data: data
  };

  return <MenuView context={context} />;
}
