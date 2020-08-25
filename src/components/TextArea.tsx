import * as React from "react";
import { Label } from "./Label";
import { Box } from "./Box";

interface ITextAreaProps {
  id: string;
  label: string;
  name: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  hasError?: boolean;
  errorMessage?: string;
  helperText?: string;
  placeholder?: string;
  rows?: number;
  value?: string;
  required?: boolean;
}

export const TextArea: React.FC<ITextAreaProps> = ({
  id,
  label,
  name,
  onChange,
  disabled,
  errorMessage,
  hasError,
  helperText,
  placeholder,
  rows,
  value,
  required,
}) => {
  return (
    <Box className="textarea">
      <Label htmlFor={id} disabled={disabled} required={required}>
        <Box marginBottom={2} display="inline-block" position="relative">
          {label}
        </Box>
      </Label>
      <textarea
        className={`textarea__input ${
          hasError ? "textarea__input--error" : ""
        }`}
        aria-invalid={disabled}
        id={id}
        disabled={disabled}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={rows ? rows : 3}
      />
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
