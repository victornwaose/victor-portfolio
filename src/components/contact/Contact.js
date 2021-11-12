import React, { useState } from "react";

import "./Contact.scss";
import Deal from "../../assets/deal.png";

const Contact = () => {
    const [message, setMessage] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(!message);
    };

    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src={Deal} alt="Contact-Me" />
            </div>
            <div className="right">
                <h2>Contact.</h2>
                <form>
                    <input type="text" placeholder="Email" />
                    <textarea placeholder="Message" />
                    <button type="submit" onClick={handleSubmit}>
                        Message Me
                    </button>
                    {message && <span>Message Sent, i will reply Shortly</span>}
                </form>
            </div>
        </div>
    );
};

export default Contact;
