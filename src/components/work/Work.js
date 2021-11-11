import React from "react";
import { FaMobile, FaGithub, FaChrome } from "react-icons/fa";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

import { projects } from "../../data/Data";

import "./Work.scss";

const Work = () => {
    return (
        <div className="work" id="work">
            <div className="slider">
                {projects?.map((project) => (
                    <div className="container">
                        <div className="item">
                            <div className="left">
                                <div className="leftContainer">
                                    <FaMobile className="img" />
                                </div>
                                <h2>{project?.title}</h2>
                                <p style={{ paddingLeft: "10px" }}>
                                    {project?.desc}
                                </p>
                                <span>{project?.Projects}</span>

                                <div>
                                    <FaGithub
                                        className="img"
                                        onClick={() =>
                                            window.location.href(
                                                `${project?.github}`
                                            )
                                        }
                                    />
                                    <FaChrome className="img" />
                                </div>
                            </div>
                            <div className="right">
                                <img src={project?.image} alt="pic" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <AiOutlineArrowLeft className="arrow left" />
            <AiOutlineArrowRight className="arrow right" />
        </div>
    );
};

export default Work;
