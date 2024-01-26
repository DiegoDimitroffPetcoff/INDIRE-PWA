import jsPDF from "jspdf";
import { FetchPostMicrosoftGraph } from "../services/fetchPostMicrosoftGraph";

export const PDFMakerHTML = async (html) => {
  var doc = new jsPDF("p","px",[1000,1400]);

  await doc.html(html, {
    callback: async function (doc) {
      //doc.save();
      let pdf = doc.output("datauristring");
      window.open(pdf, "_blank");
      var url = pdf.split(",");
      var base64Data = url[1];
      var decodedData = window.atob(base64Data);

      //CONVERT TO A BLOB OBJECT
      const blob = new Blob([decodedData], { type: "application/pdf" });
      FetchPostMicrosoftGraph(blob);
      return blob;
    },
    x: 250,
    y: 0,
  });
  return doc;
};
