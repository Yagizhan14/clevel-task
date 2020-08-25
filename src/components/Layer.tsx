import * as React from "react";
import { createPortal } from "react-dom";

interface ILayerProps {
  children: React.ReactNode;
}

export const Layer: React.FC<ILayerProps> = ({ children }) => {
  return createPortal(<div>{children}</div>, document.getElementById("root")!);
};
