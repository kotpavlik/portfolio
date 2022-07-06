import React from 'react';
import style from './DistantWork.module.scss'
import containerDistance from '../common/styles/Container.module.css'
import {ProjectButton} from "../components/projectButton";
import distant_bg from '../assets/distant_bg_photos/distant_bg.jpg'

export const DistantWork = () => {
    const bg_distant = {
        backgroundImage:`url(${distant_bg})`
    }

    return (
        <div style={bg_distant} className={style.distant_work_block}>
            <div className={`${containerDistance.container}`}>
                <div className={style.distant_work}>
                    <h2 className={style.title}>Interested in working with me?</h2>
                    <span>looking into remote work options</span>
                    <ProjectButton name={'hare me!'}/>
                </div>
            </div>

        </div>);
};

