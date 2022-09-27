import { useEffect } from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { LanguagesForm } from "../components/LanguagesForm";
import { LinksForm } from "../components/LinksForm";

export function LinksLanguages() {
  const { state } = useLocation();
  const { arr } = state;
  const [toPopulate, setToPopulate] = useState(arr);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(toPopulate);
  }, [toPopulate]);

  const handleSubmit = (e) => {
    console.log(toPopulate);
    navigate("/singUp/regUser/linksLanguages", { state: { arr: toPopulate } });
  };
  return (
    <div className="skillsPageContainer">
      <LinksForm toPopulate={setToPopulate} />
      <LanguagesForm />
    </div>
  );
}
