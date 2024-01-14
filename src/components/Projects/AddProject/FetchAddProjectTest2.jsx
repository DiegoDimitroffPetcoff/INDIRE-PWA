import React, { useState, useEffect } from 'react';
import { Providers, ProviderState } from "@microsoft/mgt-element";

async function getToken() {
  token = await Providers.globalProvider.getAccessToken({});
  console.log(token);
}
let token = "";

export const FetchAddProjectTest2 = () => {
  const [accessToken, setAccessToken] = useState(null);
  if (Providers.globalProvider.state === ProviderState.SignedIn) {
    getToken();
  }
  useEffect(() => {
    const getAccessToken = async () => {
      // Lógica para obtener el token de acceso (puedes usar MSAL, por ejemplo)
      // Reemplaza con tu lógica específica para obtener el token
      const tokenResponse = token;
      setAccessToken(tokenResponse);
    };

    // Llama a la función para obtener el token de acceso
    getAccessToken();
  }, []);

  const uploadFile = async () => {
    const filePath = 'path/to/your/file.txt'; // Reemplaza con la ruta a tu archivo
    const fileName = 'FileB.txt'; // Reemplaza con el nombre que deseas para el archivo en Microsoft Graph

    // Lee el contenido del archivo
    const fileContent = await fetch(filePath).then((response) => response.text());

    const driveId = 'me'; // Puedes cambiarlo según tus necesidades
    const parentId = 'root'; // Puedes cambiarlo según tus necesidades

    const url = `https://graph.microsoft.com/v1.0/drives/${driveId}/items/${parentId}:/${fileName}:/content`;

    const requestOptions = {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'text/plain',
      },
      body: fileContent,
    };

    try {
      const response = await fetch(url, requestOptions);

      if (!response.ok) {
        throw new Error(`Error en la carga del archivo: ${response.status} ${response.statusText}`);
      }

      const responseBody = await response.json();
      console.log('Archivo cargado exitosamente:', responseBody);
    } catch (error) {
      console.error('Error en la solicitud:', error.message);
    }
  };

  return (
    <div>
      <button onClick={uploadFile}>Cargar Archivo</button>
    </div>
  );
};


