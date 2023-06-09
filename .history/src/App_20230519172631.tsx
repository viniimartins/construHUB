import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { Carousel } from "./pages/Carousel";
import { ContentCarousel } from "./componets/ContentCarousel";
import { Video } from "./pages/Video";
import { Home } from "./pages/Home";

export function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Home />
        <Video />

        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}
