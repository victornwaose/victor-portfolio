import React, { useState } from "react";

import "./App.scss";
import TopBar from "./components/topbar/TopBar";
import Intro from "./components/hero/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Work from "./components/work/Work";
import Contact from "./components/contact/Contact";

function App() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="app">
            <TopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <div className="sections">
                <Intro />
                <Portfolio />
                <Work />
                <Contact />
            </div>
        </div>
    );
}

export default App;
