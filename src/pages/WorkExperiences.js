import { useEffect } from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { WorkExperiencesForm } from "../components/WorkExperiencesForm";

export function WorkExperiences() {
  const { state } = useLocation();
  const { arr } = state;
  const [toPopulate, setToPopulate] = useState(arr);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    navigate("/singUp/regUser/linksLanguages", { state: { arr: toPopulate } });
  };

  return (
    <>
      <div className="skillsPageContainer">
        <WorkExperiencesForm contentType="skill" toPopulate={setToPopulate} />
        <div className="container-continue-button">
          <button
            style={{
              backgroundColor: "yellow",
              width: "50%",
              color: "rgb(54, 71, 100)",
              borderRadius: "6px",
              height: "3rem",
              border: "none",
              cursor: "pointer",
            }}
            onClick={handleSubmit}
          >
            CONTINUA
          </button>
        </div>
      </div>
    </>
  );
}
