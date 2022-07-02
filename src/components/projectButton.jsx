import React from 'react';
import style from './customButton.module.scss'
import {Link} from "react-scroll";

export const ProjectButton = ({onClickChange,name,buttonClassName}) => {
    return (
        <div className={style.button_wrapper}>
            <button className={style.proj_button} onClick={()=> {onClickChange()}}>
                {name}
            </button>
        </div>
    );
};
