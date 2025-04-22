import { ReactNode } from "react";
import ReactDOM from "react-dom";

interface PortalProps {
  children: ReactNode;
  container?: HTMLElement;
}

const modalRoot = document.getElementById("modal-root") || document.body;

const Portal = ({ children }: PortalProps) => {
  return ReactDOM.createPortal(children, modalRoot);
};

export default Portal;
