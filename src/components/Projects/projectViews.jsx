import { useState } from "react";

import { AddProject } from "./AddProject/AddProject.jsx";
import { ProjectDetail } from "./ProjectDetail/ProjectDetail.jsx";

export const ProjectComponent = () => {
  const [data, setData] = useState({});
  const [showPreview, setShowPreview] = useState(false);

  return (
    <>
      {showPreview ? (
        <>
          <ProjectDetail
            data={data}
            setShowPreview={setShowPreview}
            showPreview={showPreview}
          />

          <button
            style={{ background: "green" }}
            onClick={() => {
              setShowPreview(!showPreview);
            }}
          >
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
    </>
  );
};
