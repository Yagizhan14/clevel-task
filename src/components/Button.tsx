import * as React from "react";
import { Box } from "./Box";

interface IButtonProps {
  text: string;
  accessibilityControls?: string;
  accessibilityExpanded?: boolean;
  accessibilityHaspopup?: boolean;
  accessibilityLabel?: string;
  bgColor?: "blue" | "gray" | "red" | "white" | "yellow" | "transparent";
  circle?: boolean;
  disabled?: boolean;
  iconEnd?: React.ReactNode;
  iconStart?: React.ReactNode;
  inline?: boolean;
  // name?:string;
  selected?: boolean;
  size?: "sm" | "md" | "lg";
  // textColor?: "blue" | "red" | "darkGray" | "white";
  type?: "submit" | "button" | "reset";
  children?: never;
  onClick?: () => void;
}

export const Button: React.FC<IButtonProps> = ({
  text,
  accessibilityControls,
  accessibilityExpanded,
  accessibilityHaspopup,
  accessibilityLabel,
  disabled,
  onClick,
  type,
  iconEnd,
  iconStart,
  ...props
}) => {
  return (
    <button
      aria-label={accessibilityLabel}
      aria-controls={accessibilityControls}
      aria-expanded={accessibilityExpanded}
      aria-haspopup={accessibilityHaspopup}
      disabled={disabled}
      type={type}
      className={setClassNames(props)}
      onClick={onClick}
    >
      <Box display="flex" alignItems="center" justifyContent="center">
        <Box marginRight={2}>{iconStart}</Box>
        <span>{text}</span>
        <Box marginLeft={2}>{iconEnd}</Box>
      </Box>
    </button>
  );
};

const setClassNames = (props: Partial<IButtonProps>) => {
  const classNames: string[] = [];

  classNames.push("btn", "border-none", "cursor-pointer");

  if (!!props.inline) {
    classNames.push("display-inline-block");
  } else {
    classNames.push("display-block", "fit");
  }

  if (!!props.size) {
    switch (props.size) {
      case "sm":
        classNames.push("btn--sm", "paddingX-3", "paddingY-1");
        break;
      case "md":
        classNames.push("btn--md", "paddingX-3", "paddingY-2");
        break;
      default:
      case "lg":
        classNames.push("btn--lg", "paddingX-4", "paddingY-3");
        break;
    }
  } else {
    classNames.push("paddingX-3", "paddingY-2");
  }

  if (!!props.bgColor) {
    classNames.push(`btn--${props.bgColor}`);
  } else {
    classNames.push("btn-primary");
  }

  if (!!props.selected) {
    classNames.push("btn--selected");
  }

  if (!!props.circle) {
    classNames.push("btn--circle rounding-circle");
  } else {
    classNames.push("rounding-1");
  }

  return classNames.join(" ");
};
