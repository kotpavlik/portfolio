import React from 'react';
import style from './Skill.module.scss'



export const Skill = ({title,description,skill_photo}) => {

    return (
        <div className={style.skill}>
            <div className={style.icon}>
                <img src={skill_photo} alt="skills_photo"/>
            </div>
            <h3 className={style.title}>{title}</h3>
            <span className={style.description}>
                {
                    description.map((el) => {
                        return (
                            <ul className={style.list} key={el}>
                                <li className={style.list_item}>{el}</li>
                            </ul>
                        )
                    })
                }
            </span>
        </div>
    );
};

