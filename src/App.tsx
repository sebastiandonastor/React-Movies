import "./App.css";
import { MainMenu } from "./MainMenu/MainMenu";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Genres } from "./Genres/Genres";
import { LandingPage } from "./LandingPage/LadingPage";
import { createTheme, ThemeProvider } from "@material-ui/core";

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={darkTheme}>
          <MainMenu>
            <Switch>
              <Route exact path="/">
                <LandingPage />
              </Route>
              <Route path="/genres">
                <Genres />
              </Route>
            </Switch>
          </MainMenu>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
