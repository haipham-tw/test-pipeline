import React, { ReactNode } from "react";

type OffProps = {
  isToggleActive?: boolean;
  children: ReactNode;
};

export const Off = (props: OffProps): JSX.Element => {
  return (
    <React.Fragment>
        {props.isToggleActive === false && props.children}
    </React.Fragment>
  );
};
