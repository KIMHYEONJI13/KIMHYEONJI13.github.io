import Header from "../components/Header";
import Navbar from "../components/Navbar";
import {Outlet} from 'react-router-dom';

function Layout() {
    return (
        <>
            <Header />
            <Navbar />
            <Outlet />  {/** route 페이지 올것이라는 마커역할(페이지 변경됨) */}
        </>
    );
}

export default Layout;