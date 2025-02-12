import AdHeader from "../AdHeader/Index.jsx"
import Sidebar from "../Sidebar/index.jsx"

const AdDashboard = () => {
    return (
        <>
            <section className="main">
                <AdHeader />
                <div className="contentMain flex">
                    <div className="sidebarWrapper w-[16%]">
                       <Sidebar />
                    </div>
                </div>
            </section>
        </>
    );
}

export default AdDashboard;