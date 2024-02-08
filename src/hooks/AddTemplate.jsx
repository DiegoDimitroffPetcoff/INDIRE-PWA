import Button from "react-bootstrap/Button";

import Form from "react-bootstrap/Form";
export const AddTemplate = ({
  templates,
  prop,
  setState,
  setFormToAdd,
  formToAdd,
}) => {
  function addTemplate(template) {
    console.log("si");
    const newTemplate = templates.push(template)
    console.log(newTemplate);
    return newTemplate
  }
  return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Contente</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={prop}
          onChange={(e) => setState(e.target.value)}
        />
      </Form.Group>
      <Button variant="danger" onClick={() => setFormToAdd(!formToAdd)}>
        Cancelar
      </Button>
      <Button variant="success" onClick={()=>addTemplate(prop)}>
        Manter
      </Button>
    </Form>
  );
};
