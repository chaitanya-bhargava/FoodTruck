import './Button.css';
const Button = props => {
    return (
        <div className='custom-button' style={{color: props.color, backgroundColor: props.bgcolor, borderColor: props.bordercolor}}>
            {props.text}
        </div>
    )
}

export default Button;