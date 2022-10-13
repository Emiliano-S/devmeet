import React from "react";
import Button from "../components/Button";

//installata npm install react-phone-input-2 --save
import "react-phone-input-2/lib/style.css";
import FormRow from "../components/FormRow";
import UploadButton from "../components/UploadButton";
import { NavBar } from "../components/NavBar";
import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function Form({ user, company, userArr , companyData}) {
  const [arrUser, setArrUser] = useState(userArr);
  const navigate = useNavigate();
  const location = useLocation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (user) {
      setArrUser((prev) => {
        return { ...prev, [name]: value };
      });
    }
  };

  const handleSubmit = (e) => {
    if (user) {
      e.preventDefault();
      navigate("/signUp/regUser/skills", { state: { arr: arrUser } });
    } else {
      e.preventDefault();
      navigate("/signUp/regCompany/skills", { state: { arr: arrUser } });
    }
  };

  return (
    <>
      {/* <NavBar back/> */}
      <div className="form-container">
        <form id="user-info" onSubmit={handleSubmit}>
          {" "}
          <FormRow
            textType
            text={"Nome"}
            name={"nome"}
            handleChange={handleChange}
            ph={companyData && companyData.first_name}
          />
          <FormRow
            textType
            text={"Cognome"}
            name={"Cognome"}
            handleChange={handleChange}
            ph={companyData && companyData.last_name}
          />
          {user && (
            <FormRow
              data
              text={"Data di nascita"}
              name={"dataNascita"}
              handleChange={handleChange}
            />
          )}
          {company && (
            <FormRow textType text={"Nome Azienda"} name={"Nome_Compagnia"} ph={companyData && companyData.company_name}/>
          )}
          {user && (
            <div>
              <div className="form-title-style">Sesso</div>
              <div className="option-container">
                <Button
                  selectButton
                  name={"sesso"}
                  bgColor={"white"}
                  wd={100}
                  hg={"3em"}
                  text={"Uomo"}
                  handleChange={handleChange}
                />
                <Button
                  selectButton
                  name={"sesso"}
                  bgColor={"white"}
                  wd={100}
                  hg={"3em"}
                  text={"Donna"}
                  handleChange={handleChange}
                />
                <Button
                  selectButton
                  name={"sesso"}
                  bgColor={"white"}
                  wd={100}
                  hg={"3em"}
                  text={"Altro"}
                  handleChange={handleChange}
                />
              </div>
            </div>
          )}
          <FormRow
            textType
            text={"Recapito telefonico"}
            name={"recTel"}
            handleChange={handleChange}
            ph={companyData && companyData.cel}
          />
          <FormRow
            text={"Città"}
            textType
            name={"citta"}
            handleChange={handleChange}
            ph={companyData && companyData.city}
          />
          {user && (
            <div className="form-title-style">Sono in cerca di lavoro:</div>
          )}
          {company && <div className="form-title-style">Sono in cerca da:</div>}
          <div className="option-container">
            <Button
              selectButton
              name={"tipologiaLavoro"}
              bgColor={"white"}
              wd={100}
              hg={"3em"}
              text={"Remoto"}
              handleChange={handleChange}
            />
            <Button
              selectButton
              name={"tipologiaLavoro"}
              bgColor={"white"}
              wd={100}
              hg={"3em"}
              text={"In sede"}
              handleChange={handleChange}
              checked= {companyData && companyData.work_type}
            />
            <Button
              selectButton
              name={"tipologiaLavoro"}
              bgColor={"white"}
              wd={100}
              hg={"3em"}
              text={"Remoto + in sede"}
              handleChange={handleChange}
            />
          </div>
          {company && (
            <div>
              <FormRow
                site
                ph={companyData && companyData.website}
                text={"Sito Aziendale"}
                name={"Sito Aziendale"}
              />
              <FormRow
                dropdown
                text={"Numero dipendenti"}
                name={"Numero dipendenti"}
                options={
                  <select type="dropdown" className="input-form-style">
                    <option> 0 - 10</option>
                    <option> 10 - 50</option>
                    <option> 50 - 100</option>
                    <option> 100 - 200</option>
                    <option> 200 - 500</option>
                    <option> 500+</option>
                  </select>
                }
              />
              <FormRow
                textType
                text={"Settore attività aziendale"}
                name={"Settore attività aziendale"}
                ph={companyData && companyData.sector}
              />
            </div>
          )}
          {user && (
            <div>
              <FormRow
                textType
                text={"Qualifica"}
                name={"qualifica"}
                handleChange={handleChange}
              />

              <UploadButton
                bgColor={"#364764"}
                text={"CARICA CV"}
                textColor={"white"}
                textClicked={"ELIMINA CV"}
              />
            </div>
          )}
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              paddingTop: "44px",
              gap: "8px",
            }}
          >
            {user && (
              <label
                for="textArea"
                style={{ display: "block", fontWeight: "bold" }}
              >
                Dicci qualcosa su di te
              </label>
            )}
            {company && (
              <label
                for="textArea"
                style={{ display: "block", fontWeight: "bold" }}
              >
                Descrivi la tua azienda
              </label>
            )}

            <textarea
              name="bio"
              id="textArea"
              rows="10"
              style={{
                resize: "none",
                borderRadius: "6px",
                borderColor: "white",
                padding:"10px",
                fontSize: "12px"
              }}
              placeholder={companyData && companyData.description}
              onChange={handleChange}
            ></textarea>
          </div>
          <div
            className="container-continue-button"
            style={{ paddingBottom: "10%" }}
          >
            <Button
              submit
              type="submit"
              form="user-info"
              value="Submit"
              bgColor={"#fcf347"}
              wd={"50%"}
              hg={"3em"}
              text={
                location.pathname === "/profilesettings" ? "SALVA" : "CONTINUA"
              }
              textColor={"rgb(54,71,100)"}
            />
          </div>
        </form>
      </div>
    </>
  );
}
