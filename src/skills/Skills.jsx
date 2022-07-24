import React, {useState} from 'react'
import style from './Skils.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import react_svg from '../assets/skills_svg/react-svgrepo-com.svg'
import redux_svg from '../assets/skills_svg/redux-svgrepo-com.svg'
import js_svg from '../assets/skills_svg/light-js-svgrepo-com.svg'
import sass_svg from '../assets/skills_svg/sass-svgrepo-com.svg'
import node_js_svg from '../assets/skills_svg/node-svgrepo-com.svg'
import css_svg from '../assets/skills_svg/css-svgrepo-com.svg'
import ts_svg from '../assets/skills_svg/typescript-official-svgrepo-com.svg'
import postman_svg from '../assets/skills_svg/postman_ico.svg'
import heroku_svg from '../assets/skills_svg/heroku-logo-svgrepo-com.svg'
import gitHub_svg from '../assets/skills_svg/github-octocat-svgrepo-com.svg'
import "swiper/scss";
import "swiper/scss/effect-coverflow";
import "swiper/scss/pagination";
import 'swiper/scss';


export const Skills = () => {
    const [desc, setDesc] = useState(0)
    const [display,setDisplay] = useState(false)
    const title = [{
        id: 99,
        title: 'JS',
        description: ['callback', 'functions', 'class', 'OOP', 'objects methods', 'spread operator', 'array methods', 'promises', '__proto__', 'prototype', 'call stack'],
        skill_photo: `${js_svg}`
    }, {
        id: 98, title: 'CSS', description: ['grid', 'flex', '@media', 'animation'], skill_photo: `${css_svg}`
    }, {
        id: 97,
        title: 'REACT',
        description: ['react hooks', 'module css or scss', 'props', 'class components', 'functional components', 'lottie animations', 'react-router-dom 6', 'ant-design', 'material UI', 'bootstrap', 'axios', 'formik', 'yup validations', 'optimizations with react-memo and', 'react lazy loading', 'hoc'],
        skill_photo: `${react_svg}`
    }, {
        id: 4,
        title: 'REDUX',
        description: ['redux', 'react-redux', 'axios', 'redux-thunk', 'redux toolkit', 'create state', 'async await with axios', 'dispatch with hooks', 'action creators'],
        skill_photo: `${redux_svg}`
    }, {
        id: 96, title: 'SCSS', description: ['bem', 'variables', 'mixins'], skill_photo: `${sass_svg}`
    }, {
        id: 95,
        title: 'NODE.JS',
        description: ['express - learn now', 'async - learn now'],
        skill_photo: `${node_js_svg}`
    }, {
        id: 94, title: 'TypeScript', description: ['react types', 'redux types'], skill_photo: `${ts_svg}`
    }, {
        id: 93,
        title: 'Postman',
        description: ['check request for endpoint', 'working with authorization api-key', 'create variables'],
        skill_photo: `${postman_svg}`
    }, {
        id: 92, title: 'Heroku', description: ['Used Heroku with GitHub'], skill_photo: `${heroku_svg}`
    }, {
        id: 100,
        title: 'GitHub',
        description: ['git init', 'git clone', ' git add .', 'git commit -m"new commit"', 'git push', ' git fetch + git merge = git pull', 'git reset --hard head^', 'git checkout', 'git branch'],
        skill_photo: `${gitHub_svg}`
    },

    ]
    return (<div className={style.skills_block} id="skills">
        <div className={`${styleContainer.container} ${style.skills_container}`}>
            <h2 className={style.title}>My Skills</h2>
            <div className={style.skills}>
                {title.map((e) => {

                    return (
                        display
                            ? <>
                            <span className={style.close} onClick={()=> {setDisplay(false)}}></span>
                                <div className={display && e.id === desc ? style.description_container : style.display_none_for_desc}>
                                    <h3 className={style.title}>{e.id === desc && e.title}</h3>
                                    <span className={style.description}>
                                {e.id === desc && e.description.map((el , index) => {
                                    return (<ul className={style.list} key={el.length}>
                                        <li className={style.list_item}>{el}</li>
                                    </ul>)
                                })}
                                    </span>
                                </div>
                        </>
                            :
                            <>
                                <div className={style.img_container} onClick={() => {
                                    setDisplay(true)
                                    setDesc(e.id)
                                }}>
                                    <img src={e.skill_photo}/>
                                </div>
                        </>
                    )
                })}
            </div>
        </div>
    </div>);
};





