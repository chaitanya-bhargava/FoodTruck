import Button from '../Button/Button';
import './Header.css'
const Header = () => {
    return (
        <header>
            <div className="left">
                <img src="logo.png" alt="logo" className="headerlogo"/>
                <div className='headertext'>
                    <p className='header-heading'>Discover the <span style={{color:'#E23744'}}>Best</span> Food and Drinks</p>
                    <p className='header-subtext'>Naturally made Healthcare Products for the better care & support of your body.</p>
                    <Button text="Explore Now!" color="white" bgcolor="#E23744" bordercolor="#E23744"/>
                </div>
            </div>
            <div className="right">
                <img src="headerimg.png" alt="pizza" className="headerimg"/>
                <Button text="Get In Touch" color="white" bgcolor="transparent" bordercolor="white"/>
            </div>
        </header>
    )
}

export default Header;