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
              margin: "0px 100px 1px 10px",
            }}
            onClick={() => setFormToAdd(!formToAdd)}
          >
            {" "}
            +
          </Button>
          <div
            id="prueba"
            className="mb-3"
            style={{
              padding: "0px 0px 50px",
              borderRadius: "15px",
            }}
          >
            <textarea
              type="text"
              rows={5}
              className="form-control"
              value={Prop}
              placeholder={title}
              onChange={(e) => {
                setProp(e.target.value);
              }}
            />
          </div>
        </>
      )}
    </>
  );
};
