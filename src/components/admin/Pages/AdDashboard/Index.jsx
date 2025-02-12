import AdHeader from "../AdHeader/Index.jsx"
import Sidebar from "../Sidebar/Index.jsx"
import Content from "../Content/Index.jsx"

const AdDashboard = () => {
    return (
        <>
            <section className="main">
                <AdHeader />
                <div className="contentMain flex">
                    <div className="sidebarWrapper w-[16%]">
                        <Sidebar />
                    </div>

                    <div className="h-full w-full ml-14 pr-4 mt-4">
                        <Content />
                    </div>
                </div>

            </section>
        </>
    );
}

export default AdDashboard;