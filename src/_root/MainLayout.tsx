import { Outlet, Navigate} from "react-router-dom";
import Topbar from "../components/shared/Topbar";
import Sidebar from "../components/shared/Sidebar";

function MainLayout() {
  return (
    <>
        <Topbar />
        <Sidebar />
        <section>
            <Outlet />
        </section>
        
    </>
  )
}

export default MainLayout