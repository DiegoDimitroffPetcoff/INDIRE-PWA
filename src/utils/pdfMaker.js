import jsPDF from "jspdf";

export const PDFMaker = (data) => {
  const { title, address, description } = data;

  const doc = new jsPDF();
  doc.text(title, 70, 90);
  doc.text(description, 0, 120);
  return doc;
};
