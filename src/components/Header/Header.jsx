import React from "react";
import SearchForm from "./SearchForm";
import User from "./User";
import Logo from "./Logo";

const Header = () => {
    return (
        <header className="header">
            <Logo name="КиноПульс"/>
            <SearchForm/>
            <User/>
        </header>
    );
}

export default Header;