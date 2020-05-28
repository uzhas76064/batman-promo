import React from 'react';

const Sidebar = () => {
    return (
        <aside className="advertisement">
            <h3 className="subscribe-header">Подпишитесь на обновления</h3>
            <form action="" className="subscribe-form">
                <input type="email" className="subscribe-field" placeholder="Ваш Email"></input>
                <button className="subscribe-button">
                    <img src="img/check.svg" alt=""></img>
                </button>
            </form>
            <a target="__blank" href="https://google.com" className="banner">
                <img src="img/banner.jpg" alt=""></img>
            </a>
        </aside>
    )
}

export default Sidebar;
