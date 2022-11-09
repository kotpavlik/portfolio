import React from 'react';
import style from './DistantWork.module.scss'
import containerDistance from '../common/styles/Container.module.css'
import {ProjectButton} from "../components/projectButton";
import distant_bg from '../assets/distant_bg_photos/distant_bg.jpg'
import {Link} from "react-scroll";
import Fade from "react-reveal/Fade";

export const DistantWork = () => {
    const bg_distant = {
        backgroundImage: `url(${distant_bg})`
    }

    return (
        <div style={bg_distant} className={style.distant_work_block}>
            <div className={`${containerDistance.container}`}>
                <Fade top>
                <div className={style.distant_work}>
                        <h2 className={style.title}>Interested in working with me?</h2>
                        <span>looking into remote work options</span>
                    <Link to="contacts" spy={true} smooth={true} offset={-80} duration={500}>
                        <ProjectButton name={'hare me!'}/>
                    </Link>
                </div>
            </Fade>
            </div>

        </div>);
};

