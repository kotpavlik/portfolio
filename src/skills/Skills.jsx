import React from 'react';
import style from './Skils.module.css'
import styleContainer from '../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";

export const Skills = () => {
    const title =[
        {title:'JS',description:'more methods.'},
        {title:'CSS',description:'scss, module, bootstrap, ant design, material ui  '},
        {title:'REACT',description:'hooks , hoc , props'}
    ]
    return (
        <div className={style.skills_block}>
            <div className={`${styleContainer.container} ${style.skills_container}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    {title.map((e) => {
                        return (
                            <Skill title={e.title} description={e.description}/>
                        )})}
                </div>
            </div>
        </div>
    );
};

