import React from 'react';
import style from './Projects.module.css'
import projContainer from '../common/styles/Container.module.css'
import {Project} from "./project/Project";

export const Projects = () => {
    const myProjects = [
        {id:1,name:'Social networks',description:'more fonts about my project'},
        {id:2,name:'Todo List ',description:'more fonts about my project'},

    ]
    return (
        <div className={style.projects_block} id="projects">
            <div className={`${projContainer.container} ${style.projectContainer}`}>
                <h2 className={style.title}> My projects</h2>
                <div className={style.projects}>{myProjects.map((p) => {
                    return (
                        <Project projectName={p.name} projectDescription={p.description} key={p.id}/>
                    )
                })}</div>
            </div>

        </div>
    );
};

