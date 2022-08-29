import React from "react";
import Button from "./Button";


//installata npm install react-phone-input-2 --save
import 'react-phone-input-2/lib/style.css'
import FormRow from "./FormRow";
import UploadButton from "./UploadButton";
import { NavBar } from "./NavBar";

export default function Form({user, company}) {
    
    return (
        <>
        <NavBar back/>
            <div className="form-container" >
                <form id="user-info">
                <FormRow
                textType
                    text ={'Nome e Cognome'}
                    name ={'Nome'}
                    />

                    {user && <FormRow
                    data
                    text ={'Data di nascita'}
                    name ={'Data'}
                    />
}
                    { company && <FormRow 
                    textType
                    text = {'Nome Azienda'}
                    name = {'Nome_Compagnia'} />}

                    { user && <div><div className='form-title-style'>Sesso</div>
                    <div className="option-container">

                        <Button selectButton name={'gender'} bgColor={'white'} wd={100} hg={'3em'} text={'Uomo'} />
                        <Button selectButton name={'gender'} bgColor={'white'} wd={100} hg={'3em'} text={'Donna'} />
                        <Button selectButton name={'gender'} bgColor={'white'} wd={100} hg={'3em'} text={'Altro'} />

                    </div></div>}

                    <FormRow
                    number
                    text = {'Recapito telefonico'}
                    name = {'Numero'} />


                    <FormRow
                    text ={'Stato e città'}
                    textType
                    name ={'Città'}
                    />
                    
                    

                    {user && <div className='form-title-style'>Sono in cerca di lavoro:</div>}
                    {company && <div className='form-title-style'>Sono in cerca da:</div>}
                    <div className="option-container">
                        <Button selectButton
                            name={'work'}
                            bgColor={'white'}
                            wd={100}
                            hg={'3em'}
                            text={'Remoto'} />
                        <Button selectButton
                            name={'work'}
                            bgColor={'white'}
                            wd={100}
                            hg={'3em'}
                            text={'In sede'} />
                        <Button selectButton
                            name={'work'}
                            bgColor={'white'}
                            wd={100}
                            hg={'3em'}
                            text={'Remoto + in sede'} />
                    </div>
                        {user && <div><FormRow 
                        textType
                        text = {"Qualifica"}
                        name = {"Qualifica"} />

                        <UploadButton 
                        bgColor= {'#364764'}
                        text= {'CARICA CV'}
                        textColor = {'white'}
                        textClicked ={'ELIMINA CV'} /></div>}

                        <div style={{width: '100%', display:'flex', flexDirection:'column', paddingTop:'44px', gap:'8px'}}>
                            {user && <label for="textArea" style={{display:'block', fontWeight:'bold'}}>Dicci qualcosa su di te</label>}
                            {company && <label for="textArea" style={{display:'block', fontWeight:'bold'}}>Descrivi la tua azienda</label>}
                            
                            <textarea name="textArea" id="textArea" rows='10'style={{resize:'none', borderRadius:'6px', borderColor:'white',}}></textarea>
                        </div>

                    <div className='container-continue-button'>
                    <Button submit
                            type='submit'
                            form='user-info'
                            value='Submit'
                            bgColor={'yellow'}
                            wd={'50%'}
                            hg={'3em'}
                            text={'CONTINUA'}
                            textColor={'rgb(54,71,100)'} />
                            </div>
                </form>
            </div>
        </>
    )
}