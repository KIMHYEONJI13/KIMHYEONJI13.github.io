import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Headers.css';

const Headers = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <header>
      <div className="top-nav">
        <nav>
          <ul>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/introduce">Introduce</Link></li>
            <li><Link to="/skill">Skill</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/etc">Etc</Link></li>
          </ul>
        </nav>
      </div>
      <div className="hamburger" onClick={toggleDropdown}>
        &#9776;
      </div>
      <nav className={`dropdown ${isDropdownOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/contact" onClick={toggleDropdown}>Contact</Link></li>
          <li><Link to="/introduce" onClick={toggleDropdown}>Introduce</Link></li>
          <li><Link to="/skill" onClick={toggleDropdown}>Skill</Link></li>
          <li><Link to="/portfolio" onClick={toggleDropdown}>Portfolio</Link></li>
          <li><Link to="/etc" onClick={toggleDropdown}>Etc</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Headers;


// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './Headers.css';

// const Header = () => {
//   const [isDropdownOpen, setDropdownOpen] = useState(false);

//   const toggleDropdown = () => {
//     setDropdownOpen(!isDropdownOpen);
//   };

//   return (
//     <header>
//       <div className="top-nav">
//         <nav>
//           <ul>
//             <li><Link to="/">Main</Link></li>
//             <li><Link to="/contact">Contact</Link></li>
//             <li><Link to="/introduce">Introduce</Link></li>
//             <li><Link to="/skill">Skill</Link></li>
//             <li><Link to="/portfolio">Portfolio</Link></li>
//             <li><Link to="/etc">Etc</Link></li>
//           </ul>
//         </nav>
//       </div>
//       <div className="hamburger" onClick={toggleDropdown}>
//         &#9776;
//       </div>
//       <nav className={`dropdown ${isDropdownOpen ? 'open' : ''}`}>
//         <ul>
//           <li><Link to="/" onClick={toggleDropdown}>Main</Link></li>
//           <li><Link to="/contact" onClick={toggleDropdown}>Contact</Link></li>
//           <li><Link to="/introduce" onClick={toggleDropdown}>Introduce</Link></li>
//           <li><Link to="/skill" onClick={toggleDropdown}>Skill</Link></li>
//           <li><Link to="/portfolio" onClick={toggleDropdown}>Portfolio</Link></li>
//           <li><Link to="/etc" onClick={toggleDropdown}>Etc</Link></li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Header;


// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './Headers.css';

// const Header = () => {
//   const [isDropdownOpen, setDropdownOpen] = useState(false);

//   const toggleDropdown = () => {
//     setDropdownOpen(!isDropdownOpen);
//   };

//   return (
//     <header>
//       <div className="top-nav">
//         <nav>
//           <ul>
//             <li><Link to="/">Main</Link></li>
//             <li><Link to="/contact">Contact</Link></li>
//             <li><Link to="/introduce">Introduce</Link></li>
//             <li><Link to="/skill">Skill</Link></li>
//             <li><Link to="/portfolio">Portfolio</Link></li>
//             <li><Link to="/etc">Etc</Link></li>
//           </ul>
//         </nav>
//       </div>
//       <div className="hamburger" onClick={toggleDropdown}>
//         &#9776;
//       </div>
//       <nav className={`dropdown ${isDropdownOpen ? 'open' : ''}`}>
//         <ul>
//           <li><Link to="/" onClick={toggleDropdown}>Main</Link></li>
//           <li><Link to="/contact" onClick={toggleDropdown}>Contact</Link></li>
//           <li><Link to="/introduce" onClick={toggleDropdown}>Introduce</Link></li>
//           <li><Link to="/skill" onClick={toggleDropdown}>Skill</Link></li>
//           <li><Link to="/portfolio" onClick={toggleDropdown}>Portfolio</Link></li>
//           <li><Link to="/etc" onClick={toggleDropdown}>Etc</Link></li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Header;




// import { Link } from "react-router-dom";

// function Headers() {

//     return (
//         <header>
//             <nav>
//                 <ul>
//                     <li><Link to="/">Main</Link></li>
//                     <li><Link to="/contact">Contact</Link></li>
//                     <li><Link to="/introduce">Introduce</Link></li>
//                     <li><Link to="/skill">Skill</Link></li>
//                     <li><Link to="/portfolio">Portfolio</Link></li>
//                     <li><Link to="/etc">Etc</Link></li>
//                 </ul>
//             </nav>
//         </header>
//     );
// }

// export default Headers; 