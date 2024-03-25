import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
//Router
import { BrowserRouter } from "react-router-dom";

//To handle the serviceworker:
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";

//Microsoft Graph and provider msal
import { Providers, ProviderState } from "@microsoft/mgt-element";
import { Msal2Provider } from "@microsoft/mgt-msal2-provider";

Providers.globalProvider = new Msal2Provider({
  clientId: "d58ed348-f9f6-4d18-96b8-235eec7929c7",
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

    <App />

);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
