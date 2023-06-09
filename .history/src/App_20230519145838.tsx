import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";

import { GlobalStyle } from "./styles/global";
import FooterLogo from "./componets/FooterLogos"


export function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        {/* <Home /> */}

        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}
