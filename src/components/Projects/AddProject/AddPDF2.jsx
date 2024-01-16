import React, { useState } from "react";
/* import { PDFDocument } from "pdf-lib"; */
import { FetchAddProjectTest } from "./FetchAddProjectTest";

export const AddPDF2 = () => {
  const [documentContent, setDocumentContent] = useState("");

/*   const createPDFDocument = async () => {
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage();
    const { width, height } = page.getSize();

    // Utilizamos la fuente por defecto en lugar de la fuente Helvetica
    // const font = await pdfDoc.embedFont(PDFDocument.Font.Helvetica);

    const text = "Hello, this is my document!";
    page.drawText(text, { x: 50, y: height - 200, fontSize: 20 });

    const pdfBytes = await pdfDoc.save();

    // Convertimos el PDF a una cadena Base64 y la almacenamos localmente
    const base64Content = btoa(String.fromCharCode(...pdfBytes));
    setDocumentContent(base64Content);
  }; */

  ///---------------------------------------------------

  const readAndConvertPDF = async (file) => {
    const reader = new FileReader();

    reader.onload = async (event) => {
      const pdfBytes = new Uint8Array(event.target.result);

      // Convertimos el PDF a una cadena Base64 y la almacenamos localmente
      //const base64Content = btoa(String.fromCharCode(...pdfBytes));

      

//CONVIERTO EL ARCHIVO PDF EN UN BLOB Y LO MANDO
      const pdfBlob = new Blob([pdfBytes], { type: 'application/pdf' });
      setDocumentContent(pdfBlob);
    };

    // Lee el contenido del archivo como una URL de datos (data URL)
    reader.readAsArrayBuffer(file);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      readAndConvertPDF(file);
    }
  };

  return (
    <div>
      {documentContent && <FetchAddProjectTest data={documentContent} />}
      {/*       <button onClick={createPDFDocument}>Crear BINARIO</button>
     
      <div>
        <textarea rows="10" cols="50" readOnly value={documentContent} />
      </div> */}

      <div>
        <textarea rows="10" cols="50" readOnly value={documentContent} />
      </div>
      <div>
        <input type="file" onChange={handleFileChange} />
        <div>
          <button onClick={() => setDocumentContent("")}>Limpiar</button>
        </div>
      </div>
    </div>
  );
};
