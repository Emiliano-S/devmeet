import { useState } from "react";

export function SkillButton({
  id,
  title,
  Image,
  backgroundColor,
  gradient,
  boxheight,
  boxwidth,
  align,
}) {
  const [active, setActive] = useState(false);
  return (
    <button
      className="ButtonSVG"
      key={id}
      onClick={() => {
        setActive(!active);
      }}
      style={{
        display: "flex",
        border: "none",
        borderRadius: "10px",
        cursor: "pointer",
        backgroundImage: `${gradient}`,
        opacity: active ? "1" : "0.6",
        boxShadow: active ? "0px 0px 12px 0px #545454" : "none",
        width: `${boxwidth}`,
        height: `${boxheight}`,
      }}
    >
      <div className="SkillSVG">
        <div
          className="svg"
          style={{
            justifyContent: `${align}`,
          }}
        >
          <Image />
        </div>
        <div className="TitleSVG">
          <div>{title}</div>
        </div>
      </div>
    </button>
  );
}
