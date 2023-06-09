import { ThemeProvider } from "styled-components";

import { Header } from "./components/Header";

import "./global.css";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Header />
      </ThemeProvider>
    </>
  );
}
