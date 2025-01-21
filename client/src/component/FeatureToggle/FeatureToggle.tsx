import React, { ReactElement, ReactNode, useEffect, useState } from 'react';
import { cloneElement } from 'react';
import { isActive } from '../../utils/feature-manager/FeatureManager';
import { Off } from './Off';
import { On } from './On';

type FeatureToggleProps = {
  name: string;
  children: JSX.Element | JSX.Element[];
};

const allowedChildComponentType = [On, Off];

const FeatureToggle = (props: FeatureToggleProps): JSX.Element => {
  const [isToggleActive, setIsToggleActive] = useState<boolean>();

  useEffect(() => {
    (async () => {
      setIsToggleActive(await isActive(props.name));
    })();
  }, []);

  const childrenToRender = React.Children.toArray(props.children)
    .map(toJSXElement)
    .filter(componentTypeAllowed)
    .map((child) => cloneWithIsActiveProp(child, isToggleActive));

  return (
    <React.Fragment>
      {childrenToRender}
    </React.Fragment>
  );
};

const toJSXElement = (child: ReactNode) => child as JSX.Element;

const componentTypeAllowed = (child: JSX.Element): boolean =>
  allowedChildComponentType.includes(child.type);

const cloneWithIsActiveProp = (child: JSX.Element, isToggleActive?: boolean): JSX.Element =>
  cloneElement(child as ReactElement, {
    isToggleActive,
  });

export { FeatureToggle, On, Off };
