import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { Carousel } from "./pages/Carousel";
import { Video } from "./pages/Video";
import { Home } from "./pages/Home";
import { Form } from "./pages/Form";

export function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Home />
        <Video />
        <Carousel />
        <Form />
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}
