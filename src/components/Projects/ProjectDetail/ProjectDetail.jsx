import LogoImage from "../../../assets/INDIRE_LOGO.png";
import { DateMaker } from "../../../utils/dateMaker";
import "./ProjectDetail.css";

export const ProjectDetail = ({ data, setShowPreview, showPreview }) => {
  return (
    <>
      <article id="projectPDF" style={{ width: "100%", height: "100vh" }}>
        <figure>
          <img className="logo" src={LogoImage} alt="INDIRE LOGO" />
        </figure>
        <h1>{data.title}</h1>
        <address>{data.address}</address>
        <img className="main_img_url" src={data.main_img_url} alt="imagen" />
        <span>{DateMaker()}</span>
        <p>{data.project_number}</p>
        INTRODUÇÃO
        <p>{data.introduction}</p>
        DESCRIÇÃO GERAL
        <p>{data.gral_description}</p>
        INSPEÇÃO TÉCNICA AO EDIFÍCIO
        <p>{data.building_technical_inspection}</p>
        LEMENTOS BASE
        <p>{data.base_element}</p>
      </article>
      <button
        onClick={() => {
          setShowPreview(!showPreview);
        }}
      >
        BACK
      </button>
    </>
  );
};
