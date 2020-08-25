import * as React from "react";
import { Label } from "./Label";
import { Icon } from "./Icon";
import { Box } from "./Box";

interface ICheckboxProps {
  id: string;
  checked?: boolean;
  disabled?: boolean;
  errorMessage?: string;
  hasError?: boolean;
  value?: string;
  label: string;
  name: string;
  onChange: (checked: boolean) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

export const Checkbox: React.FC<ICheckboxProps> = React.memo(
  ({
    id,
    label,
    name,
    checked,
    disabled,
    errorMessage,
    hasError,
    value,
    onChange,
    onBlur,
  }) => {
    return (
      <Box>
        <Box className="checkbox" display="flex" alignItems="center">
          <label className="checkbox__wrapper" htmlFor={id}>
            <Box className="checkbox__input-wrapper" position="relative">
              <input
                id={id}
                name={name}
                type="checkbox"
                checked={checked}
                value={value}
                disabled={disabled}
                onChange={(e) => onChange(e.target.checked)}
                onBlur={onBlur}
                className="checkbox__input margin-0 position-absolute"
              />
              <Box
                className={`checkbox__button  ${
                  checked && "checkbox__button--checked"
                } ${hasError && "checkbox__button--error"}
                ${disabled && "checkbox__button--disabled"}
              `}
                display="flex"
                justifyContent="center"
                alignItems="center"
                rounding={2}
              >
                <Box display={checked ? "block" : "none"}>
                  <Icon
                    accessibilityLabel="checked"
                    icon="Check"
                    color="#fff"
                    size={16}
                  />
                </Box>
              </Box>
            </Box>
          </label>
          <Label disabled={disabled} htmlFor={id}>
            <Box marginLeft={1}>{label}</Box>
          </Label>
        </Box>
        {!!hasError && (
          <div className="checkbox__error-text margin-top-2 display-block">
            <span>{errorMessage}</span>
          </div>
        )}
      </Box>
    );
  },
);
