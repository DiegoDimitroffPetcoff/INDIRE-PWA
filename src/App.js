import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import GrealInfoMocks from "./mocks/GralInfoMock.json";

import { SideBar } from "./components/Common/SideBar.jsx";
import { UpploadFile } from "./components/Projects/UpploadFile/UpploadFile.jsx";
import { ProjectComponent } from "./components/Projects/ProjectComponent.jsx";
import { ProjectList } from "./components/Projects/ProjectList/ProjectList.jsx";
import { EditeProject } from "./components/Projects/EditeProject/EditeProject.jsx";

import Introduction from "./components/Projects/Templates/Introduction.json";
import Gral_description from "./components/Projects/Templates/Gral_description.json";
import Building_technical_inspection from "./components/Projects/Templates/building_technical_inspection.json";
import Base_element from "./components/Projects/Templates/base_element.json";
import Intervention_history from "./components/Projects/Templates/intervention_history.json";
import Element from "./components/Projects/Templates/element.json";
import Recommendations from "./components/Projects/Templates/recommendations.json";
import Conclusions from "./components/Projects/Templates/conclusions.json";
import Cost from "./components/Projects/Templates/cost.json";

export const Context = React.createContext();
function App() {
  const [dataToEdite, setDataToEdite] = useState({});
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
  return (
    <Context.Provider value={GrealInfoMocks}>
      <SideBar />
      <Routes>
        <Route path="/" element={<UpploadFile />} />
        <Route
          path="/AddProjectPage"
          element={
            <ProjectComponent
              data={data}
              setData={setData}
              sections={sections}
              setSections={setSections}
            />
          }
        />
        <Route
          path="/ProjectList"
          element={<ProjectList setDataToEdite={setDataToEdite} />}
        />
        <Route
          path="/EditeProject"
          element={<EditeProject dataToEdite={dataToEdite} />}
        />
      </Routes>
    </Context.Provider>
  );
}

export default App;
