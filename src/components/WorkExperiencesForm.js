import { useState } from "react"
import FormRow from "./FormRow";
import Add from '../assets/svg/Add.svg'

const workObject = {
    name: "",
    qualifica: "",
    dataInizio: "",
    dataFine: "",
};

export function WorkExperiencesForm(){
    const [work, setWork] = useState(workObject);
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
        e.target.reset();
        console.log(worksExperience);
    }

    return(
        <>
            <form className="worksExperienceForm" onSubmit={handleSubmit}>
                <FormRow
                    textType
                    text={'Nome azienda'}
                    name={'name'}
                    handleChange={handleChange}
                    notRequired={true}
                />
                <FormRow
                    textType
                    text={'Qualifica'}
                    name={'qualifica'}
                    handleChange={handleChange}
                />
                <div className="container-df-row">
                    <FormRow
                        data
                        text={'Data Inizio'}
                        name={'dataInizio'}
                        handleChange={handleChange}
                    />
                    <FormRow
                        data
                        text={'Data fine'}
                        name={'dataFine'}
                        handleChange={handleChange}
                    />
                </div>
                <div style={{width: '100%', display: "flex", justifyContent: "center", paddingTop: '44px'}}>
                    <button
                    type="submit"
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        backgroundColor: 'rgb(54, 71, 100)',
                        width: '266px',
                        color: '#FFFFFF',
                        fontWeight: "",
                        borderRadius: "6px",
                        height: '50px',
                        border: "none",
                        cursor: "pointer",
                    }}
                    >
                        <div style={{width: '60%', display: 'flex', justifyContent:'flex-end'}}>
                        AGGIUNGI
                        </div>
                        <div style= {{width: '40%', display: 'flex', justifyContent:'center'}}>
                            <img src={Add} alt="+" />
                        </div>
                    </button>
                </div>
            </form>
            <div>
                {worksExperience.map((work, i) =>{
                    return(<div key={i}>
                        <span>{work.name}</span>
                        <br />
                        <span>{work.qualifica}</span>
                        <br />
                        <span>{work.dataInizio} | {work.dataFine}</span>
                    </div>)
                })}
            </div>
        </>
    )
}