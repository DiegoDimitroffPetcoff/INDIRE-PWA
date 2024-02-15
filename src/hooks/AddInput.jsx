import Button from "react-bootstrap/Button";
import { BTNTemplates } from "../hooks/BTNtemplates";
import { useState } from "react";
import { AddTemplate } from "./AddTemplate";

import { IoMdAdd } from "react-icons/io";
import { MdOutlineClear } from "react-icons/md";

export const AddInput = ({ Prop, setProp, title, templates }) => {
  const [formToAdd, setFormToAdd] = useState(false);
  function cleatInput() {
    setProp("");
  }

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
              boxShadow: "inset rgba(0, 0, 0, 0.5) 0px -8px 11px 0px",
            }}
            onClick={() => setFormToAdd(!formToAdd)}
          >
            {" "}
            <IoMdAdd />
          </Button>
          {Prop ? (
            <Button
              variant="danger"
              style={{
                boxShadow: "inset rgba(0, 0, 0, 0.5) 0px -8px 11px 0px",
              }}
              onClick={() => cleatInput()}
            >
              {" "}
              <MdOutlineClear />
            </Button>
          ) : null}
          <div
            id="prueba"
            className="mb-3"
            style={{
              padding: "0px 0px 10px",
              borderRadius: "50%",
            }}
          >
            <textarea
              type="text"
              style={{ backgroundColor: Prop ? "#19875457" : "" }}
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
