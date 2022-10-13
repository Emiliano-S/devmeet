import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import useSWR from "swr";
import data from "../data/db";
import { useDispatch } from "react-redux";

function FormRow({
  text,
  textType,
  id,
  name,
  ph,
  data,
  password,
  number,
  email,
  dropdown,
  options,
  site,
  handleChange,
  notRequired = false,
}) {
  const [value, setValue] = useState();

  /* Esempio:
    <FormRow 
    password
    text = {'Password'}
    name = {'Password'}
    ph= {'NotWorking'}
    id= {'PasswordCard1'}


    LE KEY password, email, data, textType, number GESTISCONO IL TIPO DI INPUT AUTOMATICAMENTE
    */

  return (
    <div className="FormRowContainer">
      {data && (
        <>
          <div className="form-title-style">{text}</div>
          <input
            type="date"
            className="input-form-style"
            id={id}
            name={name}
            required
            placeholder={ph}
            min="1932-01-01"
            max="2022-12-31"
            style={{ height: "3.5em", width: "100%" }}
            onChange={handleChange}
          ></input>
        </>
      )}

      {textType && (
        <>
          <div className="form-title-style">{text}</div>
          <input
            type="text"
            pattern="[A-Za-z\s]+"
            className="input-form-style"
            id={id}
            name={name}
            required={!notRequired}
            placeholder={ph}
            onChange={handleChange}
          ></input>
        </>
      )}

      {site && (
        <>
          <div className="form-title-style">{text}</div>
          <input
            type="url"
            pattern="https://.*"
            className="input-form-style"
            id={id}
            name={name}
            required={!notRequired}
            placeholder={ph}
            onChange={handleChange}
          />
        </>
      )}

      {password && (
        <>
          <div className="form-title-style">{text}</div>
          <input
            type="password"
            pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"
            className="input-form-style"
            id={id}
            name={name}
            required
            placeholder={ph}
            onChange={handleChange}
          ></input>
        </>
      )}
      {email && (
        <>
          <div className="form-title-style">{text}</div>
          <input
            type="email"
            className="input-form-style"
            id={id}
            name={name}
            required
            placeholder={ph}
            onChange={handleChange}
          ></input>
        </>
      )}
      {number && (
        <>
          <div className="form-title-style">{text}</div>
          <PhoneInput placeholder="" name={value} onChange={setValue} />{" "}
        </>
      )}

      {dropdown && (
        <div>
          <div className="form-title-style">{text}</div>
          {options}
        </div>
      )}
    </div>
  );
}

export default FormRow;
// NON INSERITE LA PARTE SOTTOSTANTE //
// value = {
//  name === 'Città' ? data[0].first_name :
//  name === 'Nome' ? data[0].last_name :
//  'ciao'
// }
