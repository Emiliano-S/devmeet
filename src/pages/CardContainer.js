import { useState } from "react";
import { Card } from "../components/Card";
import { Loading } from "../components/Loading";
import { PopUp } from "../components/PopUp";

export function CardContainer({ data }) {
  return (
    <div className="CardContainer">
      {data.map((user, index) => {
        return <Card key={index} id={`card${index}`} user={user} />;
      })}
    </div>
  );
}
