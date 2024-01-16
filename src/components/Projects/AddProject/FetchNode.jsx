import { useEffect, useState } from "react";
import { Providers, ProviderState } from "@microsoft/mgt-element";

export const FetchNode = () => {
  const [token, setToken] = useState("no hay token");
  const [formData, setFormData] = useState({
    name: "",
    email: "",

    // Agrega otros campos según tus necesidades
  });

  useEffect(() => {
    const getToken = async () => {
      try {
        const accessToken = await Providers.globalProvider.getAccessToken({});
        console.log(accessToken);
        setToken(accessToken);
        const formData = {
          name: "",
          email: "",
          token: accessToken
          // Agrega otros campos según tus necesidades
        };
        setFormData(formData);


      } catch (error) {
        console.error("Error trying to get token: ", error);
      }
    };

    if (Providers.globalProvider.state === ProviderState.SignedIn) {
      getToken();
    }
  }, []);



  const handleInputChange = (e) => {
    const { name, value, token } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/addProject", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Datos enviados con éxito");
      } else {
        console.error("Error al enviar datos al servidor");
      }
    } catch (error) {
      console.error("Error de red:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Correo electrónico:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </label>
      <br />
      {/* Agrega más campos según tus necesidades */}
      <button type="submit">Enviar Datos</button>
    </form>
  );
};
