import React, { useState, useEffect, lazy, Suspense } from "react";

import { Providers, ProviderState } from "@microsoft/mgt-element";

import SpinnerComponent from "./components/Common/Spinner.jsx";

const Home = lazy(() => import("./home/layout.js"));

const Log = lazy(() => import("./components/Common/Login.jsx"));
const NotFound = lazy(() => import("./components/Common/NotFound.jsx"));

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const updateLoginStatus = () => {
      if (Providers.globalProvider) {
        setIsLoggedIn(
          Providers.globalProvider.state === ProviderState.SignedIn
        );
      }
    };
    updateLoginStatus();
    Providers.onProviderUpdated(updateLoginStatus);
    return () => {
      Providers.removeProviderUpdatedListener(updateLoginStatus);
    };
  }, []);
  return (
    <Suspense fallback={<SpinnerComponent />}>
      <Home />
    </Suspense>
  )
}

export default App;

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
