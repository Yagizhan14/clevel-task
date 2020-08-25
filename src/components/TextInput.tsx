import * as React from "react";
import { Box } from "./Box";
import { Label } from "./Label";
import { IconButton } from "./IconButton";

interface ITextInputProps {
  id: string;
  label: string;
  name: string;
  onChange: (value: string) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  errorMessage?: string;
  helperText?: string;
  hasError?: boolean;
  placeholder?: string;
  value?: string;
  required?: boolean;
  type?: "password" | "number";
}

export const TextInput: React.FC<ITextInputProps> = ({
  id,
  label,
  onChange,
  onBlur,
  name,
  errorMessage,
  disabled,
  hasError,
  helperText,
  placeholder,
  value,
  required,
  type,
}) => {
  const [visible, setVisible] = React.useState<boolean>(false);

  return (
    <Box className="textinput">
      <Label htmlFor={id} disabled={disabled} required={required}>
        <Box marginBottom={2} display="inline-block" position="relative">
          {label}
        </Box>
      </Label>
      <Box position="relative">
        <input
          className={`textinput__input ${
            hasError ? "textinput__input--error" : ""
          }`}
          name={name}
          aria-invalid={disabled}
          id={id}
          disabled={disabled}
          placeholder={placeholder}
          value={value}
          type={
            type === "password" && !visible
              ? "password"
              : type !== "password"
              ? type
              : undefined
          }
          onChange={(e) => onChange(e.target.value)}
          onBlur={onBlur}
        />
        {type === "password" && !!value && (
          <Box position="absolute" top="4px" right="3px">
            <IconButton
              size="sm"
              bgColor="transparent"
              icon={visible ? "EyeOff" : "Eye"}
              onClick={() => setVisible((ps) => !ps)}
            />
          </Box>
        )}
      </Box>
      <Box
        marginTop={2}
        style={{
          color: hasError ? "var(--color-red)" : "var(--color-label-disabled)",
        }}
      >
        {hasError ? errorMessage : helperText}
      </Box>
    </Box>
  );
};
