import { Fragment } from "react";
import CrudViewPages from "../../../../components/Tables/pages/pages";

export default function MenuView({ context }) {
  return (
    <Fragment>
      {<CrudViewPages title={context.title} data={context.data} />}
    </Fragment>
  );
}
