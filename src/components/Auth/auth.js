/* VER COMO LO ARREGLO
import { useState, useEffect } from "react";
import { Providers, ProviderState } from "@microsoft/mgt-element";
function useIsSignedIn() {
  const [isSignedIn, setIsSignedIn] = useState(false);


    const updateState = () => {
      const provider = Providers.globalProvider;
      setIsSignedIn(provider && provider.state === ProviderState.SignedIn);
    };

    Providers.onProviderUpdated(updateState);
    updateState();

    return () => {
      Providers.removeProviderUpdatedListener(updateState);
    };


  return isSignedIn;
} */