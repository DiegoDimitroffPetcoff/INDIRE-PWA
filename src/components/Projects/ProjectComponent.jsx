import { useState, useEffect, lazy, Suspense } from "react";

import "../../styles/components/projects/ProjectComponent.css";

import SpinnerComponent from "../Common/Spinner.jsx";
import Button from "react-bootstrap/Button";
import { MdArrowBackIosNew } from "react-icons/md";

const Project = lazy(() => import("./Project/Project.jsx"));
const ProjectDetail = lazy(() => import("./ProjectDetail/ProjectDetail.jsx"));

const ProjectComponent = ({ data, setData, sections, setSections }) => {
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
