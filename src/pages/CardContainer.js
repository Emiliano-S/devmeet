import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Card } from "../components/Card";

export function CardContainer({data}){
    const [persons, setPersons] = useState("");

    async function getUser() {
        try {
            const response = await axios.get('http://localhost:3000/users');
           setPersons(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(()=>{
        if(persons === "") getUser();
        console.log(persons)
    },[persons])

    return(
        <div className="CardContainer">
           {
            persons !== "" && persons.map((user, index) =>{
                    return <Card key={index} id={`card${index}`} user={user}/>
                })
            }
        </div>
    )
}