import React from 'react';
import style from './Navigation.module.scss'
import {Link} from 'react-scroll'

export const Navigation = ({burger,setBurger,nav}) => {

    const closeBurger =()=> {
        setBurger(!burger)
    }

    return (
        <div className={burger ? `${style.navigation_flex} ${style.navigation_flex_burger}`: style.navigation_flex}>
            <Link to="home" activeClass={ nav < 1 ? style.activeFullTop :style.active} spy={true} smooth={true} offset={-80} duration={500} onClick={closeBurger} >home</Link>
            <Link to="skills" activeClass={style.active} spy={true} smooth={true} offset={-80} duration={500} onClick={closeBurger}>skills</Link>
            <Link to="projects" activeClass={style.active} spy={true} smooth={true} offset={-80} duration={500} onClick={closeBurger}>projects</Link>
            <Link to="contacts"  activeClass={style.active} spy={true} smooth={true} offset={-80} duration={500} onClick={closeBurger}>contacts</Link>
        </div>
    )
};

