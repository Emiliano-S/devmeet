import { useEffect } from "react";
import { useState } from "react";
import FormRow from "./FormRow";

const linksObject = {
  linkedin: "",
  github: "",
  sitoWeb: "",
};

export function LinksForm({ toPopulate }) {
  const [links, setLinks] = useState(linksObject);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLinks((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    toPopulate((prevValue) => ({ ...prevValue, link: links }));
  }, [links]);

  return (
    <>
      <div className="skillsContainer">
        <h3>Links</h3>
        <form className="worksExperienceForm" onSubmit={handleSubmit}>
          <FormRow
            textType
            text={"Linkedin"}
            name={"linkedin"}
            handleChange={handleChange}
            notRequired={true}
          />
          <FormRow
            textType
            text={"GitHub"}
            name={"github"}
            handleChange={handleChange}
          />
          <FormRow
            textType
            text={"Sito personale"}
            name={"sitoWeb"}
            handleChange={handleChange}
          />
        </form>
      </div>
    </>
  );
}
