import React from 'react';
import style from './Projects.module.scss'
import projContainer from '../common/styles/Container.module.css'
import {Project} from './project/Project'
import todo_list from '../assets/projects_photo/todo_list.png'
import social_network from '../assets/projects_photo/social_network.png'

export const Projects = () => {

    const myProjects = [
        {
            id: 1,
            name: 'Social networks',
            description: 'Social Network using React&redux technologies,API and more modules ',
            project_photo: `${social_network}`,
            gh_pages:'https://github.com/kotpavlik/Ts-React-Redux'
        },
        {
            id: 2, name: 'Todo List ',
            description: 'Todo List using React&redux technologies,API and more modules ',
            project_photo: `${todo_list}`,
            gh_pages:'https://kotpavlik.github.io/IT-INCUBATOR-TODOLIST-TS/'
        },

    ]
    return (
        <div className={style.projects_block} id="projects">
            <div className={`${projContainer.container} ${style.projectContainer}`}>
                <h2 className={style.title}> My projects</h2>
                <div className={style.projects}>{myProjects.map((p) => {
                    return (
                        <Project
                            projectName={p.name} projectDescription={p.description}
                            project_photo={p.project_photo} key={p.id} gh_pages={p.gh_pages}/>
                    )
                })}</div>
            </div>

        </div>
    );
};

