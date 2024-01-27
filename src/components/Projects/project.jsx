import { useState } from "react";
import { renderToStaticMarkup } from "react-dom/server";

import { AddProject } from "./AddProject/AddProject.jsx";
import { ProjectDetail } from "./ProjectDetail/ProjectDetail.jsx";

import { PDFMakerHTML } from "../../utils/pdfMakerHTML.js";

export const ProjectComponent = () => {
  const [formData, setFormData] = useState({});
  const [showPreview, setShowPreview] = useState(false);


  const createPDF = async (e) => {
    try {
      const componentToRender = showPreview ? (
        <ProjectDetail />
      ) : (
        <AddProject />
      );
     // console.log(typeof window.print());
      const htmlString = renderToStaticMarkup(componentToRender);
      PDFMakerHTML(document.getElementById("projectPDF"));
    } catch (error) {
      console.log("ERROR: " + error);
    }
  };
  return (
    <>
      {showPreview ? <ProjectDetail /> : <AddProject />}
      <button onClick={createPDF}>CREAR PDF</button>
      <button onClick={() => setShowPreview(!showPreview)}>
        CAMBIAR VISTA
      </button>
    </>
  );
};
