import React, { useState, useEffect, lazy, Suspense } from "react";

import SpinnerComponent from "./components/Common/Spinner.jsx";
//To handle the serviceworker:
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
/* import reportWebVitals from "./reportWebVitals"; */

//Microsoft Graph and provider msal
import { Providers, ProviderState } from "@microsoft/mgt-element";
import { Msal2Provider } from "@microsoft/mgt-msal2-provider";

Providers.globalProvider = new Msal2Provider({
  clientId: "d58ed348-f9f6-4d18-96b8-235eec7929c7",
});

const Home = lazy(() => import("./home/layout.js"));

const Log = lazy(() => import("./components/Common/Login.jsx"));
const NotFound = lazy(() => import("./components/Common/NotFound.jsx"));

async function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Suspense fallback={<SpinnerComponent />}>
      {/* <Home /> */}
      <h1>ejemplo</h1>
    </Suspense>
  );
}

export default App;

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
/*     <Suspense fallback={<SpinnerComponent />}>
      {isLoggedIn ? (
        <>
          <SideBar />
          <UpploadFile />
          <ProjectComponent
            data={data}
            setData={setData}
            sections={sections}
            setSections={setSections}
          />
          <ProjectList data={data} setData={setData} />
          <NotFound />
        </>
      ) : (
        <>
          <Log />
          <NotFound />
        </>
      )}
    </Suspense> */
