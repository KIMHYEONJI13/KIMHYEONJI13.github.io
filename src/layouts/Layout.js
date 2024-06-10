import React from "react";
import Main from "../pages/Main";
import Contact from "../pages/Contact";
import Introduce from "../pages/Introduce";
import Skill from "../pages/Skill";
import Portfolio from "../pages/Portfolio";
import Etc from "../pages/Etc";
import '../Style.css';

function Layout() {

    return (
        <div className="content">
            <div id="main">
                <Main />
            </div>
            <div id="contact">
                <Contact />
            </div>
            <div id="introduce">
                <Introduce />
            </div>
            <div id="skill">
                <Skill />
            </div>
            <div id="portfolio">
                <Portfolio />
            </div>
            <div id="etc">
                <Etc />
            </div>
        </div>

    );
}

export default Layout;
