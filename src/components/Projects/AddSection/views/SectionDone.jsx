import { Button } from "react-bootstrap";

const SectionDone = ({
  content,
  id,
  title,
  subSectionEditable,
  setSubSectionEditable,
}) => {
  console.log(content);
  return (
    <>
      {" "}
      <div
        id="SubSectionDone"
        style={{
          display: "block",
          width: "100%",
          padding: ".375rem .75rem",
          minHeight: "150px",
          fontSize: "1rem",
          fontWeight: 400,
          lineHeight: 1.5,
          color: "var(--bs-body-color)",
          WebkitAppearance: "none",
          MozAppearance: "none",
          appearance: "none",
          backgroundColor: "var(--bs-body-bg)",
          backgroundClip: "padding-box",
          border: "var(--bs-border-width) solid var(--bs-border-color)",
          borderRadius: "var(--bs-border-radius)",
          transition:
            "border-color .15s ease-in-out, box-shadow .15s ease-in-out",
        }}
      >
        <h3>
          {id}.{id++}.{title}
        </h3>
        <h3>{content}</h3>
      </div>
      <Button onClick={() => setSubSectionEditable(!subSectionEditable)}>
        Edit
      </Button>
    </>
  );
};
export default SectionDone;
