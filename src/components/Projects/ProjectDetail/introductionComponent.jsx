//import LogoImage from "../../../assets/INDIRE_LOGO.PNG";
import "./ProjectDetail.css";
export const IntroductionComponent = ({ IntroductionMocks }) => {
  return (
    <article className="basicContainer">
      <h1>1. INTRODUÇÃO</h1>
      {IntroductionMocks.text}
    </article>
  );
};
