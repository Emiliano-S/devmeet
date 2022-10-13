import devArrowBg from "../assets/svg/devArrowBg.svg";
import Form from "../pages/Form";
import Devmeet from "../assets/img/userPicture/devmeet.png";
import MarioVerde from "../assets/img/userPicture/MarioVerde.png";
import { Link, useNavigate } from "react-router-dom";

export function ProfileSettings({ data, user, company }) {
  const companyData = {
    company_name: "Devemeet",
    first_name: "Emiliano",
    last_name: "Scanga",
    cel: "+3412345678",
    city: "Milano",
    work_type: true,
    website: "https://devmeet.dev",
    sector: "Digital Agency",
    description: "Devmeet è un'applicazione che connette professionisti con aziende  e viceversa, da tutto il mondo."
  } 

  return (
    <>
      <div
        className="ProfileContainer"
        style={{
          display: "flex",
          position: "relative",
          width: "100%",
          height: "300px",
          backgroundColor: "#364764",
          justifyContent: "space-between",
        }}
      >
        <div
          className="ProfileInfo"
          style={{
            width: "100%",
          }}
        >
          <div
            className="ProfilePicture"
            style={{
              display: "flex",
              justifyContent: "flex-start",
              width: "100%",
              marginLeft: "10%",
              marginTop: "10%",
            }}
          >
            <Link to="/signUp/RegUser/Addphoto">
              <div
                style={{
                  height: "64px",
                  width: "64px",
                  borderRadius: "50%",
                  border: "3px solid white",
                  backgroundImage: `url(${Devmeet})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "none",
                }}
              />
            </Link>
          </div>
          <div
            className="ProfileName"
            style={{
              width: "100%",
              marginLeft: "10%",
              marginTop: "5%",
            }}
          >
            {/* {first_name} {last_name} */}
            <h2 style={{ fontWeight: "bold", color: "white" }}>{companyData.company_name}</h2>
          </div>
          <div
            className="ProfileJob"
            style={{
              width: "100%",
              marginLeft: "10%",
              marginTop: "5%",
            }}
          >
            <div>
              {/* {profession} */}
              <p style={{ fontWeight: "500", color: "white" }}>{companyData.sector}</p>
            </div>
          </div>
        </div>
        <div
          className="BgSvg"
          style={{
            width: "flex-end",
          }}
        >
          <img src={devArrowBg} />
        </div>
      </div>
      <div
        className="ProfileDetails"
        style={{
          backgroundColor: "#F9F9F9",
          position: "absolute",
          width: "100%",
          borderTopLeftRadius: "25px",
          borderTopRightRadius: "25px",
          top: "250px",
          bottom: "250px",
        }}
      >
        <Form company companyData={companyData}/>
      </div>
    </>
  );
}
