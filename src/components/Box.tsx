import * as React from "react";

export const Box = React.forwardRef((props: IBoxProps, ref: any) => {
  return (
    <div
      className={setClassNames(props)
        ?.join(" ")
        .concat(` ${!!props.className ? props.className : ""}`)}
      style={{ ...setInlineStyles(props), ...props.style }}
      onBlur={props.onBlur}
      onFocus={props.onFocus}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
      ref={ref}
    >
      {props.children}
    </div>
  );
});

interface IBoxProps {
  alignContent?:
    | "start"
    | "end"
    | "center"
    | "between"
    | "around"
    | "evenly"
    | "stretch";
  alignItems?: "start" | "end" | "center" | "baseline" | "stretch";
  alignSelf?: "auto" | "start" | "end" | "center" | "baseline" | "stretch";
  borderSize?: "sm" | "md" | "lg" | "none";
  column?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  children?: React.ReactNode;
  className?: string;
  bgColor?: "blue" | "white" | "black" | "red" | "yellow" | "transparent";
  style?: React.CSSProperties;
  direction?: "row" | "column";
  smDirection?: "row" | "column";
  mdDirection?: "row" | "column";
  lgDirection?: "row" | "column";
  xlDirection?: "row" | "column";
  display?: "none" | "flex" | "block" | "inline-block" | "visually-hidden";
  smDisplay?: "none" | "flex" | "block" | "inline-block" | "visually-hidden";
  mdDisplay?: "none" | "flex" | "block" | "inline-block" | "visually-hidden";
  lgDisplay?: "none" | "flex" | "block" | "inline-block" | "visually-hidden";
  xlDisplay?: "none" | "flex" | "block" | "inline-block" | "visually-hidden";
  fit?: boolean;
  flex?: "grow" | "shrink" | "none";
  flexBasis?: number | string; // use numbers for pixels and strings for percentages
  height?: number | string; // use numbers for pixels and strings for percentages
  width?: number | string; // use numbers for pixels and strings for percentages
  justifyContent?: "start" | "end" | "center" | "between" | "around" | "evenly";
  top?: boolean | number | string; // use numbers for pixels and strings for percentages
  left?: boolean | number | string; // use numbers for pixels and strings for percentages
  right?: boolean | number | string; // use numbers for pixels and strings for percentages
  bottom?: boolean | number | string; // use numbers for pixels and strings for percentages
  zIndex?: number;
  margin?:
    | -12
    | -11
    | -10
    | -9
    | -8
    | -7
    | -6
    | -5
    | -4
    | -3
    | -2
    | -1
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | "auto"
    | number
    | string; // use number for arbitrary value and string for percentages
  smMargin?:
    | -12
    | -11
    | -10
    | -9
    | -8
    | -7
    | -6
    | -5
    | -4
    | -3
    | -2
    | -1
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | "auto"
    | number
    | string; // use number for arbitrary value and string for percentages
  mdMargin?:
    | -12
    | -11
    | -10
    | -9
    | -8
    | -7
    | -6
    | -5
    | -4
    | -3
    | -2
    | -1
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | "auto"
    | number
    | string; // use number for arbitrary value and string for percentages
  lgMargin?:
    | -12
    | -11
    | -10
    | -9
    | -8
    | -7
    | -6
    | -5
    | -4
    | -3
    | -2
    | -1
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | "auto"
    | number
    | string; // use number for arbitrary value and string for percentages
  xlMargin?:
    | -12
    | -11
    | -10
    | -9
    | -8
    | -7
    | -6
    | -5
    | -4
    | -3
    | -2
    | -1
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | "auto"
    | number
    | string; // use number for arbitrary value and string for percentages
  marginBottom?:
    | -12
    | -11
    | -10
    | -9
    | -8
    | -7
    | -6
    | -5
    | -4
    | -3
    | -2
    | -1
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | "auto"
    | number
    | string; // use number for arbitrary value and string for percentages
  smMarginBottom?:
    | -12
    | -11
    | -10
    | -9
    | -8
    | -7
    | -6
    | -5
    | -4
    | -3
    | -2
    | -1
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | "auto"
    | number
    | string; // use number for arbitrary value and string for percentages
  mdMarginBottom?:
    | -12
    | -11
    | -10
    | -9
    | -8
    | -7
    | -6
    | -5
    | -4
    | -3
    | -2
    | -1
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | "auto"
    | number
    | string; // use number for arbitrary value and string for percentages
  lgMarginBottom?:
    | -12
    | -11
    | -10
    | -9
    | -8
    | -7
    | -6
    | -5
    | -4
    | -3
    | -2
    | -1
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | "auto"
    | number
    | string; // use number for arbitrary value and string for percentages
  xlMarginBottom?:
    | -12
    | -11
    | -10
    | -9
    | -8
    | -7
    | -6
    | -5
    | -4
    | -3
    | -2
    | -1
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | "auto"
    | number
    | string; // use number for arbitrary value and string for percentages
  marginLeft?:
    | -12
    | -11
    | -10
    | -9
    | -8
    | -7
    | -6
    | -5
    | -4
    | -3
    | -2
    | -1
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | "auto"
    | number
    | string; // use number for arbitrary value and string for percentages
  smMarginLeft?:
    | -12
    | -11
    | -10
    | -9
    | -8
    | -7
    | -6
    | -5
    | -4
    | -3
    | -2
    | -1
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | "auto"
    | number
    | string; // use number for arbitrary value and string for percentages
  mdMarginLeft?:
    | -12
    | -11
    | -10
    | -9
    | -8
    | -7
    | -6
    | -5
    | -4
    | -3
    | -2
    | -1
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | "auto"
    | number
    | string; // use number for arbitrary value and string for percentages
  lgMarginLeft?:
    | -12
    | -11
    | -10
    | -9
    | -8
    | -7
    | -6
    | -5
    | -4
    | -3
    | -2
    | -1
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | "auto"
    | number
    | string; // use number for arbitrary value and string for percentages
  xlMarginLeft?:
    | -12
    | -11
    | -10
    | -9
    | -8
    | -7
    | -6
    | -5
    | -4
    | -3
    | -2
    | -1
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | "auto"
    | number
    | string; // use number for arbitrary value and string for percentages
  marginRight?:
    | -12
    | -11
    | -10
    | -9
    | -8
    | -7
    | -6
    | -5
    | -4
    | -3
    | -2
    | -1
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | "auto"
    | number
    | string; // use number for arbitrary value and string for percentages
  smMarginRight?:
    | -12
    | -11
    | -10
    | -9
    | -8
    | -7
    | -6
    | -5
    | -4
    | -3
    | -2
    | -1
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | "auto"
    | number
    | string; // use number for arbitrary value and string for percentages
  mdMarginRight?:
    | -12
    | -11
    | -10
    | -9
    | -8
    | -7
    | -6
    | -5
    | -4
    | -3
    | -2
    | -1
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | "auto"
    | number
    | string; // use number for arbitrary value and string for percentages
  lgMarginRight?:
    | -12
    | -11
    | -10
    | -9
    | -8
    | -7
    | -6
    | -5
    | -4
    | -3
    | -2
    | -1
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | "auto"
    | number
    | string; // use number for arbitrary value and string for percentages
  xlMarginRight?:
    | -12
    | -11
    | -10
    | -9
    | -8
    | -7
    | -6
    | -5
    | -4
    | -3
    | -2
    | -1
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | "auto"
    | number
    | string; // use number for arbitrary value and string for percentages
  marginTop?:
    | -12
    | -11
    | -10
    | -9
    | -8
    | -7
    | -6
    | -5
    | -4
    | -3
    | -2
    | -1
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | "auto"
    | number
    | string; // use number for arbitrary value and string for percentages
  smMarginTop?:
    | -12
    | -11
    | -10
    | -9
    | -8
    | -7
    | -6
    | -5
    | -4
    | -3
    | -2
    | -1
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | "auto"
    | number
    | string; // use number for arbitrary value and string for percentages
  mdMarginTop?:
    | -12
    | -11
    | -10
    | -9
    | -8
    | -7
    | -6
    | -5
    | -4
    | -3
    | -2
    | -1
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | "auto"
    | number
    | string; // use number for arbitrary value and string for percentages
  lgMarginTop?:
    | -12
    | -11
    | -10
    | -9
    | -8
    | -7
    | -6
    | -5
    | -4
    | -3
    | -2
    | -1
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | "auto"
    | number
    | string; // use number for arbitrary value and string for percentages
  xlMarginTop?:
    | -12
    | -11
    | -10
    | -9
    | -8
    | -7
    | -6
    | -5
    | -4
    | -3
    | -2
    | -1
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | "auto"
    | number
    | string; // use number for arbitrary value and string for percentages
  marginX?:
    | -12
    | -11
    | -10
    | -9
    | -8
    | -7
    | -6
    | -5
    | -4
    | -3
    | -2
    | -1
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | "auto"
    | number
    | string; // use number for arbitrary value and string for percentages
  smMarginX?:
    | -12
    | -11
    | -10
    | -9
    | -8
    | -7
    | -6
    | -5
    | -4
    | -3
    | -2
    | -1
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | "auto"
    | number
    | string; // use number for arbitrary value and string for percentages
  mdMarginX?:
    | -12
    | -11
    | -10
    | -9
    | -8
    | -7
    | -6
    | -5
    | -4
    | -3
    | -2
    | -1
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | "auto"
    | number
    | string; // use number for arbitrary value and string for percentages
  lgMarginX?:
    | -12
    | -11
    | -10
    | -9
    | -8
    | -7
    | -6
    | -5
    | -4
    | -3
    | -2
    | -1
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | "auto"
    | number
    | string; // use number for arbitrary value and string for percentages
  xlMarginX?:
    | -12
    | -11
    | -10
    | -9
    | -8
    | -7
    | -6
    | -5
    | -4
    | -3
    | -2
    | -1
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | "auto"
    | number
    | string; // use number for arbitrary value and string for percentages
  marginY?:
    | -12
    | -11
    | -10
    | -9
    | -8
    | -7
    | -6
    | -5
    | -4
    | -3
    | -2
    | -1
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | "auto"
    | number
    | string; // use number for arbitrary value and string for percentages
  smMarginY?:
    | -12
    | -11
    | -10
    | -9
    | -8
    | -7
    | -6
    | -5
    | -4
    | -3
    | -2
    | -1
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | "auto"
    | number
    | string; // use number for arbitrary value and string for percentages
  mdMarginY?:
    | -12
    | -11
    | -10
    | -9
    | -8
    | -7
    | -6
    | -5
    | -4
    | -3
    | -2
    | -1
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | "auto"
    | number
    | string; // use number for arbitrary value and string for percentages
  lgMarginY?:
    | -12
    | -11
    | -10
    | -9
    | -8
    | -7
    | -6
    | -5
    | -4
    | -3
    | -2
    | -1
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | "auto"
    | number
    | string; // use number for arbitrary value and string for percentages
  xlMarginY?:
    | -12
    | -11
    | -10
    | -9
    | -8
    | -7
    | -6
    | -5
    | -4
    | -3
    | -2
    | -1
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | "auto"
    | number
    | string; // use number for arbitrary value and string for percentages
  minHeight?: number | string;
  maxHeight?: number | string;
  minWidth?: number | string;
  maxWidth?: number | string;
  opacity?: number;
  overflow?: "visible" | "hidden" | "scroll" | "scrollX" | "scrollY" | "auto";
  padding?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | number | string; // use number for arbitrary value and string for percentages
  smPadding?:
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | number
    | string; // use number for arbitrary value and string for percentages
  mdPadding?:
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | number
    | string; // use number for arbitrary value and string for percentages
  lgPadding?:
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | number
    | string; // use number for arbitrary value and string for percentages
  xlPadding?:
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | number
    | string; // use number for arbitrary value and string for percentages
  paddingBottom?:
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | number
    | string; // use number for arbitrary value and string for percentages
  smPaddingBottom?:
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | number
    | string; // use number for arbitrary value and string for percentages
  mdPaddingBottom?:
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | number
    | string; // use number for arbitrary value and string for percentages
  lgPaddingBottom?:
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | number
    | string; // use number for arbitrary value and string for percentages
  xlPaddingBottom?:
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | number
    | string; // use number for arbitrary value and string for percentages
  paddingLeft?:
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | number
    | string; // use number for arbitrary value and string for percentages
  smPaddingLeft?:
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | number
    | string; // use number for arbitrary value and string for percentages
  mdPaddingLeft?:
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | number
    | string; // use number for arbitrary value and string for percentages
  lgPaddingLeft?:
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | number
    | string; // use number for arbitrary value and string for percentages
  xlPaddingLeft?:
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | number
    | string; // use number for arbitrary value and string for percentages
  paddingRight?:
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | number
    | string; // use number for arbitrary value and string for percentages
  smPaddingRight?:
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | number
    | string; // use number for arbitrary value and string for percentages
  mdPaddingRight?:
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | number
    | string; // use number for arbitrary value and string for percentages
  lgPaddingRight?:
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | number
    | string; // use number for arbitrary value and string for percentages
  xlPaddingRight?:
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | number
    | string; // use number for arbitrary value and string for percentages
  paddingTop?:
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | number
    | string; // use number for arbitrary value and string for percentages
  smPaddingTop?:
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | number
    | string; // use number for arbitrary value and string for percentages
  mdPaddingTop?:
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | number
    | string; // use number for arbitrary value and string for percentages
  lgPaddingTop?:
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | number
    | string; // use number for arbitrary value and string for percentages
  xlPaddingTop?:
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | number
    | string; // use number for arbitrary value and string for percentages
  paddingX?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | number | string; // use number for arbitrary value and string for percentages
  smPaddingX?:
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | number
    | string; // use number for arbitrary value and string for percentages
  mdPaddingX?:
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | number
    | string; // use number for arbitrary value and string for percentages
  lgPaddingX?:
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | number
    | string; // use number for arbitrary value and string for percentages
  xlPaddingX?:
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | number
    | string; // use number for arbitrary value and string for percentages
  paddingY?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | number | string; // use number for arbitrary value and string for percentages
  smPaddingY?:
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | number
    | string; // use number for arbitrary value and string for percentages
  mdPaddingY?:
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | number
    | string; // use number for arbitrary value and string for percentages
  lgPaddingY?:
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | number
    | string; // use number for arbitrary value and string for percentages
  xlPaddingY?:
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | number
    | string; // use number for arbitrary value and string for percentages
  position?: "sticky" | "absolute" | "relative" | "fixed";
  role?: string;
  ref?: React.RefObject<any>;
  rounding?: "pill" | "circle" | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
  wrap?: boolean; // true = flexWrap:"wrap" false = flexWrap:"no-wrap"
  onBlur?: () => void;
  onFocus?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const setClassNames = (props: IBoxProps) => {
  const classNames: string[] = [];

  if (!!props.alignContent) {
    classNames.push(`align-content-${props.alignContent}`);
  }

  if (!!props.alignItems) {
    classNames.push(`align-items-${props.alignItems}`);
  }

  if (!!props.alignSelf) {
    classNames.push(`align-self-${props.alignSelf}`);
  }

  if (!!props.borderSize) {
    classNames.push(`border-${props.borderSize}`);
  }

  if (!!props.bgColor) {
    classNames.push(`bg-${props.bgColor}`);
  }

  if (!!props.direction) {
    classNames.push(`direction-${props.direction}`);
  }

  if (!!props.smDirection) {
    classNames.push(`direction-sm-${props.smDirection}`);
  }

  if (!!props.mdDirection) {
    classNames.push(`direction-md-${props.mdDirection}`);
  }

  if (!!props.lgDirection) {
    classNames.push(`direction-lg-${props.lgDirection}`);
  }

  if (!!props.xlDirection) {
    classNames.push(`direction-xl-${props.xlDirection}`);
  }

  if (!!props.display) {
    classNames.push(`display-${props.display}`);
  }

  if (!!props.smDisplay) {
    classNames.push(`display-sm-${props.smDisplay}`);
  }

  if (!!props.mdDisplay) {
    classNames.push(`display-md-${props.mdDisplay}`);
  }

  if (!!props.lgDisplay) {
    classNames.push(`display-lg-${props.lgDisplay}`);
  }

  if (!!props.xlDisplay) {
    classNames.push(`display-xl-${props.xlDisplay}`);
  }

  if (!!props.margin && props.margin <= 12) {
    classNames.push(`margin-${props.margin}`);
  }

  if (!!props.smMargin && props.smMargin <= 12) {
    classNames.push(`margin-sm-${props.smMargin}`);
  }

  if (!!props.mdMargin && props.mdMargin <= 12) {
    classNames.push(`margin-md-${props.mdMargin}`);
  }

  if (!!props.lgMargin && props.lgMargin <= 12) {
    classNames.push(`margin-lg-${props.lgMargin}`);
  }

  if (!!props.xlMargin && props.xlMargin <= 12) {
    classNames.push(`margin-xl-${props.xlMargin}`);
  }

  if (!!props.marginBottom && props.marginBottom <= 12) {
    classNames.push(`margin-bottom-${props.marginBottom}`);
  }

  if (!!props.smMarginBottom && props.smMarginBottom <= 12) {
    classNames.push(`margin-bottom-sm-${props.smMarginBottom}`);
  }

  if (!!props.mdMarginBottom && props.mdMarginBottom <= 12) {
    classNames.push(`margin-bottom-md-${props.mdMarginBottom}`);
  }

  if (!!props.lgMarginBottom && props.lgMarginBottom <= 12) {
    classNames.push(`margin-bottom-lg-${props.lgMarginBottom}`);
  }

  if (!!props.xlMarginBottom && props.xlMarginBottom <= 12) {
    classNames.push(`margin-bottom-xl-${props.xlMarginBottom}`);
  }

  if (!!props.marginTop && props.marginTop <= 12) {
    classNames.push(`margin-top-${props.marginTop}`);
  }

  if (!!props.smMarginTop && props.smMarginTop <= 12) {
    classNames.push(`margin-top-sm-${props.smMarginTop}`);
  }

  if (!!props.mdMarginTop && props.mdMarginTop <= 12) {
    classNames.push(`margin-top-md-${props.mdMarginTop}`);
  }

  if (!!props.lgMarginTop && props.lgMarginTop <= 12) {
    classNames.push(`margin-top-lg-${props.lgMarginTop}`);
  }

  if (!!props.xlMarginTop && props.xlMarginTop <= 12) {
    classNames.push(`margin-top-xl-${props.xlMarginTop}`);
  }

  if (!!props.marginLeft && props.marginLeft <= 12) {
    classNames.push(`margin-left-${props.marginLeft}`);
  }

  if (!!props.smMarginLeft && props.smMarginLeft <= 12) {
    classNames.push(`margin-left-sm-${props.smMarginLeft}`);
  }

  if (!!props.mdMarginLeft && props.mdMarginLeft <= 12) {
    classNames.push(`margin-left-md-${props.mdMarginLeft}`);
  }

  if (!!props.lgMarginLeft && props.lgMarginLeft <= 12) {
    classNames.push(`margin-left-lg-${props.lgMarginLeft}`);
  }

  if (!!props.xlMarginLeft && props.xlMarginLeft <= 12) {
    classNames.push(`margin-left-xl-${props.xlMarginLeft}`);
  }

  if (!!props.marginRight && props.marginRight <= 12) {
    classNames.push(`margin-right-${props.marginRight}`);
  }

  if (!!props.smMarginRight && props.smMarginRight <= 12) {
    classNames.push(`margin-right-sm-${props.smMarginRight}`);
  }

  if (!!props.mdMarginRight && props.mdMarginRight <= 12) {
    classNames.push(`margin-right-md-${props.mdMarginRight}`);
  }

  if (!!props.lgMarginRight && props.lgMarginRight <= 12) {
    classNames.push(`margin-right-lg-${props.lgMarginRight}`);
  }

  if (!!props.xlMarginRight && props.xlMarginRight <= 12) {
    classNames.push(`margin-right-xl-${props.xlMarginRight}`);
  }

  if (!!props.marginX && props.marginX <= 12) {
    classNames.push(`marginX-${props.marginX}`);
  }

  if (!!props.smMarginX && props.smMarginX <= 12) {
    classNames.push(`marginX-sm-${props.smMarginX}`);
  }

  if (!!props.mdMarginX && props.mdMarginX <= 12) {
    classNames.push(`marginX-md-${props.mdMarginX}`);
  }

  if (!!props.lgMarginX && props.lgMarginX <= 12) {
    classNames.push(`marginX-lg-${props.lgMarginX}`);
  }

  if (!!props.xlMarginX && props.xlMarginX < 12) {
    classNames.push(`marginX-xl-${props.xlMarginX}`);
  }

  if (!!props.marginY && props.marginY <= 12) {
    classNames.push(`marginY-${props.marginY}`);
  }

  if (!!props.smMarginY && props.smMarginY <= 12) {
    classNames.push(`marginY-sm-${props.smMarginY}`);
  }

  if (!!props.mdMarginY && props.mdMarginY <= 12) {
    classNames.push(`marginY-sm-${props.mdMarginY}`);
  }

  if (!!props.lgMarginY && props.lgMarginY <= 12) {
    classNames.push(`marginY-lg-${props.lgMarginY}`);
  }

  if (!!props.xlMarginY && props.xlMarginY <= 12) {
    classNames.push(`marginY-xl-${props.xlMarginY}`);
  }

  if (!!props.padding && props.padding <= 12) {
    classNames.push(`padding-${props.padding}`);
  }

  if (!!props.smPadding && props.smPadding <= 12) {
    classNames.push(`padding-sm-${props.smPadding}`);
  }

  if (!!props.mdPadding && props.mdPadding <= 12) {
    classNames.push(`padding-md-${props.mdPadding}`);
  }

  if (!!props.lgPadding && props.lgPadding <= 12) {
    classNames.push(`padding-lg-${props.lgPadding}`);
  }

  if (!!props.xlPadding && props.xlPadding <= 12) {
    classNames.push(`padding-xl-${props.xlPadding}`);
  }

  if (!!props.paddingBottom && props.paddingBottom <= 12) {
    classNames.push(`padding-bottom-${props.paddingBottom}`);
  }

  if (!!props.smPaddingBottom && props.smPaddingBottom <= 12) {
    classNames.push(`padding-bottom-sm-${props.smPaddingBottom}`);
  }

  if (!!props.mdPaddingBottom && props.mdPaddingBottom <= 12) {
    classNames.push(`padding-bottom-md-${props.mdPaddingBottom}`);
  }

  if (!!props.lgPaddingBottom && props.lgPaddingBottom <= 12) {
    classNames.push(`padding-bottom-lg-${props.lgPaddingBottom}`);
  }

  if (!!props.xlPaddingBottom && props.xlPaddingBottom <= 12) {
    classNames.push(`padding-bottom-xl-${props.xlPaddingBottom}`);
  }

  if (!!props.paddingTop && props.paddingTop <= 12) {
    classNames.push(`padding-top-${props.paddingTop}`);
  }

  if (!!props.smPaddingTop && props.smPaddingTop <= 12) {
    classNames.push(`padding-top-sm-${props.smPaddingTop}`);
  }

  if (!!props.mdPaddingTop && props.mdPaddingTop <= 12) {
    classNames.push(`padding-top-md-${props.mdPaddingTop}`);
  }

  if (!!props.lgPaddingTop && props.lgPaddingTop <= 12) {
    classNames.push(`padding-top-lg-${props.lgPaddingTop}`);
  }

  if (!!props.xlPaddingTop && props.xlPaddingTop <= 12) {
    classNames.push(`padding-top-xl-${props.xlPaddingTop}`);
  }

  if (!!props.paddingLeft && props.paddingLeft <= 12) {
    classNames.push(`padding-left-${props.paddingLeft}`);
  }

  if (!!props.smPaddingLeft && props.smPaddingLeft <= 12) {
    classNames.push(`padding-left-sm-${props.smPaddingLeft}`);
  }

  if (!!props.mdPaddingLeft && props.mdPaddingLeft <= 12) {
    classNames.push(`padding-left-md-${props.mdPaddingLeft}`);
  }

  if (!!props.lgPaddingLeft && props.lgPaddingLeft <= 12) {
    classNames.push(`padding-left-lg-${props.lgPaddingLeft}`);
  }

  if (!!props.xlPaddingLeft && props.xlPaddingLeft <= 12) {
    classNames.push(`padding-left-xl-${props.xlPaddingLeft}`);
  }

  if (!!props.paddingRight && props.paddingRight <= 12) {
    classNames.push(`padding-right-${props.paddingRight}`);
  }

  if (!!props.smPaddingRight && props.smPaddingRight <= 12) {
    classNames.push(`padding-right-sm-${props.smPaddingRight}`);
  }

  if (!!props.mdPaddingRight && props.mdPaddingRight <= 12) {
    classNames.push(`padding-right-md-${props.mdPaddingRight}`);
  }

  if (!!props.lgPaddingRight && props.lgPaddingRight <= 12) {
    classNames.push(`padding-right-lg-${props.lgPaddingRight}`);
  }

  if (!!props.xlPaddingRight && props.xlPaddingRight <= 12) {
    classNames.push(`padding-right-xl-${props.xlPaddingRight}`);
  }

  if (!!props.paddingX && props.paddingX <= 12) {
    classNames.push(`paddingX-${props.paddingX}`);
  }

  if (!!props.smPaddingX && props.smPaddingX <= 12) {
    classNames.push(`paddingX-sm-${props.smPaddingX}`);
  }

  if (!!props.mdPaddingX && props.mdPaddingX <= 12) {
    classNames.push(`paddingX-md-${props.mdPaddingX}`);
  }

  if (!!props.lgPaddingX && props.lgPaddingX <= 12) {
    classNames.push(`paddingX-lg-${props.lgPaddingX}`);
  }

  if (!!props.xlPaddingX && props.xlPaddingX <= 12) {
    classNames.push(`paddingX-xl-${props.xlPaddingX}`);
  }

  if (!!props.paddingY && props.paddingY <= 12) {
    classNames.push(`paddingY-${props.paddingY}`);
  }

  if (!!props.smPaddingY && props.smPaddingY <= 12) {
    classNames.push(`paddingY-sm-${props.smPaddingY}`);
  }

  if (!!props.mdPaddingY && props.mdPaddingY <= 12) {
    classNames.push(`paddingY-sm-${props.mdPaddingY}`);
  }

  if (!!props.lgPaddingY && props.lgPaddingY <= 12) {
    classNames.push(`paddingY-lg-${props.lgPaddingY}`);
  }

  if (!!props.xlPaddingY && props.xlPaddingY <= 12) {
    classNames.push(`paddingY-xl-${props.xlPaddingY}`);
  }

  if (!!props.flex) {
    classNames.push(`flex-${props.flex}`);
  }

  if (!!props.justifyContent) {
    classNames.push(`justify-content-${props.justifyContent}`);
  }

  if (!!props.top && typeof props.top === "boolean") {
    classNames.push(`position-top`);
  }

  if (!!props.bottom && typeof props.bottom === "boolean") {
    classNames.push(`position-bottom`);
  }

  if (!!props.left && typeof props.left === "boolean") {
    classNames.push(`position-left`);
  }

  if (!!props.right && typeof props.right === "boolean") {
    classNames.push(`position-right`);
  }

  if (!!props.position) {
    classNames.push(`position-${props.position}`);
  }

  if (!!props.rounding) {
    classNames.push(`rounding-${props.rounding}`);
  }

  if (!!props.wrap) {
    props.wrap ? classNames.push("wrap") : classNames.push("no-wrap");
  }

  if (!!props.overflow) {
    classNames.push(`overflow-${props.overflow}`);
  }

  if (!!props.column) {
    classNames.push(`col-${props.column}`);
  }

  if (!!props.fit) {
    classNames.push("fit");
  }

  return classNames;
};

const setInlineStyles = (props: IBoxProps) => {
  const inlineStyles: React.CSSProperties = {};

  if (!!props.height) {
    inlineStyles.height = props.height;
  }

  if (!!props.minHeight) {
    inlineStyles.minHeight = props.minHeight;
  }

  if (!!props.maxHeight) {
    inlineStyles.maxHeight = props.maxHeight;
  }

  if (!!props.width) {
    inlineStyles.width = props.width;
  }

  if (!!props.minWidth) {
    inlineStyles.minWidth = props.minWidth;
  }

  if (!!props.maxWidth) {
    inlineStyles.maxWidth = props.maxWidth;
  }

  if (!!props.top && typeof props.top !== "boolean") {
    inlineStyles.top = props.top;
  }

  if (!!props.bottom && typeof props.bottom !== "boolean") {
    inlineStyles.bottom = props.bottom;
  }

  if (!!props.left && typeof props.left !== "boolean") {
    inlineStyles.left = props.left;
  }

  if (!!props.right && typeof props.right !== "boolean") {
    inlineStyles.right = props.right;
  }

  if (
    (!!props.margin && props.margin > 12) ||
    typeof props.margin === "string"
  ) {
    inlineStyles.margin = props.margin;
  }

  if (
    (!!props.marginBottom && props.marginBottom > 12) ||
    typeof props.marginBottom === "string"
  ) {
    inlineStyles.marginBottom = props.marginBottom;
  }

  if (
    (!!props.marginTop && props.marginTop > 12) ||
    typeof props.marginTop === "string"
  ) {
    inlineStyles.marginTop = props.marginTop;
  }

  if (
    (!!props.marginLeft && props.marginLeft > 12) ||
    typeof props.marginLeft === "string"
  ) {
    inlineStyles.marginLeft = props.marginLeft;
  }

  if (
    (!!props.marginRight && props.marginRight > 12) ||
    typeof props.marginRight === "string"
  ) {
    inlineStyles.marginRight = props.marginRight;
  }

  if (
    (!!props.marginX && props.marginX > 12) ||
    typeof props.marginX === "string"
  ) {
    inlineStyles.marginLeft = props.marginX;
    inlineStyles.marginRight = props.marginX;
  }

  if (
    (!!props.marginY && props.marginY > 12) ||
    typeof props.marginY === "string"
  ) {
    inlineStyles.marginTop = props.marginY;
    inlineStyles.marginBottom = props.marginY;
  }

  if (
    (!!props.padding && props.padding > 12) ||
    typeof props.padding === "string"
  ) {
    inlineStyles.padding = props.padding;
  }

  if (
    (!!props.paddingBottom && props.paddingBottom > 12) ||
    typeof props.paddingBottom === "string"
  ) {
    inlineStyles.paddingBottom = props.paddingBottom;
  }

  if (
    (!!props.paddingTop && props.paddingTop > 12) ||
    typeof props.paddingTop === "string"
  ) {
    inlineStyles.paddingTop = props.paddingTop;
  }

  if (
    (!!props.paddingLeft && props.paddingLeft > 12) ||
    typeof props.paddingLeft === "string"
  ) {
    inlineStyles.paddingLeft = props.paddingLeft;
  }

  if (
    (!!props.paddingRight && props.paddingRight > 12) ||
    typeof props.paddingRight === "string"
  ) {
    inlineStyles.paddingRight = props.paddingRight;
  }

  if (
    (!!props.paddingX && props.paddingX > 12) ||
    typeof props.paddingX === "string"
  ) {
    inlineStyles.paddingLeft = props.paddingX;
    inlineStyles.paddingRight = props.paddingX;
  }

  if (
    (!!props.paddingY && props.paddingY > 12) ||
    typeof props.paddingY === "string"
  ) {
    inlineStyles.paddingTop = props.paddingY;
    inlineStyles.paddingBottom = props.paddingY;
  }

  if (!!props.opacity) {
    inlineStyles.opacity = props.opacity;
  }

  if (!!props.flexBasis) {
    inlineStyles.flexBasis = props.flexBasis; // pixel
  }

  if (!!props.zIndex) {
    inlineStyles.zIndex = props.zIndex;
  }

  return inlineStyles;
};
