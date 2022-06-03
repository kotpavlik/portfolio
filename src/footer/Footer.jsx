import React from 'react';
import style from './Footer.module.css'
import container from '../common/styles/Container.module.css'

export const Footer = () => {
    return (
        <div className={style.footer_block}>
            <div className={`${container.container} ${style.contain_footer}`}>
                <h2 className={style.title}>Anufriev Igor</h2>
                <div className={style.wrapper}>
                    <div className={style.obj}></div>
                    <div className={style.obj}></div>
                    <div className={style.obj}></div>
                    <div className={style.obj}></div>
                </div>
                <span > 2022 all rights reserved </span>
            </div>
        </div>
    );
};

