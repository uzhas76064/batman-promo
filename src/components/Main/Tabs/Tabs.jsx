import React from "react";
import {NavLink} from "react-router-dom";

const Tabs = () => {
    return (
        <nav className="tabs">
            <NavLink to="/" exact className="tabs-item">Описание</NavLink>
            <NavLink to="/reviews" className="tabs-item">Рецензии</NavLink>
            <NavLink to="/premieres" className="tabs-item">Премьеры</NavLink>
            <NavLink to="/actors" className="tabs-item">Актеры</NavLink>
            <NavLink to="/achievements" className="tabs-item">Награды</NavLink>
            <NavLink to="/facts" className="tabs-item">Факты</NavLink>
            <NavLink to="/sites" className="tabs-item">Сайты</NavLink>
            <NavLink to="/like" className="tabs-item">
                <img src="img/bookmark-active.svg" alt="Закладка" className="bookmark-added"></img>
            </NavLink>
        </nav>
    );
}

export default Tabs;