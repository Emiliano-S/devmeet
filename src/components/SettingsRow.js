import forward from "../assets/svg/Forward.svg";
import {Link} from 'react-router-dom'

const SettingsRow = ({text, id, name, link}) => {
 
    return (
      
        <div style={{paddingBottom: "12px"}}>
            <a href='https://devmeet-01.netlify.app/'>
            <button
            className="input-form-style"
            id={id}
            name={name}
            style={{ height: "3.5em", width: "100%", cursor: 'pointer' }}
          >
            <div style={{display: "flex", justifyContent: "space-between", width:"90%", marginLeft:"5%", alignItems: "center"}}>
                    <p>{text}</p>
                    <img src={forward} alt="freccia"/>
                </div>
          </button>
          </a>
        </div>
        
    )
};


export default SettingsRow;