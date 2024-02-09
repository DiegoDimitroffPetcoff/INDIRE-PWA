import Button from "react-bootstrap/Button";
export const BTNTemplates = ({ templates, setState }) => {
  function handleTemplate(value, e) {
    e.preventDefault();
    let templateSelected = templates[value];
    setState(templateSelected);
  }

  return (
    <div
      className="btn-group"
      role="group"
      aria-label="Vertical radio toggle button group"
    >
      {templates.map((template, value) => (
        <>
          {" "}
          <Button
            variant="dark"
            key={value}
           // className="btn btn-outline-danger"
           // htmlFor="vbtn-radio2"
            onClick={(e) => handleTemplate(value, e)}
          >
            Template {value + 1}
          </Button>
        </>
      ))}
    </div>
  );
};
