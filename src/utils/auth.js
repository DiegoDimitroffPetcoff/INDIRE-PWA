import { Providers, ProviderState } from "@microsoft/mgt-element";
export const Auth = async () => {
  if (Providers.globalProvider.state === ProviderState.SignedIn) {
    console.log(Providers.globalProvider.state);
    console.log("Providers.globalProvider.state");
    console.log("ProviderState.SignedIn");
    console.log(ProviderState.SignedIn);
    try {
      const accessToken = await Providers.globalProvider.getAccessToken({});
      return accessToken;
    } catch (error) {
      return "Error trying to get token";
    }
  }else{
    return "User no Logged"
  }
};
