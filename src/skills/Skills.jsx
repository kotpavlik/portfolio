import React from 'react';
import style from './Skils.module.css'
import styleContainer from '../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";

export const Skills = () => {
    const title =[
        {id:1,title:'JS',description:'more methods.'},
        {id:2,title:'CSS',description:'scss, module, bootstrap, ant design, material ui  '},
        {id:3,title:'REACT',description:'hooks , hoc , props'},
        {id:3,title:'REDUX',description:'thunk , reducers , create store'},
        {id:3,title:'SCSS',description:'bam '},
        {id:3,title:'NODE.JS',description:'API , express , async'}
    ]
    return (
        <div className={style.skills_block}>
            <div className={`${styleContainer.container} ${style.skills_container}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    {title.map((e) => {
                        return (
                            <Skill title={e.title} description={e.description} key={e.id}/>
                        )})}
                </div>
            </div>
        </div>
    );
};

