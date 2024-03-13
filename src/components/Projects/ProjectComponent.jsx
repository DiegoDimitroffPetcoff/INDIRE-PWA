import { useState, useEffect, lazy, Suspense } from "react";
import Button from "react-bootstrap/Button";
import { MdArrowBackIosNew } from "react-icons/md";

import SpinnerComponent from "../Common/Spinner.jsx";

const AddProject = lazy(() => import("./AddProject/AddProject.jsx"));
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
        <AddProject
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
