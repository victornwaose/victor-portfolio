import React from "react";
import { CircularProgressbar,buildStyles } from "react-circular-progressbar";

import "./Progressbar.scss";

const Progressbar = (props) => {
    return (
        <div>
        <div className="progress"> 
        <CircularProgressbar
                value={props.values}
                text={`${props.value}%`}
                style={buildStyles({
                    textColor: props.color,
                    pathColor: props.pathColor,
                })}
                className="circular"
            />
            </div>
           
            <div>
                <p>{props.skillName}</p>
                <p>{props.desc}</p>
            </div>
        </div>
    );
};

export default Progressbar;
