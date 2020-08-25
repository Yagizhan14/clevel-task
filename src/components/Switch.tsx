import * as React from "react";
import { Box } from "./Box";

interface ISwitchProps {
  id: string;
  onChange: (switched: boolean) => void;
  disabled?: boolean;
  name?: string;
  switched?: boolean;
}

export const Switch: React.FC<ISwitchProps> = ({
  id,
  onChange,
  disabled,
  name,
  switched,
}) => {
  return (
    <Box
      className={`switch ${switched ? "switch--active" : ""} ${
        disabled ? "switch--disabled" : ""
      }`}
      position="relative"
      display="block"
      rounding="pill"
    >
      <input
        type="checkbox"
        className="switch__input"
        checked={switched}
        name={name}
        id={id}
        disabled={disabled}
        onChange={(e) => onChange(e.target.checked)}
      />
      <Box
        className="switch__button"
        position="absolute"
        width="28px"
        height="28px"
        rounding="circle"
      />
    </Box>
  );
};
