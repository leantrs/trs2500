import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import './mock';
import GuestRoute from "./routes/GuestRoute";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <GuestRoute path="/sign-in" element={<SignIn />} />
            <Route path="*" element={<h1>Not found 404!</h1>} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}
export default App;
