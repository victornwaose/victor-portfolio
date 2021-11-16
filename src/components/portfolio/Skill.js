import React, { useState } from "react";
import { skills } from "../../data/Data";

import "./Skill.scss";

const Skill = () => {
    const [datas, setDatas] = useState(skills);
    console.log(datas, "data");

    return (
        <div className="skill" id="skill">
            <p>what I Do</p>
            <h1>Specialized In</h1>
            <div className="barContainer">
                {datas?.map((data) => (
                    <div className="skillCard" key={data.id}>
                        <img src={data?.img} alt="" />
                        <h4 style={{ color: "#16c79a" }}>{data?.SkillName}</h4>
                        <h5 style={{ color: "#000" }}>{data?.desc}</h5>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skill;
