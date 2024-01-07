import  React  from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home.jsx";
import { AddProjectPage } from "./pages/AddProjectPage.jsx";
import { ProjectDitailPage } from "./pages/ProjectDitail.jsx";
import  GrealInfoMocks  from "./mocks/GralInfoMock.json";

export const Context = React.createContext();
function App() {
  return (
    <Context.Provider value={GrealInfoMocks}>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AddProjectPage" element={<AddProjectPage />} />
        <Route path="/ProjectDitail/:id" element={<ProjectDitailPage />} />
      </Routes>
    </Context.Provider>
  );
}

export default App;
