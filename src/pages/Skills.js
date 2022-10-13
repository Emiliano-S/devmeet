import { InputArrayFilter } from "../components/InputArrayFilter";
import skillsArray from "../data/dbSkills.json";
import comuniArray from "../data/dbComuni.json";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import Button from "../components/Button";

export function Skills({ user, company }) {
  const { state } = useLocation();
  const { arr } = state;
  const [toPopulate, setToPopulate] = useState(arr);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user) {
      navigate("/signUp/regUser/workExperiences", {
        state: { arr: toPopulate },
      });
    } else {
      navigate("/signUp/regCompany/addLogo", {
        state: { arr: toPopulate },
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="skillsPageContainer">
        <div className="skillsContainer">
          {user && <h3>Le tue skill</h3>}
          {company && <h3>Competenze ricercate</h3>}
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
        <div className="container-continue-button">
          <Button
            submit
            type="submit"
            form="user-info"
            value="Submit"
            bgColor={"yellow"}
            wd={"50%"}
            hg={"3em"}
            text={"CONTINUA"}
            textColor={"rgb(54,71,100)"}
          />
        </div>
      </div>
    </form>
  );
}
