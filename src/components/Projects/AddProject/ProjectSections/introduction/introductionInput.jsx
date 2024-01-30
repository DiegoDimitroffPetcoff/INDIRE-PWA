export const IntroductionInput = ({ introduction, setIntroduction }) => {


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
    </>
  );
};
