import React, { useState } from "react";

const ShortInfo = () => {
    let[actors] = useState(["Роберт Паттинсон", "Зои Кравиц", "Колин Фаррелл", 
                                        "Питер Сарсгаард", "Пол Дано", "Энди Серкис", 
                                        "Джеффри Райт", "Джон Туртурро", "Макс Карвер", "Кон О’Нилл"])

    return (
        <div className="short-info">
            <img src="img/poster.jpg" alt="" className="poster wow fadeInUpBig delay-2s"></img>
            <button className="button">Буду смотреть</button>
            <h3 className="actors-title">В главных ролях</h3>
            <ul className="actors-list wow slideInLeft delay-1s">
                { actors.map((actor, index) => {
                    return (
                        <li key={index} className="actors-list-item">{actor}</li>
                    )
                }) }
            </ul>
        </div>
    )
}

export default ShortInfo;