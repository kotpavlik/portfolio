import React from 'react';
import style from './Project.module.css'
import buttonStyle from '../../common/styles/button.module.css'

export const Project = (props) => {
    return (
        <div className={style.project}>
            <div className={style.image}>
                <button className={`${style.but} ${buttonStyle.button}`}>look</button>
            </div>
            <h3 className={style.title}>{props.projectName}</h3>
            <span className={style.description}>{props.projectDescription}</span>
        </div>
    );
};

