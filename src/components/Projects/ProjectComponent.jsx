import { useState } from "react";

import { AddProject } from "./AddProject/AddProject.jsx";
import { ProjectDetail } from "./ProjectDetail/ProjectDetail.jsx";

import Button from "react-bootstrap/Button";
import { MdArrowBackIosNew } from "react-icons/md";

export const ProjectComponent = ({ data, setData, sections, setSections }) => {
  const [showPreview, setShowPreview] = useState(false);

  return (
    <>
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
