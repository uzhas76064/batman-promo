import React from "react";

const Info = (props) => {
    return (
        <div class="info">
        <div class="movie-info animated fadeInUp delay-2s">
            <span class="tag">Фильм</span>
            <span class="country">{props.country}, {props.year} год</span>
            <a data-fancybox href="https://www.youtube.com/watch?v=cElcLipGNIA"
                class="play animated swing delay-3s">Смотреть трейлер</a>
        </div>
        <a href="#about" class="more">Подробнее</a>
    </div>
    );
}

export default Info;