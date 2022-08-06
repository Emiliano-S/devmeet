
export function Card({user}){
    const {first_name, last_name, email, sex, bio, profession, skills, open_to_work, language, available_for, user_picture} = user
    return(
        <div className="Card">
            <div className="CardProfilePicture" style={{backgroundImage: `url(${user_picture})`}}></div>
            <div className="CardProfileDescriptionContainer">
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
            </div>
        </div>
    )
}