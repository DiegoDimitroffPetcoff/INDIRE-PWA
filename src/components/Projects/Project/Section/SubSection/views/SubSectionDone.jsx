import { Button } from "react-bootstrap";

const SubSectionDone = ({
  subSection,
  content,
  id,
  title,
  subSectionEditable,
  setSubSectionEditable,
  subProjectCounts,
}) => {
  console.log(subSection);
  return (
    <>
      {" "}
      <div
        id="SubSectionDone"
        style={{
          display: "block",
          width: "100%",
          minHeight: "250px",
          fontSize: "1rem",
          fontWeight: 400,
          lineHeight: 1.5,
          backgroundClip: "padding-box",
          border: "var(--bs-border-width) solid var(--bs-border-color)",
          borderRadius: "var(--bs-border-radius)",
          padding: "5% 1%",
        }}
      >
        {/*    <h1>
          {subProjectCounts}
          {title}
        </h1>
 */}
        {subSection
          ? subSection.map((section) => (
              <>
                <h1>
                  {subProjectCounts}
                  {section.title}
                </h1>
                <h1>{section.content}</h1>
              </>
            ))
          : "no"}
        {subSection.subSection
          ? subSection.subSection.map((subSection) => (
              <>
                <h1>
                  {subProjectCounts}
                  {subSection.title}
                </h1>
                <h1>{subSection.content}</h1>
              </>
            ))
          : "no"}
      </div>
      <Button onClick={() => setSubSectionEditable(!subSectionEditable)}>
        Edit
      </Button>
    </>
  );
};
export default SubSectionDone;
