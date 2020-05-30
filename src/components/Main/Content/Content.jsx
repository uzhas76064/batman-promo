import React from "react";
import ShortInfo from "../ShortInfo/ShortInfo";
import FullInfo from "../FullInfo/FullInfo";

const Content = () => {
    return (
        <div className="content">
             <ShortInfo/>
             <FullInfo/>
        </div>
    );
}

export default Content;