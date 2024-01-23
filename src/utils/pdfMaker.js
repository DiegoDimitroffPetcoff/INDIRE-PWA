import jsPDF from "jspdf";

export const PDFMaker = (data) => {
  const { title, address, description } = data;

  const doc = new jsPDF("p", "in", "a4", "", false);



  doc.setFont("helvetica", "bold");
  doc.setFontSize(18);
  

  const textWidth = 7.25;
  const maxTextHeight = 10.75; // Adjust the maximum height to leave space for other content
  const textlines = doc.setFont("").setFontSize(12).splitTextToSize(description,title, address,  textWidth);

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
  doc.text(title, 1, verticalOffset);
  verticalOffset += 0.2;
  doc.text(description, 1, verticalOffset);
  verticalOffset += 0.2;
  doc.text(address, 1, verticalOffset);

  return doc;
};
