import React, { useEffect, useRef } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { init } from "ityped";

import "./Intro.scss";
import Victor from "../../assets/vic.png";

const Intro = () => {
    const textRef = useRef();
    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            strings: ["Front-end Developer"],
        });
    }, []);

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer ">
                    <img src={Victor} alt="victor" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>hi I'm </h2>
                    <h1>Nwaose Victor</h1>
                    <h3>
                        Freelance {""}
                        <span ref={textRef}></span>
                    </h3>
                </div>
                <a href="#protfolio">
                    <RiArrowDropDownLine
                        className="dropIcon"
                        style={{ width: "200px", height: "50px" }}
                    />
                </a>
            </div>
        </div>
    );
};

export default Intro;
