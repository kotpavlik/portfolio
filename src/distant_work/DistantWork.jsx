import React from 'react';
import style from './DistantWork.module.css'
import button_distant from '../common/styles/button.module.css'
import containerDistance from '../common/styles/Container.module.css'

export const DistantWork = () => {
    return (<div className={style.distant_work_block}>
            <div className={`${containerDistance.container} ${style.distant_work}`}>
                <h2 className={style.title}>looking into remote work options</h2>
                <button className={`${button_distant.button} ${style.distant_work_butt}`}>hire me</button>
            </div>
        </div>);
};

