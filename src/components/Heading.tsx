import * as React from "react";

interface IHeadingProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  align?: "left" | "center" | "right" | "justify";
  children: React.ReactNode;
  color?: "white" | "black" | "gray" | "blue" | "red";
  overflow?: "normal" | "breakWord";
  size?: "sm" | "md" | "lg";
  truncate?: boolean;
}

export const Heading: React.FC<IHeadingProps> = ({
  children,
  level,
  ...props
}) => {
  switch (level) {
    case 1:
      return <h1 className={setClassNames(props)}>{children}</h1>;
    case 2:
      return <h2 className={setClassNames(props)}>{children}</h2>;
    default:
    case 3:
      return <h3 className={setClassNames(props)}>{children}</h3>;
    case 4:
      return <h4 className={setClassNames(props)}>{children}</h4>;
    case 5:
      return <h5 className={setClassNames(props)}>{children}</h5>;
    case 6:
      return <h6 className={setClassNames(props)}>{children}</h6>;
  }
};

const setClassNames = (props: Partial<IHeadingProps>) => {
  const classNames: string[] = [];

  classNames.push("heading");

  if (!!props.align && props.align !== "left") {
    classNames.push(`heading--${props.align}`);
  }

  if (!!props.color && props.color !== "black") {
    classNames.push(`heading--${props.color}`);
  }

  if (!!props.overflow && props.overflow !== "breakWord") {
    classNames.push(`heading--${props.overflow}`);
  }

  if (!!props.size && props.size !== "lg") {
    classNames.push(`heading--${props.size}`);
  }

  if (!!props.truncate) {
    classNames.push("heading--truncate");
  }

  return classNames.join(" ");
};
