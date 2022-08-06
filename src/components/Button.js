const Button = ({wd, bgColor, text, textColor, wg}) => {
    return (
        <button style={{backgroundColor: bgColor, width: wd, color: textColor, fontWeight: wg, borderRadius: '6px', height: '50px', border: 'none'}}>{text}</button>
    )
}


export default Button