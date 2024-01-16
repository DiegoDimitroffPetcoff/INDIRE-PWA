import { useEffect } from "react";
import { Providers, ProviderState } from "@microsoft/mgt-element";
import { Auth } from "./auth";

export const FetchPostMicrosoftGraph = (file) => {
  return new Promise(async (resolve, reject) => {
    //primero checkeo si esta logeado
    //y obtengo el token
    try {
      let accessToken = await Auth();
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
    } catch (error) {
      console.log(error);
    }
  });
};
