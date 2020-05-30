import React from "react";
import bookmark from "../../img/bookmark.svg";
import user from "../../img/user.png";

const User = () => {
    return (
        <div className="user">
            <img src={bookmark} alt="" className="bookmark"></img>
            <img src={user} alt="" className="avatar"></img>
        </div>
     )
}

export default User;