import { useState } from "react"

import Camera from '../assets/svg/Camera.svg'

const MakePhotoButton = ({
  wd,
  bgColor,
  text,
  textColor,
  wg,
  textClicked,
  hg,
}) => {

  const [active, setActive] = useState(true);

  const handleButtonClick = () => {
    setActive(false);
  };

  const handleButtonClicked = () => {
    setActive(true);
  }
  return (
    <div style={{ width: '100%', display: "flex", justifyContent: "center", marginTop: '22px' }}>
      {active &&
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
          <button
            onClick={handleButtonClick}
            style={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: bgColor,
              width: '266px',
              color: textColor,
              fontWeight: wg,
              borderRadius: "6px",
              height: '50px',
              border: "none",
              cursor: "pointer",
            }}
          >
            <div style={{ width: '60%', display: 'flex', justifyContent: 'flex-end', fontWeight: "bold"}}>
              {text}
            </div>
            <div style={{ width: '40%', display: 'flex', justifyContent: 'center' }}>
              <img src={Camera} alt="+" />
            </div>
          </button></div>}
      {!active &&
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
          <button
            onClick={handleButtonClicked}
            style={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: bgColor,
              width: '266px',
              color: textColor,
              fontWeight: wg,
              borderRadius: "6px",
              height: '50px',
              border: "none",
              cursor: "pointer",
            }}
          >
            <div style={{ width: '60%', display: 'flex', justifyContent: 'flex-end', fontWeight: "bold" }}>
              {textClicked}
            </div>
            <div style={{ width: '40%', display: 'flex', justifyContent: 'center' }}>
              <img src={Camera} alt="-" />
            </div>
          </button>
        </div>
      }
    </div>
  )
}


export default MakePhotoButton