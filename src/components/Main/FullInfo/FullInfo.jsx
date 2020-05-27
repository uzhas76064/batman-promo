import React from "react";

const FullInfo = () => {
    return (
        <div class="full-info">
        <nav class="tabs">
            <a href="#about" class="tabs-item tab-active">Описание</a>
            <a href="#reviews" class="tabs-item">Рецензии</a>
            <a href="#premieres" class="tabs-item">Премьеры</a>
            <a href="#actors" class="tabs-item">Актеры</a>
            <a href="#achievements" class="tabs-item">Награды</a>
            <a href="#facts" class="tabs-item">Факты</a>
            <a href="#sites" class="tabs-item">Сайты</a>
            <a href="#like" class="tabs-item">
                <img src="img/bookmark-active.svg" alt="" class="bookmark-added"></img>
            </a>
        </nav>
        <div class="full-content">
            <div class="tabs-content visible" id="about">
                <p class="text">Предстоящий американский супергеройский фильм, основанный на одноимённых
                    комиксах издательства DC Comics. Картина будет выпущена компанией Warner Bros. и будет
                    перезагрузкой всех фильмов о Бэтмене.</p>
                <p class="text">Фильм является десятым по счёту фильмом из Расширенной вселенной DC.
                    Режиссёром и сценаристом фильма выступит Мэтт Ривз, а главную роль исполнит Роберт
                    Паттинсон</p>
                <h4 class="text-title">Разработка</h4>
                <p class="text">В октябре 2014 года студия Warner Bros. объявила, что в разработке находится
                    сольный фильм о Бэтмене, роль которого вновь исполнит Бен Аффлек. В июле 2015 года
                    сообщалось, что Аффлек ведёт переговоры со студией по поводу постановки фильма и
                    совместного написания сценария с Джеффом Джонсом. </p>
                <p class="text">После выхода фильма «Бэтмен против Супермена: На заре справедливости»
                    руководитель агентства WME Патрик Уайтсел подтвердил, что Аффлек написал сценарий для
                    сольного фильма о Бэтмене и в настоящий момент его рассматривают студия и DC. В мае 2016
                    года Джереми Айронс подтвердил, что он появится в фильме про Тёмного Рыцаря. </p>
                <p class="text">На Comic-Con в Сан-Диего в июле 2016 года было официально подтверждено, что
                    Аффлек станет режиссёром картины. В августе 2016 года на одной из страниц Аффлека в
                    социальных сетях был опубликован тестовый материал, в котором был показан персонаж
                    Детстроук. 8 сентября 2016 года Джефф Джонс подтвердил, что Джо Манганьелло сыграет
                    наёмника Слейда Уилсона, который, возможно, станет главным злодеем фильма.</p>
            </div>

            <div class="tabs-content" id="reviews">
                <p class="text">Тут скоро появятся рецензии</p>
            </div>
            <div class="tabs-content" id="premieres">
                <p class="text">Тут скоро появятся премьеры</p>
            </div>
            <div class="tabs-content" id="actors">
                <p class="text">Тут скоро появятся актеры</p>
            </div>
            <div class="tabs-content" id="achievements">
                <p class="text">Тут скоро появятся награды</p>
            </div>
            <div class="tabs-content" id="facts">
                <p class="text">Тут скоро появятся факты</p>
            </div>
            <div class="tabs-content" id="sites">
                <p class="text">Тут скоро появятся сайты</p>
            </div>
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
        </div>
    </div>
    );
}

export default FullInfo;