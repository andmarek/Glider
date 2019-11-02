import React from 'react';
import { Link, withRouter} from 'react-router-dom';
import styles from './style.css' ;
import logo from './GliderLogo.svg';

const Navbar = (props) => {
    return(
        <div className="Navbar">
            <img src={logo} alt="Glider logo" />
            <nav>
                <div className="NavbarLinks">
                    <Link style={{textDecoration:'none'}} to='/'>
                        <div className={"link"+ (props.location.pathname === "/" ? " active": "")}></div>
                    </Link>
                </div>
            </nav>
        </div>
    );

}

export default withRouter(Navbar);