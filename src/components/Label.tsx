import * as React from "react";

interface ILabelProps {
  htmlFor: string;
  children?: React.ReactNode;
  disabled?: boolean;
  required?: boolean;
}

export const Label: React.FC<ILabelProps> = React.memo(
  ({ htmlFor, children, disabled, required }) => {
    return (
      <label
        className={`label ${disabled ? "label--disabled" : ""} ${
          required ? "label--required" : ""
        }`}
        htmlFor={htmlFor}
      >
        {children}
      </label>
    );
  },
);
