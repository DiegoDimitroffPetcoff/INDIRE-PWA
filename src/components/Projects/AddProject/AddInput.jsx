import { BTNTemplates } from "../../../hooks/BTNtemplates";

export const AddInput = ({ Prop, setProp, title, placeholder, templates }) => {
  return (
    <>
      {" "}
      <div id="prueba" className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          INTRODUÇÃO
        </label>
        <textarea
          type="text"
          rows={5}
          className="form-control"
          value={Prop}
          placeholder={placeholder}
          onChange={(e) => {
            setProp(e.target.value);
          }}
        />
      </div>
      <BTNTemplates templates={templates} setState={setProp}/>
    </>
  );
};
