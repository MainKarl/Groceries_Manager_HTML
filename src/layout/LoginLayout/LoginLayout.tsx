import React from "react";
import { StyledMainLayout } from "./LoginLayout.styled";

const LoginLayout: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
};

export default LoginLayout;
