import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Footer from "../Footer.jsx";

const UserMainHeader = () => {
    return (
        <>
            <Nav />
            <Outlet />
            <Footer />
        </>
    );
}

export default UserMainHeader;