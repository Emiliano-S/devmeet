import React from "react";
import Button from "./Button";

export default class Form extends React.Component {
    render() {
        return (
            <>
                <form>
                    <div className='title-style'>Nome e Cognome</div>
                    <input className='input' type={'text'}
                        pattern="[a-z]" required></input>

                    <div className='title-style'>Data di nascita</div>
                    <input className="input" type="date" style={{ height: '3.5em', width: '100%' }}
                        min="1932-01-01" max="2022-12-31" required></input>

                    <div className='title-style'>Sesso</div>
                    <div className="option-container">
                        <Button selectButton
                            bgColor={'white'}
                            wd={'26%'}
                            hg={'3em'}
                            text={'Uomo'} />
                        <Button selectButton
                            bgColor={'white'}
                            wd={'26%'}
                            hg={'3em'}
                            text={'Donna'} />
                        <Button selectButton
                            bgColor={'white'}
                            wd={'38%'}
                            hg={'3em'}
                            text={'Altro'} />
                    </div>

                    <div className='title-style'>Stato, Città</div>
                    <input type={'text'} className='input' required></input>

                    <div className='title-style'>Sono in cerca di lavoro</div>
                    <div className="option-container">
                        <Button selectButton
                            bgColor={'white'}
                            wd={'26%'}
                            hg={'3em'}
                            text={'Remoto'} />
                        <Button selectButton
                            bgColor={'white'}
                            wd={'20%'}
                            hg={'3em'}
                            text={'In sede'} />
                        <Button selectButton
                            bgColor={'white'}
                            wd={'45%'}
                            hg={'3em'}
                            text={'Remoto + in sede'} />
                    </div>
                    <input type={'submit'} value={'CONTINUA'}
                        style={{
                            backgroundColor: 'yellow',
                            display: 'block',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            marginTop: '15%',
                            padding: '1em',
                            border: 'transparent',
                            width: '50%',
                            height: '3em',
                            borderRadius: '0.5em',
                            color: 'rgb(54,71,100)'
                        }} />
                </form>
            </>
        )
    }
}