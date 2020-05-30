import React from "react";

const Logo = (props) => {
    return (
        <div className="logo"><a href="index.html">{props.name}</a></div>
    );
}

export default Logo;