import { useState } from "react"

export function WorkExperiencesForm(){
    const [work, setWork] = useState({
        name: "",
        ruolo: "",
    });
    const [worksExperience, setWorksExperience] = useState([]);

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setWork((prev) =>{
            return {...prev, [name]: value};
        });
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        setWorksExperience((prev) => [...prev, work]);
        console.log(worksExperience);
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <label>
                    Nome azienda:
                    <input type="text" name="name" onChange={handleChange} />
                </label>

                <label>
                    Ruolo:
                    <input type="text" name="ruolo" onChange={handleChange} />
                </label>
                <button type="submit">Aggiungi</button>
            </form>
            <div>
                {worksExperience.map((work, i) =>{
                    return(<div key={i}>
                        <span>{work.name}</span>
                        <br />
                        <span>{work.ruolo}</span>
                    </div>)
                })}
            </div>
        </>
    )
}