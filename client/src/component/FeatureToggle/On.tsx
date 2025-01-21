import React, { ReactNode } from "react";

type OnProps = {
  isToggleActive?: boolean;
  children: ReactNode;
};

export const On = (props: OnProps): JSX.Element => {
  return (
    <React.Fragment>
        {props.isToggleActive === true && props.children}
    </React.Fragment>
  );
};
