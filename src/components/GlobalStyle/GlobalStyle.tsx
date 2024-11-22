import { ReactNode } from "react";
import "./GlobalStyle.css";

interface GlobalStyleProps {
  children: ReactNode;
}

const GlobalStyle = ({ children }: GlobalStyleProps) => {
  return <>{children}</>;
};

export default GlobalStyle;
