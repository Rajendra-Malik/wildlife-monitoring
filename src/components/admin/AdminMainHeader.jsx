import { Outlet } from "react-router-dom";
// import AdminDashboard from "./AdminDashboard";

const AdminMainHeader = () => {
    return (
        <>
            <Outlet /> 
            {/* <AdminDashboard /> */}
        </>
    );
}

export default AdminMainHeader;