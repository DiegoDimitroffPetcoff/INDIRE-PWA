export const Gral_description = ({ Gral_description, setGral_description }) => {
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
          value={Gral_description}
          placeholder="Example:ESCRIÇÃO GERAL"
          onChange={(e) => {
            setGral_description(e.target.value);
          }}
        />
      </div>
    </>
  );
};
