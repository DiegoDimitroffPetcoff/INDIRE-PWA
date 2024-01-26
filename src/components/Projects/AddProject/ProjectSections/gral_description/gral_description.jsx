import Templates from "../../../Templates/Gral_description.json";

export const Gral_description = ({ gral_description, setGral_description }) => {
  const { template1, template2, template3 } = Templates.templates;


  return (
    <>
      {" "}
      <div id="prueba" className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
        ESCRIÇÃO GERAL
        </label>
        <textarea
          type="text"
          rows={10}
          className="form-control"
          value={gral_description}
          placeholder="Example:ESCRIÇÃO GERAL"
          onChange={(e) => {
            setGral_description(e.target.value);
          }}
          
        />
      </div>
      {/* TEMPLATES */}
      <div
        className="btn-group"
        role="group"
        aria-label="Vertical radio toggle button group"
      >
        <input
          type="radio"
          className="btn-check"
          name="vbtn-radio"
          id="vbtn-radio1"
          autoComplete="off"
          onClick={() => {
            setGral_description(template1);
          }}
        />
        <label className="btn btn-outline-danger" htmlFor="vbtn-radio1">
          Template 1
        </label>

        <input
          type="radio"
          className="btn-check"
          name="vbtn-radio"
          id="vbtn-radio2"
          autoComplete="off"
          onClick={() => {
            setGral_description(template2);
          }}
        />
        <label className="btn btn-outline-danger" htmlFor="vbtn-radio2">
          Template 2
        </label>

        <input
          type="radio"
          className="btn-check"
          name="vbtn-radio"
          id="vbtn-radio3"
          autoComplete="off"
          onClick={() => {
            setGral_description(template3);
          }}
        />
        <label className="btn btn-outline-danger" htmlFor="vbtn-radio3">
          Template 3
        </label>
      </div>
    </>
  );
};
