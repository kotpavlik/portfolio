import React from 'react';
import style from './Navigation.module.css'
import {Link} from 'react-scroll'

export const Navigation = ({burger,setBurger}) => {

    const closeBurger =()=> {
        setBurger(!burger)
    }

    return (
        <div className={burger ? `${style.navigation_flex} ${style.navigation_flex_burger}`: style.navigation_flex}>
            <Link to="home" spy={true} smooth={true} offset={0} duration={500} onClick={closeBurger} >home</Link>
            <Link to="skills" spy={true} smooth={true} offset={-80} duration={500} onClick={closeBurger}>skills</Link>
            <Link to="projects" spy={true} smooth={true} offset={-80} duration={500} onClick={closeBurger}>projects</Link>
            <Link to="contacts" spy={true} smooth={true} offset={-80} duration={500} onClick={closeBurger}>contacts</Link>
        </div>
    )
};

