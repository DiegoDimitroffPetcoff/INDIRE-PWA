import React, { useState } from 'react';
import pdfjs from 'pdfjs-dist/build/pdf';

export const ConvertToBinare = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleConvertToBinary = async () => {
    try {
      if (!file) {
        console.error('Please select a file');
        return;
      }

      const fileReader = new FileReader();

      fileReader.onload = async (e) => {
        // Convertir a binario
        const binaryData = e.target.result;
        console.log('Binary data:', binaryData);

        // Puedes realizar operaciones adicionales con el binario aquí

        // Ejemplo: Subir el archivo binario al servidor
        // (Este es solo un ejemplo y debes implementar la lógica de tu servidor)
        // const response = await uploadBinaryToServer(binaryData);

        // console.log('Server response:', response);
      };

      // Leer el archivo como datos URL
      fileReader.readAsDataURL(file);
    } catch (error) {
      console.error('Error converting to binary', error);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleConvertToBinary}>Convert to Binary</button>
    </div>
  );
};


