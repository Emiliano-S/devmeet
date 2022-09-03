import { useState } from "react";

export function SkillButton({ id, title, description, Image, backgroundColor, gradient }) {
    const [active, setActive] = useState(false);
    return (
        <button className="ButtonSVG" key={id} 
        onClick={() => {
            setActive(!active);
        }}
            style={{
                display: 'flex',
                borderRadius: "10px",
                border: "1px solid white",
                borderWidth: "3px",
                cursor: "pointer",
                backgroundImage: `${gradient}`,
                opacity: active ? "1" : "0.5",
                borderColor: active ? "yellow" : "transparent",
            }}>
            <div className="SkillSVG">
                <div className='svg' >
                    <div className='TitleSVG'><div>{title}</div></div>
                    <Image />
                    <div className='descriptionSVG'>{description}</div>
                </div>
            </div>
        </button>
    )
}