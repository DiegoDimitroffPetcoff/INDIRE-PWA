"use client"
import { useState, useEffect, lazy, Suspense } from "react";

/* import "../../styles/components/projects/ProjectComponent.css"; */

import Introduction from "../../components/Projects/Templates/Introduction.json";
import Gral_description from "../../components/Projects/Templates/Gral_description.json";
import Building_technical_inspection from "../../components/Projects/Templates/building_technical_inspection.json";
import Base_element from "../../components/Projects/Templates/base_element.json";
import Intervention_history from "../../components/Projects/Templates/intervention_history.json";
import Element from "../../components/Projects/Templates/element.json";
import Recommendations from "../../components/Projects/Templates/recommendations.json";
import Conclusions from "../../components/Projects/Templates/conclusions.json";
import Cost from "../../components/Projects/Templates/cost.json";

import SpinnerComponent from "../../components/Common/Spinner.jsx";
import Button from "react-bootstrap/Button";
import { MdArrowBackIosNew } from "react-icons/md";

const Project = lazy(() => import("../../components/Projects/Project/Project.jsx"));
const ProjectDetail = lazy(() => import("../../components/Projects/ProjectDetail/ProjectDetail.jsx"));

const ProjectComponent = () => {
  const [data, setData] = useState({});
  const [sections, setSections] = useState([
    {
      content: "",
      title: "INTRODUÇÃO",
      subSection: [],
      template: Introduction,
    },
    {
      content: "",
      title: "DESCRIÇÃO GERAL",
      subSection: [],
      template: Gral_description,
    },
    {
      content: "",
      title: "INSPEÇÃO TÉCNICA AO EDIFÍCIO",
      subSection: [],
      template: Building_technical_inspection,
    },
    {
      content: "",
      title: "ELEMENTOS BASE",
      subSection: [],
      template: Base_element,
    },
    {
      content: "",
      title: "HISTÓRICO DE INTERVENÇÕES",
      subSection: [],
      template: Intervention_history,
    },
    {
      content: "",
      title: "ELEMENTOS INSPECIONADOS E MEDIDAS CORRETIVAS PROPOSTAS",
      subSection: [],
      template: Element,
    },
    {
      content: "",
      title: "RECOMENDAÇÕES E AÇÕES DE MANUTENÇÃO",
      subSection: [],
      template: Recommendations,
    },
    { content: "", title: "CONCLUSÕES", subSection: [], template: Conclusions },
  ]);
  const [showPreview, setShowPreview] = useState(false);
  useEffect(() => {
    if (data && data.sections) {
      setSections(data.sections);
    }
  }, [data, setSections]);

  return (
    <Suspense fallback={<SpinnerComponent />}>
      {showPreview ? (
        <>
          <Button
            variant="secondary"
            onClick={() => {
              setShowPreview(!showPreview);
            }}
          >
            {" "}
            <MdArrowBackIosNew
              onClick={() => {
                setShowPreview(!showPreview);
              }}
            />
          </Button>
          <ProjectDetail
            data={data}
            sections={sections}
            setSections={setSections}
          />
        </>
      ) : (
        <Project
          data={data}
          sections={sections}
          setSections={setSections}
          setData={setData}
          setShowPreview={setShowPreview}
          showPreview={showPreview}
        />
      )}
    </Suspense>
  );
};
export default ProjectComponent;
