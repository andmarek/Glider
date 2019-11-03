import React from 'react';
import { Link, withRouter} from 'react-router-dom';
import styles from './style.css' ;
import logo from './GliderLogo.svg';

const Navbar = (props) => {
    return(
        <div className="Navbar">
            <nav>
                <Link style={{textDecoration:'none'}} to='/'>
                    <img src={logo} alt="Glider logo" />
                </Link>
            </nav>
            <nav>
                <div className="NavbarLinks">
                    <Link style={{textDecoration:'none'}} to='/postevent'>
                        <div className={"link"+ (props.location.pathname === "/" ? " active": "")}>Post Event</div>
                    </Link>
                </div>
            </nav>
        </div>
    );

}

export default withRouter(Navbar);