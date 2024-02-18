import { Fragment } from "react";
import * as React from "react";
import CrudViewPages from "../../../../components/Tables/pages/pages";
import { Props } from "../Model/Interface";

const PageSystemUser: React.FC<Props> = ({
  title,
  data,
  isLoading,
  field,
  onClickAction,
}) => {
  return (
    <Fragment>
      {
        <CrudViewPages
          title={title}
          data={data}
          isLoading={isLoading}
          field={field}
          onClickAction={(param: any, id: any) => onClickAction(param, id)}
        />
      }
    </Fragment>
  );
};

export default PageSystemUser;
