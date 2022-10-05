import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { LanguagesForm } from "../components/LanguagesForm";
import { LinksForm } from "../components/LinksForm";
import {Link} from 'react-router-dom'

export function LinksLanguages() {
  const { state } = useLocation();
  const { arr } = state;
  const [toPopulate, setToPopulate] = useState(arr);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    console.log(toPopulate);
    //navigate("/singUp/regUser/linksLanguages", { state: { arr: toPopulate } });
  };
  return (
    <div className="skillsPageContainer">
      <LinksForm toPopulate={setToPopulate} />
      <LanguagesForm toPopulate={setToPopulate} />
      <div className="container-continue-button">
        <Link to='/signUp/regUser/addPhoto'><button
          style={{
            backgroundColor: "yellow",
            width: "100%",
            color: "rgb(54, 71, 100)",
            borderRadius: "6px",
            height: "3rem",
            border: "none",
            cursor: "pointer",
          }}
          onClick={handleSubmit}
        >
          CONTINUA
        </button></Link>
      </div>
    </div>
  );
}
