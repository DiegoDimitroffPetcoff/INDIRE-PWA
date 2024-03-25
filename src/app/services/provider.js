import { Providers, ProviderState } from "@microsoft/mgt-element";

export async function Provider(params) {
    const updateLoginStatus = () => {
        if (Providers.globalProvider) {
          return(
            Providers.globalProvider.state === ProviderState.SignedIn
          );
        }
      };
      updateLoginStatus();
      Providers.onProviderUpdated(updateLoginStatus);
      return () => {
        Providers.removeProviderUpdatedListener(updateLoginStatus);
      }
}