import { useState } from "react";
import { Card } from "../components/Card";
import { Loading } from "../components/Loading";
import { PopUp } from "../components/PopUp";

export function CardContainer({ data }) {
  const [popUpVisibility, setPopUpVisibility] = useState(true);

  const closePopUp = () =>{
    setPopUpVisibility(!popUpVisibility);
  }
  return (
    <div className="CardContainer">
      {data.map((user, index) => {
        return <Card key={index} id={`card${index}`} user={user} />;
      })}
      {popUpVisibility && <PopUp type={1} handleChange={closePopUp} />}
    </div>
  );
}
