import { useState } from "react"
import FormRow from "./FormRow";
import Add from '../assets/svg/Add.svg'
import { useRef } from "react";

const workObject = {
    name: "",
    qualifica: "",
    dataInizio: "",
    dataFine: "",
};

export function WorkExperiencesForm({contentType}){
    const [work, setWork] = useState(workObject);
    const [worksExperience, setWorksExperience] = useState([]);
    const elementRef = useRef([]);

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

    /*Funzione per rimuovere il valore selezionato dall'elenco*/
    const handleValueRemove = (i) => {
        elementRef.current[i].parentNode.className += " skillRemoved";
        const remove = setTimeout(() => {
            setWorksExperience((currentMyValue) =>
                currentMyValue.filter((value, index) => index !== i)
            );
            clearTimeout(remove);
        }, 600);
    };

    return(
        <>
           <div className="skillsContainer">
                <h3>Esperienze lavorative</h3>
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
                    <div style={{width: '100%', display: "flex", justifyContent: "center", paddingTop: '20px'}}>
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
            </div>
            <div className="lavoroContainer">
                <div className={`${contentType}List`}>
                    {worksExperience.map((element, i) =>{
                        return(
                            <div className={`${contentType}Row`} key={element.name}>
                                <div className={contentType} style={{flexDirection:'column'}} ref={(element) =>{
                                    elementRef.current[i] = element;
                                }}>
                                <p>{element.name}</p>
                                <p style={{fontSize:'12px'}}>{element.qualifica}</p>
                                <p style={{fontSize:'12px'}}>dal {element.dataInizio} al {element.dataFine}</p>
                                </div>
                                <div
                                className={`${contentType}Remove`}
                                onClick={() => {
                                    handleValueRemove(i);
                                }}
                                ></div>
                            </div>
                            );
                    })}
                </div>
            </div>
        </>
    )
}