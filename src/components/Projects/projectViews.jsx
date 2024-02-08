import { useState } from "react";

import { AddProject } from "./AddProject/AddProject.jsx";
import { ProjectDetail } from "./ProjectDetail/ProjectDetail.jsx";

export const ProjectComponent = () => {
  const [data, setData] = useState({});
  const [sections, setSections] = useState([
    { content: "", title: "INTRODUÇÃO" },
    { content: "", title: "DESCRIÇÃO GERAL" },
    { content: "", title: "INSPEÇÃO TÉCNICA AO EDIFÍCIO" },
    { content: "", title: "ELEMENTOS BASE" },
    { content: "", title: "HISTÓRICO DE INTERVENÇÕES" },
    {
      content: "",
      title: "ELEMENTOS INSPECIONADOS E MEDIDAS CORRETIVAS PROPOSTAS",
    },
    { content: "", title: "RECOMENDAÇÕES E AÇÕES DE MANUTENÇÃO" },
    { content: "", title: "CONCLUSÕES" },
  ]);
  const [showPreview, setShowPreview] = useState(false);

  return (
    <>
      {showPreview ? (
        <>
          <ProjectDetail
            data={data}
            sections={sections}
            setSections={setSections}
          />

          <button
            onClick={() => {
              setShowPreview(!showPreview);
            }}
          >
            {" "}
            BACK
          </button>
        </>
      ) : (
        <AddProject
          data={data}
          sections={sections}
          setSections={setSections}
          setData={setData}
          setShowPreview={setShowPreview}
          showPreview={showPreview}
        />
      )}
    </>
  );
};
