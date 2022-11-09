import React from 'react';
import style from './Footer.module.scss'
import container from '../common/styles/Container.module.css'
import gh_socials from '../assets/footer_socials/github-octocat-svgrepo-com.svg'
import instagram_socials from '../assets/footer_socials/instagram-2-1-logo-svgrepo-com.svg'
import linkedin_socials from '../assets/footer_socials/linkedin-svgrepo-com.svg'
import telegram_socials from '../assets/footer_socials/telegram-svgrepo-com.svg'
import Tada from "react-reveal/Tada";
import Fade from "react-reveal/Fade";


export const Footer = () => {

    const my_socials =
        [
            {id: 1, photo: gh_socials, link: 'https://github.com/kotpavlik'},
            {id: 2, photo: instagram_socials, link: 'https://instagram.com/_igor_anufriev?igshid=YmMyMTA2M2Y='},
            {id: 3, photo: linkedin_socials, link: 'https://www.linkedin.com/in/igor-anufriev-80b5921b1/'},
            {id: 4, photo: telegram_socials, link: 'https://t.me/igoranufriev'}
        ]


    return (
        <div className={style.footer_block}>
            <div className={`${container.container}`}>
                <div className={style.contain_footer}>
                    <Fade top delay={300}>
                        <h2 className={style.title}>My socials</h2>
                    </Fade>
                    <div className={style.wrapper}>
                        {my_socials.map((img) => {
                            return (
                                <Fade bottom delay={300}>
                                    <a key={img.id} href={img.link}>
                                        <Tada bottom delay={2000}>
                                            <div className={style.obj}>
                                                <img src={img.photo} alt="social network"/>
                                            </div>
                                        </Tada>
                                    </a>
                                </Fade>
                            )
                        })}
                    </div>
                    <span> 2022 all rights reserved </span>
                </div>
            </div>
        </div>
    );
};

