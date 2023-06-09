import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";

import { GlobalStyle } from "./styles/global";

// import "./global.css";

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
