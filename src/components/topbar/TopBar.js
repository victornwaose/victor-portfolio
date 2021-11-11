import React from "react";
import { BsPersonFill } from "react-icons/bs";
import { AiFillMail } from "react-icons/ai";

import "./TopBar.scss";

const TopBar = ({ setMenuOpen, menuOpen }) => {
    const handleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className={"topbar " + (menuOpen && "active")}>
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
                <div className="nav">
                    <div className="hamburger" onClick={handleMenu}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBar;
