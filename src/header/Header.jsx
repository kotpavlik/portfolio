import React, {useState} from 'react';
import {Navigation} from "../nav/Navigation";
import style from "./Header.module.css"
import header_logo from '../assets/9.svg'


export const Header = () => {
    const [nav , setNav] = useState(false)
    const [burger , setBurger] = useState(false)

    const changeBackground = () => {
        console.log(window.scrollY )

        if (window.scrollY >= 30) {
            setNav(true)
        } else {
            setNav(false)
        }
    }

    window.addEventListener('scroll', changeBackground)

    const changeBurger =()=> {
        setBurger(!burger)
    }
    return (

            <div className={nav ? `${style.header} ${style.active}` : style.header}>
                <span className={burger ? `${style.portfolio} ${style.burger_on}` : style.portfolio}>portfolio</span>
                <div className={burger ? `${style.header_burger} ${style.burger_on}` : style.header_burger}
                     onClick={() => {
                         changeBurger()
                     }}>
                    <span></span>
                </div>
                <div className={burger ? `${style.wrapper} ${style.wrapper_on}` : style.wrapper}>
                    <Navigation burger={burger}/>
                </div>
            </div>

    );
};

