import * as React from "react";

function SvgCaret(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="calendar_svg__feather calendar_svg__feather-calendar"
      {...props}
    >
      <path d="M0 0 L12 12 L24 0"></path>
    </svg>
  );
}

export default SvgCaret;
