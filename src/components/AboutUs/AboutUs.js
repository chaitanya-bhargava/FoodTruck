import './AboutUs.css';
import Button from '../Button/Button';
const AboutUs = () => {
    return (
        <section className="about">
            <img src="aboutimg.png" alt="img" className="aboutimg"/>
            <div className="right">
                <p className="aboutheading">
                    About Us
                </p>
                <p className="abouttext">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. t has survived not only five centuries.
                </p>
                <Button className="custom-button" text="Read More" color="white" bgcolor="#E23744" bordercolor="#E23744"/>
            </div>
        </section>
    )
}
export default AboutUs;