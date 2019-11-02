import React from 'react';
import styles from './style.css' ;

const NavComponent = (props) => {
    return(
        <nav>
            <div className="NavBarLinks">
                <link to='/'>
                    <div className={"link"+ (props.location.pathname === "/" ? " active": "")}>Home</div>
                </link>
                <link to='/signIn'>
                    <div className={"link"+ (props.location.pathname === "/" ? " active": "")}>Sign In</div>
                </link>
                <link to='/Register'>
                    <div className={"link"+ (props.location.pathname === "/" ? " active": "")}>Register</div>
                </link>
            </div>
        </nav>
    );

}


export default NavComponent;