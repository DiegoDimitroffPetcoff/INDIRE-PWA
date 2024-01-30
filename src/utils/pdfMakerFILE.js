import { FetchPostMicrosoftGraph } from "../services/fetchPostMicrosoftGraph";

//UTILS TO CONVERT FILE PDF IN BLOB TO BE SENT
export const PDFMakerFILE = async (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (event) => {
      const pdfBytes = new Uint8Array(event.target.result);

      const blob = new Blob([pdfBytes], { type: "application/pdf" });
      FetchPostMicrosoftGraph(blob);
    };

    reader.onerror = (error) => {
      reject(error);
    };

    reader.readAsArrayBuffer(file);
  });
};
