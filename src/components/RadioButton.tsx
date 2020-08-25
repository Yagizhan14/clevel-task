import * as React from "react";
import { Label } from "./Label";
import { Box } from "./Box";

interface IRadioButtonProps {
  id: string;
  name: string;
  label: string;
  value: string;
  onChange: (checked: boolean) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  checked?: boolean;
  disabled?: boolean;
}

export const RadioButton: React.FC<IRadioButtonProps> = ({
  id,
  label,
  name,
  onChange,
  onBlur,
  value,
  checked,
  disabled,
}) => {
  return (
    <Box className="radio-button">
      <input
        name={name}
        id={id}
        type="radio"
        className="radio-button__input"
        disabled={disabled}
        value={value}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        onBlur={onBlur}
      />
      <Label disabled={disabled} htmlFor={id}>
        <span className="radio-button__button" />
        <span className="radio-button__label">{label}</span>
      </Label>
    </Box>
  );
};
