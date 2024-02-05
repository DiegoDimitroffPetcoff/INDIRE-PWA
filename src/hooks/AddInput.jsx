import { BTNTemplates } from "../../src/hooks/BTNtemplates";

export const AddInput = ({ Prop, setProp, title, placeholder, templates }) => {
  console.log(title);
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
          placeholder={"EXAMPLE:" + placeholder}
          onChange={(e) => {
            setProp(e.target.value);
          }}
        />
      </div>
      <BTNTemplates templates={templates} setState={setProp}/>
    </>
  );
};
