import './Footer.css';
const Footer = () => {
    return (
        <footer>
            <img src="logo.png" alt="logo" className="logo"/>
            <div className="contactus">
                <p className="contactus-heading">Contact Us</p>
                <p className="contactus-subtext">Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market, XYZ-343434</p>
                <p className="contactus-subtext">example2020@gmail.com</p>
                <p className="contactus-subtext">(904) 443-0343</p>
            </div>
            <div className="more">
                <p className="more-heading">More</p>
                <ul>
                    <li>About Us</li>
                    <li>Products</li>
                    <li>Career</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div className="sociallinks">
                <p className="sociallinks-heading">Social Links</p>
                <div className="socialicons">
                    <img src="insta.png" alt="insta" className='insta'/>
                    <img src="twitter.png" alt="twitter"/>
                    <img src="facebook.png" alt="facebook"/>
                </div>
            </div>
            <div className="copywright">&copy; 2022 Food Truck Example</div>
        </footer>
    )
}

export default Footer;