import React from 'react';
import style from './Projects.module.css'
import projContainer from '../common/styles/Container.module.css'
import {Project} from "./project/Project";

export const Projects = () => {
    const myProjects = [
        {name:'Social networks',description:'more fonts about my project'},
        {name:'Todo List ',description:'more fonts about my project'},

    ]
    return (
        <div className={style.projects_block}>
            <div className={`${projContainer.container} ${style.projectContainer}`}>
                <h2 className={style.title}> My projects</h2>
                <div className={style.projects}>{myProjects.map((p) => {
                    return (
                        <Project projectName={p.name} projectDescription={p.description}/>
                    )
                })}</div>
            </div>

        </div>
    );
};

