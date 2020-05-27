import React from "react";
import searchIcon from "../../img/search-icon.svg";

const SearchForm = () => {
    return (
    <form action="" className="search">
        <input type="search" value="" className="search-input" placeholder="Фильмы, сериалы, актеры"></input>
        <button className="search-button" type="submit">
            <img src={searchIcon} alt=""></img>
        </button>
    </form>
    );
}

export default SearchForm;