import Button from '../Button/Button';
import './Card.css';
const Card = props => {
    return (
        <div className="card">
            <img src={props.img} className="cardimg" alt="food"/>
            <p className="card-heading">{props.heading}</p>
            <p className="card-subtext">PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley....</p>
            <Button className="custom-button" text="Read More" bgcolor="transparent" bordercolor="#424961" color="#424961"/>
        </div>
    )
}

export default Card;