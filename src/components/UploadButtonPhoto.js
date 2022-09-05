import { useState } from "react"
import UserPicture from '../assets/img/userPicture/MarioVerde.png'
import Placeholder from '../assets/svg/Placeholder.svg'
import Logoholder from '../assets/svg/Logoholder.svg'
import CloudWhite from '../assets/svg/CloudWhite.svg'
import Remove from '../assets/svg/Remove.svg'

const UploadButtonPhoto = ({
  wd,
  bgColor,
  text,
  textColor,
  wg,
  textClicked,
  hg,
  user,
  company
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
            <div style={{ width: '60%', display: 'flex', justifyContent: 'flex-end', fontWeight: "bold" }}>
              {text}
            </div>
            <div style={{ width: '40%', display: 'flex', justifyContent: 'center' }}>
              <img src={CloudWhite} alt="+" />
            </div>
          </button></div>}
      {!active &&
        <div style={{display: "flex", flexDirection: "column", alignItems: "center",}}>
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
              <img src={Remove} alt="-" />
            </div>
          </button>
        </div>
      }
    </div>
  )
}


export default UploadButtonPhoto