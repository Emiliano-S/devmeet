
import { motion } from "framer-motion";
import { useState } from "react";

export function Card({user, id}){
    const {first_name, last_name, email, sex, bio, profession, skills, open_to_work, language, available_for, user_picture} = user;
    const [descriptionClass, setDescriptionClass] = useState("");


    const DescriptionOpener = (event, info) =>{
        if(info.offset.y < -100){
            setDescriptionClass("open");
        }else{
            setDescriptionClass("");
        }
    }

    return(
            <div className="Card">
                <div className ="CardRelative">
                    <div className="CardProfilePicture" style={{backgroundImage: `url(${user_picture})`}}></div>
                    <motion.div  className={"CardProfileDescriptionContainer " + descriptionClass} drag="y" dragConstraints={{top: -200, bottom: 0,}} dragElastic={0} onDragEnd={DescriptionOpener}>
                        <div className="CardDescriptionNameContainer">
                            <div className="CardName">
                                {first_name} {last_name}
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
                            {bio}
                        </div>
                    </motion.div>
                </div>
            </div>
    )
}