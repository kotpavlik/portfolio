import React from 'react';
import style from './Navigation.module.css'

export const Navigation = () => {
    return (
        <div className={style.navigation_flex}>
        <a href="#">home</a>
        <a href="#">skills</a>
        <a href="#">projects</a>
        <a href="#">contacts</a>
    </div>
    )
};

