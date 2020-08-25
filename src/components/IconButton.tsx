import * as React from "react";
import { Box } from "./Box";
import { Icon, IconNames } from "./Icon";

interface IIconButtonProps {
  bgColor: "transparent" | "white" | "red" | "black" | "blue" | "yellow";
  icon: IconNames;
  accessibilityControls?: string;
  accessibilityExpanded?: boolean;
  accessibilityHaspopup?: boolean;
  accessibilityLabel?: string;
  disabled?: boolean;
  iconColor?: "darkGray" | "gray" | "red" | "white" | "black";
  padding?: 1 | 2 | 3 | 4 | 5;
  selected?: boolean;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  notify?: number;
  onClick: () => void;
}

export const IconButton: React.FC<IIconButtonProps> = ({
  bgColor,
  icon,
  accessibilityControls,
  accessibilityExpanded,
  accessibilityHaspopup,
  accessibilityLabel,
  disabled,
  iconColor,
  padding,
  selected,
  size,
  notify,
  onClick,
}) => {
  return (
    <button
      className={`icon-button display-block cursor-pointer border-none ${
        padding ? `padding-${padding}` : "padding-0"
      } icon-button--${bgColor} ${selected ? "icon-button--selected" : ""}`}
      aria-label={accessibilityLabel}
      aria-expanded={accessibilityExpanded}
      aria-haspopup={accessibilityHaspopup}
      aria-controls={accessibilityControls}
      disabled={disabled}
      onClick={onClick}
    >
      <Box
        width={setContainerWidth(size)}
        height={setContainerHeight(size)}
        justifyContent="center"
        alignItems="center"
        display="flex"
        rounding="circle"
        position="relative"
      >
        {!!notify && notify > 0 && (
          <Box
            position="absolute"
            top
            right
            rounding={notify > 9 ? "pill" : "circle"}
            bgColor="red"
            alignItems="center"
            justifyContent="center"
            style={{ color: "white", fontSize: "1rem" }}
            padding={1}
            display="block"
            width={20}
            height={20}
          >
            {notify > 9 ? "9+" : notify}
          </Box>
        )}
        <Icon
          color={iconColor ? iconColor : "gray"}
          size={setIconSize(size)}
          accessibilityLabel=""
          icon={icon}
        />
      </Box>
    </button>
  );
};

const setIconSize = (size: IIconButtonProps["size"]) => {
  switch (size) {
    case "xs":
      return 12;
    case "sm":
      return 16;
    default:
    case "md":
      return 18;
    case "lg":
      return 20;
    case "xl":
      return 24;
  }
};

const setContainerWidth = (size: IIconButtonProps["size"]) => {
  switch (size) {
    case "xs":
      return 24;
    case "sm":
      return 32;
    default:
    case "md":
      return 40;
    case "lg":
      return 48;
    case "xl":
      return 56;
  }
};

const setContainerHeight = (size: IIconButtonProps["size"]) => {
  switch (size) {
    case "xs":
      return 24;
    case "sm":
      return 32;
    default:
    case "md":
      return 40;
    case "lg":
      return 48;
    case "xl":
      return 56;
  }
};
