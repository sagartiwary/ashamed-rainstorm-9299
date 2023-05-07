import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { SocketProvider } from "./Callingapp/Providers/Socket";
import { PeerProvider } from "./Callingapp/Providers/Peer";
import { store } from "./store";
import { Provider } from "react-redux";
import { store } from "./Reducer/store";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <ChakraProvider>
      <BrowserRouter>
        <SocketProvider>
          <PeerProvider>
            {" "}
            <App />
          </PeerProvider>
        </SocketProvider>
      </BrowserRouter>
    </ChakraProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
