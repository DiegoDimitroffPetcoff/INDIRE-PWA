import Button from "react-bootstrap/Button";
import { BTNTemplates } from "../hooks/BTNtemplates";
import { useState } from "react";
import { AddTemplate } from "./AddTemplate";

export const AddInput = ({ Prop, setProp, title, templates }) => {
  const [formToAdd, setFormToAdd] = useState(false);
  return (
    <>
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
          <Button
            variant="success"
            style={{
              borderRadius: "50%",
              boxShadow: "inset rgba(0, 0, 0, 0.5) 0px -8px 11px 0px",
              margin: "10px",
            }}
            onClick={() => setFormToAdd(!formToAdd)}
          >
            {" "}
            +
          </Button>
        </>
      )}
      <div
        id="prueba"
        className="mb-3"
        style={{       
          padding: "10px 0",
          borderRadius: "15px",
        }}
      >
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
    </>
  );
};
