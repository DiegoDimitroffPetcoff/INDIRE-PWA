import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { FetchPostMicrosoftGraph } from "../services/fetchPostMicrosoftGraph";
import { BlobConversor } from "./blobConversor";


export const PDFMaker2 = async(data) => {

  try {
   
    const canvas = await html2canvas(data);
    const imgData = canvas.toDataURL("image/png");



    var url = imgData.split(",");
    var base64Data = url[1];

 console.log("PDF 2----");
console.log(url);



    //decodifico el pdf pasandolo a base64 desde
    var decodedData = window.atob(base64Data);


// Convierte los bytes en un array buffer
var imagenArrayBuffer = new ArrayBuffer(decodedData.length);
var imagenUint8Array = new Uint8Array(imagenArrayBuffer);
for (var i = 0; i < decodedData.length; i++) {
    imagenUint8Array[i] = decodedData.charCodeAt(i);
}



    //convierto el codifo en un objeto PDF
    const blob = new Blob([imagenArrayBuffer], { type: "image/png" });
   // const blob = new Blob([new Uint8Array(decodedData.length).map((_, i) => decodedData.charCodeAt(i))], { type: 'image/png' });
   
    try {
      const pdfBlob = await BlobConversor(blob);
      FetchPostMicrosoftGraph(pdfBlob);
    } catch (error) {
      console.log(error);
    }


    return imgData;
  } catch (error) {
    console.error("Error al generar el PDF", error);
    throw error;
  }


};
