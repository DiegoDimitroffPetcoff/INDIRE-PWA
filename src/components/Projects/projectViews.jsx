import { useState } from "react";

import { AddProject } from "./AddProject/AddProject.jsx";
import { ProjectDetail } from "./ProjectDetail/ProjectDetail.jsx";
const PreState = {
  project_id: 1,
  user: 1,
  title: "",
  sub_title: "",
  main_img_url: "",
  address: "",
  project_number: "Ref.ª 19.11.12_RELATÓRIO_INSPEÇÃO_v1.0",
  sections: [
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
  ],
};

export const ProjectComponent = () => {
  const [data, setData] = useState(PreState);
  const [showPreview, setShowPreview] = useState(false);

  return (
    <>
      {showPreview ? (
        <>
          <ProjectDetail data={data} />

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
          setData={setData}
          setShowPreview={setShowPreview}
          showPreview={showPreview}
        />
      )}
      <button
        onClick={() => {
          console.log(data);
        }}
      >
        VER DATA
      </button>
    </>
  );
};
