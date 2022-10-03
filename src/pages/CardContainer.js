import { Card } from "../components/Card";

export function CardContainer({data}){

    return(
        <div className="CardContainer">
            {data.map((user, index) =>{
                return <Card key={index} id={`card${index}`} user={user}/>
            })}
        </div>
    )
}