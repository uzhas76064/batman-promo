import React from "react";

const Info = (props) => {
    return (
        <div className="info">
        <div className="movie-info animated fadeInUp delay-2s">
            <span className="tag">Фильм</span>
            <span className="country">{props.country}, {props.year} год</span>
            <a data-fancybox href="https://www.youtube.com/watch?v=cElcLipGNIA"
                className="play animated swing delay-3s">Смотреть трейлер</a>
        </div>
        <a href="#about" className="more">Подробнее</a>
    </div>
    );
}

export default Info;