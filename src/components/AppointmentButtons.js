import Button from "./Button"

const AppointmentButtons = (props) => {
    return (
        <>
            <div className='notificationsButtonContainer'>
                <div className="buttonShowContainer" style={{display: 'flex', FlexDirection: 'row', gap: '10px'}}>
                    <Button submit
                        onClick={props.appAdder1}
                        name={'Accetta'}
                        bgColor={'#FCF347'}
                        wd={'155px'}
                        hg={'50px'}
                        text={'ACCETTA'}
                        wg={'bold'}
                        />

                    <Button submit
                        name={'Rifiuta'}
                        bgColor={'#364764'}
                        textColor={'#F9F9F9'}
                        wd={'155px'}
                        hg={'50px'}
                        text={'RIFIUTA'}
                        wg={'bold'} 
                        />
                </div>
            </div>
        </>

    )
}
export default AppointmentButtons;