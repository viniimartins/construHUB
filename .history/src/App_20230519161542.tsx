import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";

import { Home } from "./pages/Home";
import { Video } from "./pages/Video";
import {Carousel} from "./pages/Carousel";

export function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Home />
        <Video />

        <Carousel />
        <GlobalStyle />

      </ThemeProvider>
    </>
  );
}
