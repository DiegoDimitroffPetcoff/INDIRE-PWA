import { useState } from "react";

import { AddProject } from "./AddProject/AddProject.jsx";
import { ProjectDetail } from "./ProjectDetail/ProjectDetail.jsx";

export const ProjectComponent = () => {
  const [data, setData] = useState({});
  const [showPreview, setShowPreview] = useState(false);
  console.log("se renderiza projectView");

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
