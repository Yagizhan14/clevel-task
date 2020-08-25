import * as React from "react";
import * as Icons from "./icons";

export type IconNames = keyof typeof Icons;

interface IIconProps {
  accessibilityLabel: string;
  icon: IconNames;
  color?: string;
  fill?: string;
  children?: never;
  inline?: boolean;
  size?: number | string;
}

export const Icon: React.FC<IIconProps> = ({
  accessibilityLabel,
  color,
  icon,
  fill,
  size,
  inline,
}) => {
  const element = React.createElement(Icons[icon], {
    "aria-label": accessibilityLabel,
    stroke: color,
    fill: fill ? fill : "none",
    display: inline ? "inline-block" : "block",
    height: size ? size : 16,
    width: size ? size : 16,
  });

  return element;
};
