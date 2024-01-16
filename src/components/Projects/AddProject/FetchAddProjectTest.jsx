import { useEffect, useState } from "react";
import { Providers, ProviderState } from "@microsoft/mgt-element";

export const FetchAddProjectTest = ({data}) => {
  const [token, setToken] = useState("");

  useEffect(() => {
    const getToken = async () => {
      try {
      
          const accessToken = await Providers.globalProvider.getAccessToken({});
         // console.log(accessToken);
          setToken(accessToken);
        
      } catch (error) {
        console.error("Error trying to get token: ", error);
      }
    };

        if (Providers.globalProvider.state === ProviderState.SignedIn) {
      getToken();
    }

  }, []);
  useEffect(() => {
    if (token) {
      fetch(
        "https://graph.microsoft.com/v1.0/me/drive/root:/FolderA/PRUEBA2-16-2024.pdf:/content",
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
            //To post PDF I changed "text/pdf"
            "Content-Type": "application/pdf",
          },
          body: data,
        }
      )
        .then((response) => {
          if (response.ok) {
            console.log("El archivo se ha subido exitosamente.");
          } else {
            console.error(
              `Error al subir el archivo. Código de estado: ${response.status}`
            );
          }
        })
        .catch((error) => {
          console.error("Error en la solicitud:", error);
        });
    }
  }, [token]);

  return <>Test Fectch</>;
};
/*   useState(() => {
    fetch("https://graph.microsoft.com/v1.0/me/drive/root:/FolderA/FileB.txt:/content", {
      method: 'PUT',
      headers: {
  requestOptions
      },
      body: "The contents of the file goes here."
    })
      .then(response => {
        if (response.ok) {
          console.log("El archivo se ha subido exitosamente.");
        } else {
          console.error(`Error al subir el archivo. Código de estado: ${response.status}`);
        }
      })
      .catch(error => {
        console.error("Error en la solicitud:", error);
      });
  }, []); */

/*   useState(() => {
    fetch(
      "https://graph.microsoft.com/v1.0/me/drive/root:/myNewSamllFile.txt:/content",
      requestOptions
    )
      .then((r) => r.text())
      .then((data) => {
        console.log(data);
      });
  }, []); */
