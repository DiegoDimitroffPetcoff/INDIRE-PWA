import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import { SideBar } from "./components/Common/SideBar.jsx";
import { UpploadFile } from "./components/Projects/UpploadFile/UpploadFile.jsx";
import { ProjectComponent } from "./components/Projects/ProjectComponent.jsx";
import { ProjectList } from "./components/Projects/ProjectList/ProjectList.jsx";

import Introduction from "./components/Projects/Templates/Introduction.json";
import Gral_description from "./components/Projects/Templates/Gral_description.json";
import Building_technical_inspection from "./components/Projects/Templates/building_technical_inspection.json";
import Base_element from "./components/Projects/Templates/base_element.json";
import Intervention_history from "./components/Projects/Templates/intervention_history.json";
import Element from "./components/Projects/Templates/element.json";
import Recommendations from "./components/Projects/Templates/recommendations.json";
import Conclusions from "./components/Projects/Templates/conclusions.json";
import Cost from "./components/Projects/Templates/cost.json";
import { Log } from "./components/Common/Login.jsx";

import { Providers, ProviderState } from "@microsoft/mgt-element";
import { NotFound } from "./components/Common/NotFound.jsx";

function App() {
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
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const updateLoginStatus = () => {
      if (Providers.globalProvider) {
        setIsLoggedIn(
          Providers.globalProvider.state === ProviderState.SignedIn
        );
      }
    };
    updateLoginStatus();
    Providers.onProviderUpdated(updateLoginStatus);
    return () => {
      Providers.removeProviderUpdatedListener(updateLoginStatus);
    };
  }, []);
  return (
    <>
      {isLoggedIn ? (
        <>
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
              element={<ProjectList data={data} setData={setData} />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </>
      ) : (
        <Routes>
          <Route path="/" element={<Log />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      )}
    </>
  );
}

export default App;
