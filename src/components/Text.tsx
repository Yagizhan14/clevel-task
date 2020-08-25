import * as React from "react";
import { Box } from "./Box";

interface ITextProps {
  align?: "left" | "center" | "right" | "justify";
  children: React.ReactNode;
  color?: "white" | "black" | "gray" | "blue" | "red";
  inline?: boolean;
  italic?: boolean;
  overflow?: "normal" | "breakWord" | "noWrap";
  size?: "sm" | "md" | "lg";
  truncate?: boolean;
  weight?: "bold" | "normal";
}

export const Text: React.FC<ITextProps> = ({ children, inline, ...props }) => {
  return (
    <Box
      className={setClassNames(props)}
      display={inline ? "inline-block" : "block"}
    >
      {children}
    </Box>
  );
};

const setClassNames = (props: Partial<ITextProps>) => {
  const classNames: string[] = [];

  classNames.push("text");

  if (!!props.align && props.align !== "left") {
    classNames.push(`text--${props.align}`);
  }

  if (!!props.color && props.color !== "black") {
    classNames.push(`text--${props.color}`);
  }

  if (!!props.italic) {
    classNames.push("text--italic");
  }

  if (!!props.overflow && props.overflow !== "breakWord") {
    classNames.push(`text--${props.overflow}`);
  }

  if (!!props.size && props.size !== "lg") {
    classNames.push(`text--${props.size}`);
  }

  if (!!props.truncate) {
    classNames.push("text--truncate");
  }

  if (!!props.weight && props.weight !== "normal") {
    classNames.push("text--bold");
  }

  return classNames.join(" ");
};
