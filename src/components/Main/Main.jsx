import React, { Component } from "react";
import PropTypes from "prop-types";
import Info from "./Info/Info";

export default class Main extends Component {
    render() {
        return (
            <>
                <h1 class="title animated zoomIn delay-1s">Бэтмен</h1>
                <small class="title-en animated zoomIn delay-1s">The Batman</small>
                <Info year={2021} country="США"/>
            </>
        );
    }
}

Main.propTypes = {
    year: PropTypes.number,
    country: PropTypes.string
}