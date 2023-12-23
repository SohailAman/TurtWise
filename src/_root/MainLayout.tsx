import { Outlet } from "react-router-dom";
import Sidebar from "../components/shared/Sidebar";
import Topbar from "../components/shared/Topbar";

function MainLayout() {
  return (
    <div className="w-full max-h-screen md:overflow-hidden md:flex">
      <Topbar />
      <Sidebar />
      <section className="flex-1 md:overflow-y-auto h-full w-full md:pt-[88px] pt-5 md:pl-7 ps-4 md:pr-6 pr-4">
        <Outlet />
      </section>
    </div>
  );
}

export default MainLayout;
