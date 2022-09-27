import { InputArrayFilter } from "../components/InputArrayFilter";
import skillsArray from "../data/dbSkills.json";
import comuniArray from "../data/dbComuni.json";
import { useLocation, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

export function Skills() {
  const { state } = useLocation();
  const { arr } = state;
  const [toPopulate, setToPopulate] = useState(arr);

  useEffect(() => {
    console.log(toPopulate);
  }, [toPopulate]);

  return (
    <div className="skillsPageContainer">
      <div className="skillsContainer">
        <h3>Le tue skill</h3>
        <InputArrayFilter
          array={skillsArray}
          contentType="skill"
          showAges={true}
          toPopulate={setToPopulate}
          objKey="skills"
        />
      </div>
      <div className="lavoroContainer">
        <h3>Sede di lavoro</h3>
        <InputArrayFilter
          array={comuniArray}
          contentType="comuni"
          showAges={false}
          toPopulate={setToPopulate}
          objKey="sedeLavoro"
        />
      </div>
    </div>
  );
}
