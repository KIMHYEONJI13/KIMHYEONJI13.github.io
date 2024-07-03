import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import './Layout.css';
import Headers from '../components/Headers';

const Layout = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => {
      window.removeEventListener('scroll', checkScrollTop);
    };
  }, [showScroll]);

  return (
    <div>
      <Headers />
      <div className="content">
        <Outlet />
      </div>
      <button
        className="scrollTop"
        onClick={scrollTop}
        style={{ display: showScroll ? 'flex' : 'none' }}
      >
        &#9650;
      </button>
    </div>
  );
};

export default Layout;


// import React from "react";
// import '../Style.css';
// import Headers from "../components/Headers";

// function Layout() {

//     return (
//         <div className="content">
            
//             <Headers />
            
//         </div>

//     );
// }

// export default Layout;
