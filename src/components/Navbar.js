// import { NavLink } from 'react-router-dom';

// /*
//     [ <NavLink> 컴포넌트 ]
//     NavLink 컴포넌트는 Link 컴포넌트와 사용이 거의 유사하다.
//     하지만 현재 Nav의 상태가 active인지에 대한 값을 이용하여 스타일을 조작하거나 클래스 이름을 변경할 수 있다.
// */

// function Navbar() {

//     const activeStyle = {
//         backgroundColor: 'yellow'
//     }

//     return (
//         <ul>
//             <nav>
//                 <NavLink to="/" style={({ isActive }) => isActive ? activeStyle : undefined}>HOME</NavLink>
//                 <NavLink to="/contact" style={({ isActive }) => isActive ? activeStyle : undefined}>Contact</NavLink>
//                 <NavLink to="/introduce" style={({ isActive }) => isActive ? activeStyle : undefined}>Introduction</NavLink>
//                 <NavLink to="/skill" style={({ isActive }) => isActive ? activeStyle : undefined}>SkillSet</NavLink>
//                 <NavLink to="/portfolio" style={({ isActive }) => isActive ? activeStyle : undefined}>Portfolio</NavLink>
//                 <NavLink to="/etc" style={({ isActive }) => isActive ? activeStyle : undefined}></NavLink>
//             </nav>lo
//         </ul>
//     );
// }

// export default Navbar;