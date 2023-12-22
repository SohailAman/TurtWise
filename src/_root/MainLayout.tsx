import { Outlet, Navigate} from "react-router-dom";
import Topbar from "../components/shared/Topbar";
import Sidebar from "../components/shared/Sidebar";

function MainLayout() {
  return (
    <div className="w-full md:flex">
        <Topbar />
        <Sidebar />
        <section className="container flex flex-1 overflow-y-auto h-full w-full pt-20 pl-[6.875rem] mr-6 text-wrap">
            <Outlet />
        </section>
        
    </div>
  )
}

export default MainLayout