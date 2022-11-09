import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "remixicon/fonts/remixicon.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import store from "./store";
import { AuthProvider } from "./action/AuthContext";
// import { Provider } from 'react-redux';
import { BrowserRouter as Router } from "react-router-dom";
import { ChakraProvider, theme } from "@chakra-ui/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme} />
  
    {/* <Provider store={store}> */}
      <Router>
      <AuthProvider>
        <App />
        </AuthProvider>
      </Router>
    {/* </Provider> */}
   
    <ChakraProvider />
  </React.StrictMode>
);
