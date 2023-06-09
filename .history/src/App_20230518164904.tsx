import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";

import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";

// import "./global.css";

export function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Header />
        <Header />
        <Header />
        <Header />
        Main

        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}
