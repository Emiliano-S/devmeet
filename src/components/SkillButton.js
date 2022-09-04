import { useState } from "react";

export function SkillButton({ id, title, Image, backgroundColor, gradient, boxheight, boxwidth, align }) {
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
                borderWidth: "2px",
                cursor: "pointer",
                backgroundImage: `${gradient}`,
                opacity: active ? "1" : "0.5",
                borderColor: active ? "yellow" : "transparent",
                width: `${boxwidth}`,
                height: `${boxheight}`,
                
            }}>
            <div className="SkillSVG">
                <div className='svg'
                style={{
                    justifyContent: `${align}`,
                }} >
                    <Image />
                </div>
                <div className='TitleSVG'><div>{title}</div></div>
            </div>
        </button>
    )
}