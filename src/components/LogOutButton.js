import { useEffect } from "react";
import { useState } from "react";

export function LogOutButton({logOutUser, setLogOutUser}){
    const [login, setLogin] = useState("");

    useEffect(() =>{
        hydrateStateWithLocalStorage()
    }, [logOutUser]);

    const logout = () =>{
        localStorage.removeItem("login");
        setLogOutUser(true);
    }

    const hydrateStateWithLocalStorage = () =>{
        if(localStorage.hasOwnProperty("login")){
            let value = localStorage.getItem("login")
            try{
                value = JSON.parse(value);
                setLogin(value);
            } catch (e) {
                setLogin("");
            }
        }
    }
    return(
        <div>

        </div>
    )
}