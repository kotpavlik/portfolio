import React from 'react';
import style from './Projects.module.scss'
import projContainer from '../common/styles/Container.module.css'
import {Project} from './project/Project'
import todo_list from '../assets/projects_photo/todo_list.png'
import social_network from '../assets/projects_photo/social_network.png'
import portfolio from '../assets/projects_photo/portfolio.png'
import calc_dnd from '../assets/projects_photo/drag_and_drop_calc.jpg'
import cards_app from '../assets/projects_photo/cards.jpg'


export const Projects = () => {

    const myProjects = [
        {
        id: 1,
            name: 'Cards Team Project',
            description: 'This application works like a simple calculator but it\'s got drag and drop constructor.You can transfom your calculator as you wish but it\'s every stay simple calculator',
            project_photo: `${cards_app}`,
            gh_pages:'https://reni101.github.io/Cards-app/#/packs?search=&user_id=&min=0&max=6',
            gh_code:'https://github.com/Reni101/Cards-app',
            title:'Used Technologies',
            technologies:'React | Redux Toolkit | TypeScript | MUI | Gh-Pages | SASS | Lotie Animation | Formik | Yup | Axios | React Router Dom 6 | Moment | Redux-Thunk | React-Redux | Socket.io-client '
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
            gh_pages:'https://portfolio-with-tg-bot.herokuapp.com/',
            gh_code:'https://github.com/kotpavlik/portfolio',
            title:'Used Technologies',
            technologies:'React, Lottie animation, formik, uyp, gh-pages, SASS, React-scroll , React-spring, Swiper'
        },
        {
            id: 4,
            name: 'Drag and drop Calculator',
            description: 'This application works like a simple calculator but it\'s got drag and drop constructor.You can transfom your calculator as you wish but it\'s every stay simple calculator',
            project_photo: `${calc_dnd}`,
            gh_pages:'https://kotpavlik.github.io/calc_dnd_react_ts_jest/',
            gh_code:'https://github.com/kotpavlik/calc_dnd_react_ts_jest',
            title:'Used Technologies',
            technologies:'React | Redux Toolkit | TypeScript | MUI | Gh-Pages | SASS | Drag and Drop '
        },
         {
            id: 5,
            name: 'Social networks',
            description: 'This social network is written on React. We take the data from the Social-Network Server API https://social-network.samuraijs.com . Communication with the API is established using the AXIOS library. The social network works with pagination, login, user data processing, as well as changing and deleting user data. ',
            project_photo: `${social_network}`,
            gh_pages:'https://kotpavlik.github.io/Ts-React-Redux/',
            gh_code:'https://github.com/kotpavlik/Ts-React-Redux',
            title: 'Used Technologies',
            technologies:
                'React, Redux, TypeScript, React-Redux, Redux-Thunk, Axios, Lottie animation, Ant design, formik, uyp, jest tests, react-router-dom 6^, gh-pages'
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

