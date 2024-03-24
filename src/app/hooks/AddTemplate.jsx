import { useState } from "react";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

import Form from "react-bootstrap/Form";
import { BTNTemplates } from "../hooks/BTNtemplates";

export const AddTemplate = ({
  templates,
  Content,
  setState,
  setAddTemplate,
  addTemplate,
}) => {
  const [alertTemplate, setAddTemplateAdded] = useState(false);
  function addTemplate(template) {
    setAddTemplateAdded(true);

    const newTemplate = templates.push(template);
    setAddTemplate(!addTemplate);
    return newTemplate;
  }
  return (
    <>
      {alertTemplate && <Alert variant="success">Added Template Success</Alert>}
      <Form
        style={{
          position: "absolute",
          width: "80%",
          backgroundColor: "#6c757d",
          padding: "10px",
          zIndex: 99,
          color: "white",
          borderRadius: "15px",
          margin: "5px",
          transition: "opacity 0.3s ease", // Agrega transición de opacidad
          opacity: "2", // Hace que la ventana aparezca gradualmente
        }}
      >
        <BTNTemplates templates={templates} setState={setState} />

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Contente</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            value={Content}
            onChange={(e) => setState(e.target.value)}
          />
        </Form.Group>
        <Button
          variant="danger"
          style={{
            boxShadow: " rgba(0, 0, 0, 0.5) 0px 0px 11px 0px",
          }}
          onClick={() => setAddTemplate(!addTemplate)}
        >
          Cancelar
        </Button>
        <Button
          variant="success"
          style={{
            boxShadow: " rgba(0, 0, 0, 0.5) 0px 0px 11px 0px",
            margin: "5px",
          }}
          onClick={() => addTemplate(Content)}
        >
          Manter
        </Button>
      </Form>
    </>
  );
};
