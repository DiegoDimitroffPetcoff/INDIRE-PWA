import { AddInput } from "../../../hooks/AddInput";

const AddSection = ({id, subSection, setAddSubSection}) => {
  console.log(subSection);
  console.log(subSection[id]);
  const newObj = {
    
    subSection: [],
    id: null,
    setContent: (value) => {},
    title: null,
    templates: null,
    key: null
  };
  
  return (
    <div style={{ padding: "20px" }}>
      <AddInput Content={subSection[id]}/>
    </div>
  );
};
export default AddSection;
/*     {
      content: "",
      title: "INTRODUÇÃO",
      subSection: [],
      template: Introduction,
     */

/*                   <AddInput
                    Content={section.content}
                    subSection={section.subSection} []
                    id={index}
                    setContent={(value) => {
                      const updatedSection = [...sections];
                      updatedSection[index].content = value;
                      setSections(updatedSection);
                    }}
                    title={section.title}
                    templates={section.template}
                    key={index}
                  /> */
