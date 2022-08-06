import { motion } from "framer-motion";
import { useState } from "react";

export function Card({user, id}){
    const {first_name, last_name, birthday, bio, profession, skills, language, available_for, user_picture, } = user;
    const [descriptionClass, setDescriptionClass] = useState("");


    const DescriptionOpener = (event, info) =>{
        if(info.offset.y < -100){
            setDescriptionClass("open");
        }else{
            setDescriptionClass("");
        }
    }

    const GetAge = (date) =>{
        const ageInMilliseconds =  new Date() - new Date(date);
        return Math.floor(ageInMilliseconds/1000/60/60/24/365);
    }

    return(
            <div className="Card">
                <div className ="CardRelative">
                    <div className="CardProfilePicture" style={{backgroundImage: `url(${user_picture})`}}></div>
                    <motion.div  className={"CardProfileDescriptionContainer " + descriptionClass} drag="y" dragConstraints={{top: -200, bottom: 0,}} dragElastic={0} onDragEnd={DescriptionOpener}>
                        <div className="descriptionHandler"></div>
                        <motion.div className="descriptionContainer" drag="y" dragConstraints={{top: -200, bottom: 0}} dragElastic={0}>
                            <div className="CardDescriptionNameContainer">
                                <div className="CardName">
                                    {first_name} {last_name}, {GetAge(birthday)}
                                </div>
                                <div className="AvailableForTag">
                                    {available_for}
                                </div>
                            </div>
                            <div className="CardDescriptionProfessionContainer">
                                {profession}
                            </div>
                            <div className="CardDescriptionSkillsContainer">
                                {skills.map((skill, index) =>{
                                    return <div key={index} className="SkillsContainer">{skill}</div>
                                })}
                            </div>
                            <div className="CardDescriptionBio">
                                <div className="CardDescriptionTitle">Descrizione</div>
                                {bio}
                            </div>
                            <div className="CardDescriptionCamp">
                                <div className="CardDescriptionTitle">Lingue</div>
                                {language.map((lingua, index) => {
                                    return(
                                        <div key={index} className="LanguageContainer">
                                            <p className="LanguageSubTitle" >{lingua.lang}</p>
                                            <p>{lingua.level}</p>
                                        </div>
                                    )
                                })}
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
    )
}