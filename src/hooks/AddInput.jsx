import Button from "react-bootstrap/Button";
import { BTNTemplates } from "../hooks/BTNtemplates";
import { useState } from "react";
import { AddTemplate } from "./AddTemplate";

export const AddInput = ({ Prop, setProp, title, templates }) => {
  const [formToAdd, setFormToAdd] = useState(false);
  return (
    <>
      {" "}
      <div id="prueba" className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          {title}
        </label>
        <textarea
          type="text"
          rows={5}
          className="form-control"
          value={Prop}
          placeholder={"EXAMPLE:" + title}
          onChange={(e) => {
            setProp(e.target.value);
          }}
        />
      </div>
      {formToAdd ? (
        <>
          <AddTemplate
            templates={templates}
            prop={Prop}
            setState={setProp}
            setFormToAdd={setFormToAdd}
            formToAdd={formToAdd}
          />
          <BTNTemplates templates={templates} setState={setProp} />
        </>
      ) : (
        <>
          <BTNTemplates templates={templates} setState={setProp} />
          <Button variant="success" onClick={() => setFormToAdd(!formToAdd)}>
            +
          </Button>
        </>
      )}
    </>
  );
};
