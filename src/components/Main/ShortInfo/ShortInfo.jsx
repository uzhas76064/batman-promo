import React from "react";

const ShortInfo = () => {
    return (
        <div className="short-info">
            <img src="img/poster.jpg" alt="" className="poster wow fadeInUpBig delay-2s"></img>
            <button className="button">Буду смотреть</button>
            <h3 className="actors-title">В главных ролях</h3>
            <ul className="actors-list wow slideInLeft delay-1s">
                <li className="actors-list-item">Роберт Паттинсон</li>
                <li className="actors-list-item">Зои Кравиц</li>
                <li className="actors-list-item">Колин Фаррелл</li>
                <li className="actors-list-item">Питер Сарсгаард</li>
                <li className="actors-list-item">Пол Дано</li>
                <li className="actors-list-item">Энди Серкис</li>
                <li className="actors-list-item">Джеффри Райт</li>
                <li className="actors-list-item">Джон Туртурро</li>
                <li className="actors-list-item">Макс Карвер</li>
                <li className="actors-list-item">Кон О’Нилл</li>
            </ul>
        </div>
    )
}

export default ShortInfo;