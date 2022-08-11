import { motion } from "framer-motion";
import { useState } from "react";
import linkedinLogoIcon from "../assets/svg/linkedinLogoIcon.svg";
import githubLogoIcon from "../assets/svg/githubIcon.svg";
import websiteIcon from "../assets/svg/websiteIcon.svg";
import cvIcon from "../assets/svg/cvIcon.svg";

export function Card({user, id}){
    const {first_name, last_name, birthday, bio, profession, skills, language, available_for, user_picture, experiences, linkedin, github, website, cv } = user;
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
                                    return <div key={index} className="SkillsCards">{skill}</div>
                                })}
                            </div>
                            <div className="CardDescriptionBio">
                                <div className="CardDescriptionTitle">Descrizione</div>
                                {bio}
                            </div>
                            <div className="CardDescriptionCamp">
                                <div className="CardDescriptionTitle">Lingue</div>
                                <div className="LanguageContainer">
                                    {language.map((lingua, index) => {
                                        return(
                                            <div key={index} className="LanguageCards">{lingua}</div>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className="CardDescriptionCamp">
                                <div className="CardDescriptionTitle">Esperienze lavorative</div>
                                <div className="ExperiencesContainer">
                                    {experiences.map((experiences, index) => {
                                        return(
                                            <div key={index} className="LanguageCards">{experiences.society} {experiences.start_date} / {experiences.end_date}</div>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className="CardDescriptionCamp">
                                <div className="CardDescriptionTitle">Link</div>
                                <div className="LinksContainer">
                                    {linkedin && <a href={linkedin}>
                                        <img src={linkedinLogoIcon} alt="My Linkeding!"/>
                                    </a>  }
                                    {github && <a href={github}>
                                        <img src={githubLogoIcon} alt="My GitHub!"/>
                                    </a>  }
                                    {website && <a href={website}>
                                        <img src={websiteIcon} alt="My Website!"/>
                                    </a>  }
                                </div>
                            </div>
                            <div className="CardDescriptionCamp">
                                <div className="CardDescriptionTitle">Curriculum Vitae</div>
                                <div className="CvContainer">
                                    {cv && <a href={cv}>
                                        <img src={cvIcon} alt="My Curriculum Vitae!"/> {first_name} {last_name} - {profession}.pdf
                                    </a>  }
                                </div>
                            </div>
                        </motion.div>
                        
                    </motion.div>
                    <div className="DescriptionGradientEffect"></div>
                </div>
            </div>
    )
}