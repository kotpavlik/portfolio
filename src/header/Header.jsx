import React from 'react';
import {Navigation} from "../nav/Navigation";
import style from "./Header.module.css"

export const Header = () => {
    return (
        <div className={style.header}>
            <Navigation/>
        </div>
    );
};

