import { useEffect } from "react";
import { Providers, ProviderState } from "@microsoft/mgt-element";

export const FetchPostMicrosoftGraph = (file) => {
  return new Promise(async (resolve, reject) => {
    //primero checkeo si esta logeado 
    //y obtengo el token
    //si no esta logeado me da error
    if (Providers.globalProvider.state === ProviderState.SignedIn) {
      let accessToken;
      try {
        accessToken = await Providers.globalProvider.getAccessToken({});
      } catch (error) {
        console.error("Error trying to get token: ", error);
        reject("Error trying to get token");
      }

      //luego hago el fetch
      fetch(
        "https://graph.microsoft.com/v1.0/me/drive/root:/FolderA/PRUEBA2-16-2024.pdf:/content",
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${accessToken}`,
            //To post PDF I changed "text/pdf"
            "Content-Type": "application/pdf",
          },
          body: file,
        }
      )
        .then((response) => {
          if (response.ok) {
            console.log("El archivo se ha subido exitosamente.");
            resolve("File uploaded successfully");
          } else {
            console.error(
              `Error al subir el archivo. Código de estado: ${response.status}`
            );
            reject(`Error uploading file. Status code: ${response.status}`);
          }
        })
        .catch((error) => {
          console.error("Error en la solicitud:", error);
          reject("Error in the request");
        });
    } else {
      reject("User is not signed in");
    }
  });
};
