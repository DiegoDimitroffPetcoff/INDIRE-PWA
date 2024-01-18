import jsPDF from "jspdf";

export const PDFMaker = (data) => {
  const { title, address, description } = data;

  //jsPDF("portrait or p//landscape or l", "", "paper size: ")
  const doc = new jsPDF("p","in","a4","",false); //ppi 72
  //doc.text(title, 10, 10);
  //doc.text(description, 0, 30);

  //margin lines: A4 = inch w:8.25 / h:11.75 -> h:11.75 - 0.5 = 11.25 (Calculate the left line)
  //margin lines: A4 = inch w:8.25 / h:11.75 -> w:8.25 - 0.5  = 7.75 (Calculate the rigth line)
  doc.setDrawColor("black");
  doc.setLineWidth(1/ 72);

  //MARGINS SETTINS
  //doc.line(x, y, weight, height)
  doc.line(0.5, 0.5, 0.5, 11.25)
  doc.line(7.75, 0.5, 7.75, 11.25)

  //Break de long text
  const textlines = doc.setFont("")
  .setFontSize(12)
  .splitTextToSize(description, 7.25);

  let verticalOffset = 0.5;
  doc.text(0.5, verticalOffset + 12/72, textlines)
  verticalOffset += (textlines.length + 0.5) * 12/ 72;


  return doc;
};
