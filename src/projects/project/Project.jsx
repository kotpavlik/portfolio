import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import style from './Project.module.scss'
import {ProjectButton} from "../../components/projectButton";
import Fade from "react-reveal/Fade";



export const Project = ({project}) => {
const bgc_project = {
    backgroundImage:`url(${project.project_photo})`
}
    return (
        <Fade left mirror={project.id % 2 ? true : false}>
            <div className={style.project}>
                <Swiper
                    style={{
                        "--swiper-navigation-color": "white",
                        "--swiper-pagination-color": "white",
                    }}
                    speed={600}
                    parallax={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Parallax, Pagination, Navigation]}
                >
                    <div
                        slot="container-start"
                        className={style.parallax_bg}
                        style={bgc_project}
                        data-swiper-parallax="-23%"
                    ></div>
                    <SwiperSlide>
                        <div className={style.information_container}>
                            <div className={style.title} data-swiper-parallax="-300">
                                {project.name}
                            </div>
                            <div className={style.description} data-swiper-parallax="-100">
                                <p>
                                    {project.description}
                                </p>
                            </div>
                            <div className={style.butt_container}>
                                <a href={project.gh_pages}><ProjectButton name={'demo'}/></a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={style.information_container}>
                            <div className={style.title} data-swiper-parallax="-300">
                                {project.title}
                            </div>
                            <div data-swiper-parallax="-100">
                                <p className={style.description}>
                                    {project.technologies}
                                </p>
                            </div>
                            <div>
                                <a href={project.gh_code}><ProjectButton name={'code'}/></a>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </Fade>
    );
};