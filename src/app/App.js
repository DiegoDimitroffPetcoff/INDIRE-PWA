import React, { useState, useEffect, lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Providers, ProviderState } from "@microsoft/mgt-element";

import Introduction from "./components/Projects/Templates/Introduction.json";
import Gral_description from "./components/Projects/Templates/Gral_description.json";
import Building_technical_inspection from "./components/Projects/Templates/building_technical_inspection.json";
import Base_element from "./components/Projects/Templates/base_element.json";
import Intervention_history from "./components/Projects/Templates/intervention_history.json";
import Element from "./components/Projects/Templates/element.json";
import Recommendations from "./components/Projects/Templates/recommendations.json";
import Conclusions from "./components/Projects/Templates/conclusions.json";
import Cost from "./components/Projects/Templates/cost.json";
import SpinnerComponent from "./components/Common/Spinner.jsx";

const SideBar = lazy(() => import("./components/Common/SideBar.jsx"));
const UpploadFile = lazy(() =>
  import("./components/UpploadFile/UpploadFile.jsx")
);
const ProjectComponent = lazy(() =>
  import("./components/Projects/ProjectComponent.jsx")
);
const ProjectList = lazy(() =>
  import("./components/Projects/ProjectList/ProjectList.jsx")
);
const Log = lazy(() => import("./components/Common/Login.jsx"));
const NotFound = lazy(() => import("./components/Common/NotFound.jsx"));

function App() {
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
    <Suspense fallback={<SpinnerComponent />}>
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
    </Suspense>
  );
}

export default App;
