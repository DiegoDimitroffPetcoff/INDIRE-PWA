import { useState } from "react";

import { AddProject } from "./AddProject/AddProject.jsx";
import { ProjectDetail } from "./ProjectDetail/ProjectDetail.jsx";

import Introduction from "./Templates/Introduction.json";
import Gral_description from "./Templates/Gral_description.json";
import Building_technical_inspection from "./Templates/building_technical_inspection.json";
import Base_element from "./Templates/base_element.json";
import Intervention_history from "./Templates/intervention_history.json";
import Element from "./Templates/element.json";
import Recommendations from "./Templates/recommendations.json";
import Conclusions from "./Templates/conclusions.json";
import Cost from "./Templates/cost.json";

import Button from "react-bootstrap/Button";

export const ProjectComponent = () => {
  const [data, setData] = useState({});
  const [sections, setSections] = useState([
    { content: "", title: "INTRODUÇÃO", template: Introduction },
    { content: "", title: "DESCRIÇÃO GERAL", template: Gral_description },
    {
      content: "",
      title: "INSPEÇÃO TÉCNICA AO EDIFÍCIO",
      template: Building_technical_inspection,
    },
    { content: "", title: "ELEMENTOS BASE", template: Base_element },
    {
      content: "",
      title: "HISTÓRICO DE INTERVENÇÕES",
      template: Intervention_history,
    },
    {
      content: "",
      title: "ELEMENTOS INSPECIONADOS E MEDIDAS CORRETIVAS PROPOSTAS",
      template: Element,
    },
    {
      content: "",
      title: "RECOMENDAÇÕES E AÇÕES DE MANUTENÇÃO",
      template: Recommendations,
    },
    { content: "", title: "CONCLUSÕES", template: Conclusions },
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

          <Button
            variant="secondary"
            onClick={() => {
              setShowPreview(!showPreview);
            }}
          >
            {" "}
            BACK
          </Button>
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
