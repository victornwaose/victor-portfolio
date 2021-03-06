import React from "react";

import "./Menu.scss";

const Menu = ({ menuOpen, setMenuOpen }) => {
    const handleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <div className={"menu " + (menuOpen && "active")}>
            <ul>
                <li onClick={handleMenu}>
                    <a href="#intro"> Home</a>
                </li>
                <li onClick={handleMenu}>
                    <a href="#skil"> Portfolio</a>
                </li>
                <li onClick={handleMenu}>
                    <a href="#work"> Works</a>
                </li>
                <li onClick={handleMenu}>
                    <a href="#contact"> Contact</a>
                </li>
            </ul>
        </div>
    );
};

export default Menu;
