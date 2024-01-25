import jsPDF from "jspdf";

export const PDFMaker = (data) => {
  const { title, sub_title, address, description, introduction } = data;
  const elementsOnFirstPage = [title, sub_title, address];
  const elementsToPaginate = [description, introduction];
  const doc = new jsPDF("p", "in", "a4", "", false);

  // Página de formato
  doc.setDrawColor("red");
  doc.setLineWidth(1 / 72);
  doc.line(1.5, 1.5, 1.5, 11.25);
  doc.line(8.85, 1.5, 8.85, 11.25);
  doc.setLineWidth(1.5);
  doc.line(20, 35, 60, 35);

  // Ancho y altura
  const maxWidth = 7.25; // Convertir pulgadas a puntos (1 pulgada = 72 puntos)
  let verticalOffset = 0.5;

  // Agregamos elementos a la primera página
  elementsOnFirstPage.forEach((data) => {
    const textLines = doc.splitTextToSize(data, maxWidth);
    doc.text(textLines, 0.5, verticalOffset + 12 / 72);
    verticalOffset += (textLines.length * 12) / 72 + 0.5;
  });

  // Agregamos elementos paginados
  elementsToPaginate.forEach((data) => {
    const textLines = doc.splitTextToSize(data, maxWidth);

    const uno = verticalOffset + (textLines.length * 12) / 72 + 0.5
  

    // Verificamos si el texto sobrepasará el margen inferior de la página
 
    if (verticalOffset + (textLines.length * 12) / 72 + 0.5 > 11) {
      console.log("se agrega una nueva pagina");
      doc.addPage(); // Agregamos una nueva página si el texto excede la altura de la página
      verticalOffset = 0.5;
    }

    doc.text(textLines, 0.5, verticalOffset + 12 / 72);
    verticalOffset += (textLines.length * 12) / 72 + 0.5;
  });

  const pdfDataUrl = doc.output("datauristring");
  window.open(pdfDataUrl, "_blank");

  return doc;
};

