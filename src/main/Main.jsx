import React from 'react';
import style from './Main.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import full_screen_photo from '../assets/fuul_screen.JPG'
import {ProjectButton} from '../components/projectButton'
import {Link} from "react-scroll";
import ReactTypingEffect from 'react-typing-effect';
import Slide from "react-reveal/Slide";



export const Main = () => {
    const full_screen = {
        backgroundImage: `url(${full_screen_photo})`,
    }
    return (
        <div style={full_screen} className={style.main} id="home">
            <div className={styleContainer.container}>
                <div className={style.text}>
                    <Slide top cascade><span>Hi there </span></Slide>
                    <h1> I am Igor Anufriev</h1>
                    <p>
                        <ReactTypingEffect text={['Frontend developer']}/>
                    </p>
                    <Link to="projects" spy={true} smooth={true} offset={-80} duration={500}>
                        <ProjectButton name={"view my projects"}/>
                    </Link>
                </div>
                <Link to="skills" spy={true} smooth={true} offset={-80} duration={500}>
                    <div className={style.arrow}>
                        <span></span></div>
                </Link>
            </div>
        </div>
    );
};

