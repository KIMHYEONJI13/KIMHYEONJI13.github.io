import React from "react";
import Main from "../Main";
import Contact from "../pages/Contact";
import Introduce from "../pages/Introduce";
import Skill from "../pages/Skill";
import Portfolio from "../pages/Portfolio";
import Etc from "../pages/Etc";
import '../Style.css';

function Layout() {
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <>
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
        </>
    );
}

export default Layout;


// import Header from "../components/Header";
// import Navbar from "../components/Navbar";
// import { Outlet } from 'react-router-dom';
// import React from "react";
// import { Link } from "react-router-dom";
// import Main from "../Main";
// import Contact from "../pages/Contact";
// import Introduce from "../pages/Introduce";
// import Skill from "../pages/Skill";
// import Portfolio from "../pages/Portfolio";
// import Etc from "../pages/Etc";

// function Layout() {
//     const scrollToSection = (id) => {
//         const section = document.getElementById(id);
//         if (section) {
//             section.scrollIntoView({ behavior: "smooth" });
//         }
//     };

//     return (
//         // <>
//         //     <Header />
//         //     <Navbar />
//         //     <Outlet />  {/** route 페이지 올것이라는 마커역할(페이지 변경됨) */}
//         // </>
//         <div>
//             <nav className="navbar">
//                 <ul>
//                     <li><Link to="/" onClick={() => scrollToSection('main')}>Main</Link></li>
//                     <li><Link to="/" onClick={() => scrollToSection('contact')}>Contact</Link></li>
//                     <li><Link to="/" onClick={() => scrollToSection('introduce')}>Introduce</Link></li>
//                     <li><Link to="/" onClick={() => scrollToSection('skill')}>Skill</Link></li>
//                     <li><Link to="/" onClick={() => scrollToSection('portfolio')}>Portfolio</Link></li>
//                     <li><Link to="/" onClick={() => scrollToSection('etc')}>Etc</Link></li>
//                 </ul>
//             </nav>
//             <div className="content">

//                 <div id="main">
//                     <Main />
//                 </div>
//                 <div id="contact">
//                     <Contact />
//                 </div>
//                 <div id="introduce">
//                     <Introduce />
//                 </div>
//                 <div id="skill">
//                     <Skill />
//                 </div>
//                 <div id="portfolio">
//                     <Portfolio />
//                 </div>
//                 <div id="etc">
//                     <Etc />
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Layout;