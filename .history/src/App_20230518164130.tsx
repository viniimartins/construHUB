import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";

import { Header } from "./components/Header";

// import "./global.css";

export function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Header />

        global
      </ThemeProvider>
    </>
  );
}
