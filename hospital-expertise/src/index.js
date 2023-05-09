import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";

import { Auth0Provider } from "@auth0/auth0-react";
import { SocketProvider } from "./Callingapp/Providers/Socket";
import { PeerProvider } from "./Callingapp/Providers/Peer";
import { Provider } from "react-redux";
import { store } from "./Reducer/store";
const root = ReactDOM.createRoot(document.getElementById('root'));

import { Auth0Provider } from '@auth0/auth0-react';
import { store } from "./store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root")); main
root.render(
  <Provider store={store}>
    <ChakraProvider>
      <BrowserRouter>
       
        <Auth0Provider
							domain='dev-36jbpvwtgmgzxos3.us.auth0.com'
							clientId='KiEBoFefnKpKFluCSu5lyiUidPNIwuLo'
							authorizationParams={{
								redirect_uri: window.location.origin,
							}}>
							<App />
						</Auth0Provider>
      </BrowserRouter>
    </ChakraProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
