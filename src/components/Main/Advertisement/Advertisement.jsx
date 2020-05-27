import React from 'react';

const Advertisement = () => {
    return (
        <aside className="advertisement">
            <h3 className="subscribe-header">Подпишитесь на обновления</h3>
            <form action="" className="subscribe-form">
                <input type="email" className="subscribe-field" placeholder="Ваш Email"></input>
                <button className="subscribe-button">
                    <img src="img/check.svg" alt=""></img>
                </button>
            </form>
            <a href="google.com" className="banner">
                <img src="img/banner.jpg" alt=""></img>
            </a>
        </aside>
    )
}

export default Advertisement;
