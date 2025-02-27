import AdHeader from "../AdHeader/Index.jsx"
import Sidebar from "../Sidebar/Index.jsx"


const AdDashboard = () => {
    return (
        <>
            <section className="main">
                <AdHeader />
                <div className="contentMain ">
                    <div className="sidebarWrapper w-[16%]">
                        <Sidebar />
                    </div>
                </div>

            </section>
        </>
    );
}

export default AdDashboard;