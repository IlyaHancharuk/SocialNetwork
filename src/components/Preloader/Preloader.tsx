import React from 'react';
import loadingSVG from "./../../assets/svg/spinning-circles.svg";
import s from "./Preloader.module.css";


const Preloader = () => {
    return (
        <div>
            <img className={s.preloader} src={loadingSVG} alt="preloader" />
        </div>
    )
}

export default Preloader;
