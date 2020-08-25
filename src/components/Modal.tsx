import * as React from "react";
import { Box } from "./Box";
import { Heading } from "./Heading";
import { Layer } from "./Layer";
import { IconButton } from "./IconButton";

interface IModalProps {
  isVisible: boolean;
  accessibilityModalLabel: string;
  onDismiss: () => void;
  children: React.ReactNode;
  closeOnOutsideClick?: boolean;
  header?: string | React.ReactNode;
  footer?: React.ReactNode;
  role?: "alertdialog" | "dialog";
  size?: "sm" | "md" | "lg" | number;
}

export const Modal: React.FC<IModalProps> = ({
  accessibilityModalLabel,
  children,
  isVisible,
  onDismiss,
  closeOnOutsideClick = true,
  footer,
  header,
  role = "dialog",
  size = "sm",
}) => {
  const modalRef = React.useRef<any>();

  React.useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target) &&
        closeOnOutsideClick
      ) {
        onDismiss();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return isVisible ? (
    <Layer>
      <Box
        className="modal-outside"
        position="absolute"
        top
        left
        right
        bottom
        aria-label={accessibilityModalLabel}
      >
        <Box
          rounding={4}
          bgColor="white"
          className={setClassNames(size)}
          role={role}
          onBlur={!closeOnOutsideClick ? () => {} : onDismiss}
          style={{ width: typeof size === "number" ? size : undefined }}
          ref={modalRef}
        >
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            position="absolute"
            top="16px"
            right="16px"
            style={{ zIndex: 999 }}
          >
            <IconButton
              bgColor="transparent"
              icon="Close"
              iconColor="black"
              accessibilityLabel="close modal"
              onClick={onDismiss}
            />
          </Box>
          <Box className="modal__inner">
            {!!header && typeof header === "string" ? (
              <Box className="modal__header">
                <Box padding={4}>
                  <Heading align="center">{header}</Heading>
                </Box>
              </Box>
            ) : (
              { header }
            )}
            <Box padding={4} className="modal__body">
              {children}
            </Box>
            <Box padding={4} className="modal__footer">
              {footer}
            </Box>
          </Box>
        </Box>
      </Box>
    </Layer>
  ) : null;
};

const setClassNames = (size: IModalProps["size"]) => {
  const classNames: string[] = [];

  classNames.push("modal");

  if (!!size && typeof size === "string") {
    classNames.push(`modal--${size}`);
  } else {
    classNames.push("modal--sm");
  }

  return classNames.join(" ");
};
