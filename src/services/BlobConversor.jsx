//UTILS TO CONVERT FILE PDF IN BLOB TO BE SENT
export const BlobConversor = async (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (event) => {
      const pdfBytes = new Uint8Array(event.target.result);
      const pdfBlob = new Blob([pdfBytes], { type: "application/pdf" });
      resolve(pdfBlob);
    };

    reader.onerror = (error) => {
      reject(error);
    };

    reader.readAsArrayBuffer(file);
  });
};
