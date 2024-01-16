import { Providers, ProviderState } from "@microsoft/mgt-element";
export const Auth = async() => {
 
    if (Providers.globalProvider.state === ProviderState.SignedIn) {
   
      try {
        const accessToken = await Providers.globalProvider.getAccessToken({});
        return accessToken
      } catch (error) {
        console.error("Error trying to get token: ", error);
        return("Error trying to get token");
      }
    }

};
