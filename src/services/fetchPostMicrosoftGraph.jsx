import { Auth } from "../utils/auth";

export const FetchPostMicrosoftGraph = async (file) => {
  try {
    const accessToken = await Auth();

    const response = await fetch(
      "https://graph.microsoft.com/v1.0/me/drive/root:/Pruebas-Test/PRUEBA2-18-2024.pdf:/content",
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/pdf; charset=utf-8",
          "Accept-Language": "pt"
          
        },
        body: file,
      }
    );

    if (response.ok) {
      console.log("El archivo se ha subido exitosamente.");
      return "File uploaded successfully";
    } else {
      console.error(`Error al subir el archivo. Código de estado: ${response.status}`);
      throw new Error(`Error uploading file. Status code: ${response.status}`);
    }
  } catch (error) {
    console.error("Error en FetchPostMicrosoftGraph:", error);
    throw new Error("Hubo un problema al subir el archivo al servidor. Por favor, inténtelo de nuevo más tarde.");
  }
};

