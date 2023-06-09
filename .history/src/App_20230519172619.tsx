import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { Carousel } from "./pages/Carousel";
import { ContentCarousel } from "./componets/ContentCarousel";
// import { Home } from "./pages/Home";
// import { Video } from "./pages/Video";

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
