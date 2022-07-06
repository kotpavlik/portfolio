import React from 'react';
import style from './Project.module.scss'
import {ProjectButton} from '../../components/projectButton'


export const Project = ({projectName,projectDescription,project_photo,gh_pages}) => {
const bgc_project = {
    backgroundImage:`url(${project_photo})`
}
    return (
        <div className={style.project}>
            <div style={bgc_project} className={style.image}>

                <a href={gh_pages}><ProjectButton name={'look'}/></a>
            </div>
            <h3 className={style.title}>{projectName}</h3>
            <span className={style.description}>{projectDescription}</span>
        </div>
    );
};

