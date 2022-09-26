import { InputArrayFilter } from "../components/InputArrayFilter";
import skillsArray from "../data/dbSkills.json";
import comuniArray from "../data/dbComuni.json";
import { useLocation, useParams } from "react-router-dom";

export function Skills() {
  const { state } = useLocation();
  const { arr } = state;

  console.log(arr);
  return (
    <div className="skillsPageContainer">
      <div className="skillsContainer">
        <h3>Le tue skill</h3>
        <InputArrayFilter
          array={skillsArray}
          contentType="skill"
          showAges={true}
        />
      </div>
      <div className="lavoroContainer">
        <h3>Sede di lavoro</h3>
        <InputArrayFilter
          array={comuniArray}
          contentType="comuni"
          showAges={false}
        />
      </div>
    </div>
  );
}
