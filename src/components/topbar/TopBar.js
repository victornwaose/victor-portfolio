import React from "react";
import Link from "react-router-dom";
import { BsPersonFill } from "react-icons/bs";
import { AiFillMail } from "react-icons/ai";

import "./TopBar.scss";

const TopBar = () => {
    return (
        <div className="topbar">
            <div className="wrapper">
                <div className="topbar__logo">
                    <a href="#intro" className="logo">
                        Victor
                    </a>
                    <div className="itemContainer">
                        <BsPersonFill className="icon" />
                        <span>+2348122587723</span>
                    </div>
                    <div className="itemContainer">
                        <AiFillMail className="icon" />
                        <span>nwaosevictor1234@gmail.com</span>
                    </div>
                </div>
                <div className=" nav"></div>
            </div>
        </div>
    );
};

export default TopBar;
