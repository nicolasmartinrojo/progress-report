import React from "react";
import ProgressBar from "../components/ProgressBar";
import MainTheme from "../themes/MainTheme";
import { ThemeProvider } from "styled-components";
import SecondaryTheme from "../themes/SecondaryTheme";
export default {
  title: "Progress Report",
  component: <ProgressBar />,
};

export const Default = () => (
  <ThemeProvider theme={MainTheme}>
    <ProgressBar steps={4} />
  </ThemeProvider>
);

export const Secondary = () => (
  <ThemeProvider theme={SecondaryTheme}>
    <ProgressBar steps={10} />
  </ThemeProvider>
);
