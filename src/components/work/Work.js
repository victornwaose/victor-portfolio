import React, { useState } from "react";
import { FaMobile, FaGithub, FaChrome } from "react-icons/fa";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

import { projects } from "../../data/Data";
import "./Work.scss";

const Work = () => {
    const [currentSlider, setCurrentSlider] = useState(0);

    const handleClick = (direction) => {
        direction === "left"
            ? setCurrentSlider(currentSlider > 0 ? currentSlider - 1 : 6)
            : setCurrentSlider(
                  currentSlider < projects.length - 1 ? currentSlider + 1 : 0
              );
    };
    return (
        <div className="work" id="work">
            <div
                className="slider"
                style={{ transform: `translateX(-${currentSlider * 100}vw)` }}
            >
                {projects?.map((project) => (
                    <div
                        className="container"
                        style={{ height: "100%" }}
                        key={project.title}
                    >
                        <div className="item">
                            <div className="left">
                                <div className="leftContainer">
                                    <FaMobile className="img" />
                                </div>
                                <h2>{project?.title}</h2>
                                <p>{project?.desc}</p>
                                <span>{project?.Projects}</span>

                                <div className="link">
                                    <FaGithub
                                        style={{ marginRight: "38px" }}
                                        className="img-git"
                                        onClick={() =>
                                            window.open(project?.github)
                                        }
                                    />
                                    <FaChrome
                                        className="img-chrome"
                                        style={{ marginLeft: "38px" }}
                                        onClick={() =>
                                            window.open(project?.web)
                                        }
                                    />
                                </div>
                            </div>
                            <div className="right">
                                <img src={project?.image} alt="pic" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <AiOutlineArrowLeft
                className="arrow left"
                onClick={() => handleClick("left")}
            />
            <AiOutlineArrowRight
                className="arrow right"
                onClick={() => handleClick("right")}
            />
        </div>
    );
};

export default Work;
