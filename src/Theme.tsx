import { PropsWithChildren } from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "",
    secondary: ""
  }
};

export const Theme = ({ children }: PropsWithChildren) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
