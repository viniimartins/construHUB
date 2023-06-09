import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";

import { GlobalStyle } from "./styles/global";
// import { Home } from "./pages/Home";
// import { HUBlogo } from "./componets/HUBlogo";
import { FooterImage } from "./componets/FooterLogos"
// import { Header } from "./componets/Header";

// import "./global.css";

export function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        {/* <Home /> */}

        <FooterImage />
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}
