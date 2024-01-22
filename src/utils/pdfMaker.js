import jsPDF from "jspdf";

export const PDFMaker = (data) => {
  const { title, address, description } = data;

  const doc = new jsPDF("p", "in", "a4", "", false);



  doc.setFont("helvetica", "bold");
  doc.setFontSize(18);
  

  const textWidth = 7.25;
  const maxTextHeight = 10.75; // Adjust the maximum height to leave space for other content
  const textlines = doc.setFont("").setFontSize(12).splitTextToSize(description, textWidth);

  let verticalOffset = 0.7; // Adjust the vertical offset
  textlines.forEach((line) => {
    if (verticalOffset < maxTextHeight) {
      doc.text(line, 1, verticalOffset);
      verticalOffset += 12 / 72; // Adjust the line height
    } else {
      // Break if the text exceeds the maximum height
      return;
    }
  });

  // Add three lines of text below the existing code
  doc.setFont("helvetica", "normal");
  doc.setFontSize(12);
  verticalOffset += 0.2; // Adjust the vertical offset
  doc.text("Line 1: Your first additional line of text. Your first additional line of text. Your first additional line of text. Your first additional line of text. Your first additional line of text. Your first additional line of text. Your first additional line of text. Your first additional line of text. Your first additional line of text. Your first additional line of text. Your first additional line of text. Your first additional line of text. Your first additional line of text. Your first additional line of text. Your first additional line of text.", 1, verticalOffset);
  verticalOffset += 0.2;
  doc.text("Line 2: Your second additional line of text.", 1, verticalOffset);
  verticalOffset += 0.2;
  doc.text("Line 3: Your third additional line of text.", 1, verticalOffset);

  return doc;
};
