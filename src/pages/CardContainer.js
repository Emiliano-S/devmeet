import { useState } from "react";
import { Card } from "../components/Card";
import { Loading } from "../components/Loading";
import { PopUp } from "../components/PopUp";
import dataUser from "../data/user.json";

export function CardContainer({ data }) {
  const dataUsers = JSON.parse(JSON.stringify(dataUser));

  console.log(dataUsers.users);

  return (
    <div className="CardContainer">
      {dataUsers.users.map((user, index) => {
        return <Card key={index} id={`card${index}`} user={user} />;
      })}
    </div>
  );
}
