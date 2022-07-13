import React from 'react'
import style from './Skils.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import {Skill} from "./skill/Skill"
import react_svg from '../assets/skills_svg/react-svgrepo-com.svg'
import redux_svg from '../assets/skills_svg/redux-svgrepo-com.svg'
import js_svg from '../assets/skills_svg/light-js-svgrepo-com.svg'
import sass_svg from '../assets/skills_svg/sass-svgrepo-com.svg'
import node_js_svg from '../assets/skills_svg/node-svgrepo-com.svg'
import css_svg from '../assets/skills_svg/css-svgrepo-com.svg'
import ts_svg from '../assets/skills_svg/typescript-official-svgrepo-com.svg'
import postman_svg from '../assets/skills_svg/postman_ico.svg'



export const Skills = () => {
    const title = [
        {
            id: 1,
            title: 'JS',
            description:
                [
                    'callback', 'functions', 'class', 'OOP',
                    'objects methods', 'spread operator', 'array methods', 'promises', '__proto__',
                    'prototype', 'call stack'
                ],
            skill_photo: `${js_svg}`
        },
        {
            id: 2,
            title: 'CSS',
            description: [
                'grid', 'flex', '@media', 'animation'
            ],
            skill_photo: `${css_svg}`
        },
        {
            id: 3,
            title: 'REACT',
            description:
                ['react hooks', 'module css or scss', 'props', 'class components', 'functional components',
                    'lottie animations', 'react-router-dom 6', 'ant-design','material UI', 'bootstrap', 'axios', 'formik', 'yup validations',
                    'optimizations with react-memo and', 'react lazy loading','hoc'],
            skill_photo: `${react_svg}`
        },
        {
            id: 4,
            title: 'REDUX',
            description: [
                'redux','react-redux','axios','redux-thunk','redux toolkit','create state','async await with axios',
            'dispatch with hooks','action creators'],
            skill_photo: `${redux_svg}`
        },
        {
            id: 5,
            title: 'SCSS',
            description: ['bem','variables','mixins'],
            skill_photo: `${sass_svg}`
        },
        {
            id: 6,
            title: 'NODE.JS',
            description: ['express - learn now','async - learn now'],
            skill_photo: `${node_js_svg}`
        },
        {
            id: 7,
            title: 'TypeScript',
            description: ['react types','redux types'],
            skill_photo: `${ts_svg}`
        },
        {
            id: 8,
            title: 'Postman',
            description: ['check request for endpoint','working with authorization api-key','create variables'],
            skill_photo: `${postman_svg}`
        }
    ]
    return (<div className={style.skills_block} id="skills">
        <div className={`${styleContainer.container} ${style.skills_container}`}>
            <h2 className={style.title}>My Skills</h2>
            <div className={style.skills}>
                {title.map((e) => {
                    return (<Skill title={e.title} description={e.description} skill_photo={e.skill_photo} key={e.id}/>)
                })}
            </div>
        </div>
    </div>);
};

