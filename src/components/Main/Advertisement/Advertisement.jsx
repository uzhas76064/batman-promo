import React from 'react';

const Advertisement = () => {
    return (
        <aside class="advertisement">
            <h3 class="subscribe-header">Подпишитесь на обновления</h3>
            <form action="" class="subscribe-form">
                <input type="email" class="subscribe-field" placeholder="Ваш Email"></input>
                <button class="subscribe-button">
                    <img src="img/check.svg" alt=""></img>
                </button>
            </form>
            <a href="google.com" class="banner">
                <img src="img/banner.jpg" alt=""></img>
            </a>
        </aside>
    )
}

export default Advertisement;
