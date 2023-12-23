import { NavLink, useLocation } from "react-router-dom";
import { projectSidebarLinks, homeSidebarLinks } from "../../constants";
import { INavLink } from "../../types";

const Sidebar = () => {
  const { pathname } = useLocation();

  const sidebarLinks = pathname.startsWith("/project")
    ? projectSidebarLinks
    : homeSidebarLinks;
  return (
    <nav>
      <div className="sidenavbar-container overflow-x-scroll md:overflow-x-visible md:pb-0 pb-4">
        <div className="md:absolute md:h-full bg-white md:border-r border-neutral-200 md:flex-col justify-start md:items-start items-end gap-5 inline-flex">
          <div className="w-20 h-20 py-2.5 rounded-sm md:block hidden" />
          {sidebarLinks.map((link: INavLink) => {
            const isActive = pathname === link.route;
            return (
              <div
                key={link.label}
                className="self-stretch h-9 py-2.5 rounded-sm justify-center items-center gap-0.5 inline-flex"
              >
                <NavLink
                  to={link.route}
                  className={`hover:bg-hover-bg group ${
                    isActive &&
                    "bg-hover-bg md:border-r-[3px] md:border-b-0 border-r-0 border-b-[3px] border-slate-500 rounded-tr-sm rounded-br-sm"
                  }`}
                >
                  <div className="w-20 flex-col justify-center items-center gap-0.5 inline-flex">
                    <div className="w-4 h-4 pl-px pr-0.5 pt-px pb-0.5 justify-center items-center inline-flex">
                      <div className="w-3.5 h-3.5 relative">
                        <img
                          src={link.imgURL}
                          className={`group-hover:filter group-hover:invert group-hover:hue-rotate-180 ${
                            isActive && "filter invert hue-rotate-180"
                          }`}
                          style={{ fill: "#455B66" }}
                        />
                      </div>
                    </div>
                    <div
                      className={`w-20 text-center text-slate-400 text-xs font-medium font-['Inter'] group-hover:text-[#455B66] ${
                        isActive && "text-[#455B66]"
                      }`}
                    >
                      {link.label}
                    </div>
                  </div>
                </NavLink>
              </div>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
