import { Fragment } from "react";
import * as React from "react";
import CrudViewPages from "../../../../components/Tables/pages/pages";
import { Props } from "../Model/Interface";

const PageSystemUser: React.FC<Props> = ({ title, data, isLoading }) => {
  return (
    <Fragment>
      {<CrudViewPages title={title} data={data} isLoading={isLoading} />}
    </Fragment>
  );
};

export default PageSystemUser;
