import { useState, useEffect } from "react";
import { Auth } from "../utils/auth";

export const FetchGet = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return { data, error, loading };
};

export const FetchPostMicrosoftGraph = (url,data) => {
    const [success, setSuccess] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [accessToken, setAccessToken] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        setLoading(true);
        setAccessToken(Auth());
        try {
          const response = await fetch(url, {
            method: "PUT",
            headers: {
              Authorization: `Bearer ${accessToken}`,
              "Content-Type": "application/pdf",
            },
            body: JSON.stringify({ data }), // Convertir el objeto a cadena JSON
          });
  
          const data = await response.json();
          console.log("El archivo se ha subido exitosamente.");
          setSuccess(data);
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchData(); // Llamar a la función directamente
    }, [url, data, accessToken]);
  
    return {success,  error, loading };
  };
