import React from 'react';
import style from './Projects.module.scss'
import projContainer from '../common/styles/Container.module.css'
import {Project} from './project/Project'
import todo_list from '../assets/projects_photo/todo_list.png'
import social_network from '../assets/projects_photo/social_network.png'
import portfolio from '../assets/projects_photo/portfolio.png'

export const Projects = () => {

    const myProjects = [
        {
            id: 1,
            name: 'Social networks',
            description: 'This social network is written in React. We take the data from the Social-Network Server API https://social-network.samuraijs.com . Communication with the API is established using the AXIOS library. The social network works with pagination, login, user data processing, as well as changing and deleting user data. ',
            project_photo: `${social_network}`,
            gh_pages:'https://kotpavlik.github.io/Ts-React-Redux/',
            gh_code:'https://github.com/kotpavlik/Ts-React-Redux',
            title: 'Used Technologies',
            technologies:
                'React, Redux, TypeScript, React-Redux, Redux-Thunk, Axios, Lottie animation, Ant design, formik, uyp, jest tests, react-router-dom 6^, gh-pages'
        },
        {
            id: 2,
            name: 'Todo List ',
            description: 'The Todo List application is designed to control tasks. The user can create, modify, delete tasks, as well as rank them in order of importance. Describe tasks and apply markers to them. ',
            project_photo: `${todo_list}`,
            gh_pages:'https://kotpavlik.github.io/IT-INCUBATOR-TODOLIST-TS/',
            gh_code:'https://github.com/kotpavlik/IT-INCUBATOR-TODOLIST-TS',
            title:'Used Technologies',
            technologies:'React, Redux-Toolkit, TypeScript, React-Redux, Redux-Thunk, Axios, Lottie animation, MAU design, formik, uyp, jest tests, react-router-dom 6^, gh-pages, Storybook'
        },
        {
            id: 3,
            name: 'Portfolio',
            description: 'This rect application is written so that you can learn more about me and hire me. Uses smooth scrolling and swiper. With an adaptive for different devices and a burger menu for phones. This application shows more of my work with styles and adaptation',
            project_photo: `${portfolio}`,
            gh_pages:'https://kotpavlik.github.io/portfolio/',
            gh_code:'https://github.com/kotpavlik/portfolio',
            title:'Used Technologies',
            technologies:'React, Lottie animation, formik, uyp, gh-pages, SASS, React-scroll , React-spring, Swiper'
        },

    ]
    return (
        <div className={style.projects_block} id="projects">
            <div className={`${projContainer.container} ${style.projectContainer}`}>
                <h2 className={style.title}> My projects</h2>
                <div className={style.projects}>{myProjects.map((p) => {
                    return (
                        <Project
                            project={p} key={p.id} />
                    )
                })}</div>
            </div>

        </div>
    );
};

