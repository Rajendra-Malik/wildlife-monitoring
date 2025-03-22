import { Outlet } from "react-router-dom";
import Nav from "./Nav";

const UserMainHeader = () => {
    return (
        <>
            <Nav />
            <Outlet />
        </>
    );
}

export default UserMainHeader;