import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { FetchPostMicrosoftGraph } from "../services/fetchPostMicrosoftGraph";

export const PdfMakerHTML2canvas = async (html) => {
  html2canvas(document.body).then(function (canvas) {
    const pdf = new jsPDF("p", "px", [canvas.width, canvas.height]);

    // Convierte el contenido del canvas a una imagen base64
    const imgData = canvas.toDataURL('image/png');

    // Añade la imagen al PDF
    pdf.addImage(imgData, "PNG", 0, 0);

    // Guarda el PDF en una variable
    const pdfData = pdf.output();

    document.body.appendChild(canvas);
    FetchPostMicrosoftGraph(pdfData);
  });
};
