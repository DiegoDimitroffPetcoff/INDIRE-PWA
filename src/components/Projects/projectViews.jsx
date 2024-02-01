import { useState } from "react";
import { renderToStaticMarkup } from "react-dom/server";

import { AddProject } from "./AddProject/AddProject.jsx";
import { ProjectDetail } from "./ProjectDetail/ProjectDetail.jsx";

import { PDFMakerHTML } from "../../utils/pdfMakerHTML.js";

export const ProjectComponent = () => {
  const [data, setData] = useState({});
  const [showPreview, setShowPreview] = useState(false);

  const createPDF = async (e) => {
    try {
      //PDFMakerHTML(document.getElementById("projectPDF"));
      console.log("crate pdf");
     
    } catch (error) {
      console.log("ERROR: " + error);
    }
  };
  return (
    <>
      {showPreview ? (
        <ProjectDetail
          data={data}
          setShowPreview={setShowPreview}
          showPreview={showPreview}
        />
      ) : (
        <AddProject
          setData={setData}
          setShowPreview={setShowPreview}
          showPreview={showPreview}
        />
      )}
      <button style={{ background: "green" }} onClick={createPDF}>
        CREAR PDF
      </button>
      <button
        style={{ background: "green" }}
        onClick={() => {
          setShowPreview(!showPreview);
        }}
      >
        BACK
      </button>
    </>
  );
};
