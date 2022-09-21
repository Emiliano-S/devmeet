import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import useSWR from "swr";
import data from "../data/db";

function FormRow({ text, textType, id, name, ph, data, password, number, email, dropdown, options}) {
    const [value, setValue] = useState()


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
    <div>
      {data && (
        <div>
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
          ></input>
        </div>
      )}

      {textType && (
        <div>
          <div className="form-title-style">{text}</div>
          <input
            type="text"
            pattern="[A-Za-z\s]+"
            className="input-form-style"
            id={id}
            name={name}
            required
            placeholder={ph}
          ></input>
        </div>
      )}

      {password && (
        <div>
          <div className="form-title-style">{text}</div>
          <input
            type='password'
            pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"
            className="input-form-style"
            id={id}
            name={name}
            required
            placeholder={ph}
          ></input>
        </div>
      )}
      {email && (
        <div>
          <div className="form-title-style">{text}</div>
          <input
            type='email'
            className="input-form-style"
            id={id}
            name={name}
            required
            placeholder={ph}
          ></input>
        </div>
      )}
      
        {number && (<div>
            <div className="form-title-style">{text}</div>
            <PhoneInput
                        placeholder=''
                        value={value}
                        onChange={setValue}
                    /> </div>)}

        {dropdown && (<div>
          <div className= "form-title-style">{text}</div>
            {options}
          </div>)}
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
