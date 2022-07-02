import React from 'react';
import style from './Navigation.module.css'

export const Navigation = ({burger}) => {

    return (
        <div className={burger ? `${style.navigation_flex} ${style.navigation_flex_burger}`: style.navigation_flex}>
            <a href="#">home</a>
            <a href="#">skills</a>
            <a href="#">projects</a>
            <a href="#">contacts</a>
        </div>
    )
};

