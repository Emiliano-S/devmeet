import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "../components/Card";

export function CardContainer({data}){
    const isLoginTrue = JSON.parse(localStorage.getItem("login"));
    const [persons, setPersons] = useState("");
    const navigate = useNavigate();

    const userNotLogin = () =>{
        navigate("/");
    }

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
            {isLoginTrue && isLoginTrue.userLogin ? (
                persons !== "" && persons.map((user, index) =>{
                        return <Card key={index} id={`card${index}`} user={user}/>
                    })
            ): <>{userNotLogin()}</>}
        </div>
    )
}