import Templates from "../../../Templates/Introduction.json";

export const IntroductionInput = ({ introduction, setIntroduction }) => {
  const { template1, template2, template3 } = Templates.templates;
  return (
    <>
      {" "}
      <div id="prueba" className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          INTRODUÇÃO
        </label>
        <textarea
          type="text"
          rows={10}
          className="form-control"
          value={introduction}
          placeholder="Example: Description of the project"
          onChange={(e) => {
            setIntroduction(e.target.value);
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
            setIntroduction(template1);
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
            setIntroduction(template2);
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
            setIntroduction(template3);
          }}
        />
        <label className="btn btn-outline-danger" htmlFor="vbtn-radio3">
          Template 3
        </label>
      </div>
    </>
  );
};
