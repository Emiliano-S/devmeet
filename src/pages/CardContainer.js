import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Card } from "../components/Card";
import { Loading } from "../components/Loading";
import dataUser from "../data/user.json";

export function CardContainer() {
  const [isLoading, setIsLoading] = useState(
    useSelector((state) => state.first_card_loading)
  );
  const dataUsers = JSON.parse(JSON.stringify(dataUser));

  useEffect(() => {
    const removeLoading = setTimeout(() => {
      setIsLoading(false);
      clearTimeout(removeLoading);
    }, 4000);
  }, []);

  return (
    <div className="CardContainer">
      {dataUsers.users.map((user, index) => {
        return <Card key={index} id={`card${index}`} user={user} />;
      })}
      {isLoading && <Loading />}
    </div>
  );
}
