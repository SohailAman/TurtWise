import { Link ,NavLink } from "react-router-dom"
import { sidebarLinks } from "../../constants"
import { INavLink } from "../../types"


const Sidebar = () => {
  return (
    <nav className="sidebar">
        <div className="absolute w-20 h-screen pb-32 bg-white border border-zinc-100 border-opacity-95 justify-start items-start inline-flex z-10">
        <div className="h-screen bg-white border-r border-neutral-200 flex-col justify-start items-start gap-5 inline-flex">
        <div className="w-20 h-20 py-2.5 rounded-sm" />
        <ul>
            {sidebarLinks.map((link: INavLink) => {
                return(
                    <li key={link.label} className="self-stretch h-9 py-2.5 rounded-sm justify-center items-center gap-0.5 inline-flex">
                        <NavLink to={link.route}>
                            <div className="w-20 flex-col justify-center items-center gap-0.5 inline-flex">
                                <div className="w-4 h-4 pl-px pr-0.5 pt-px pb-0.5 justify-center items-center inline-flex">
                                    <div className="w-3.5 h-3.5 relative">
                                        <img src={link.imgURL} />
                                    </div>
                                </div>
                                <div className="w-20 text-center text-slate-400 text-xs font-medium font-['Inter']">{link.label}</div>
                            </div>
                        </NavLink>
                    </li>

                )
            })}
        </ul>
        <div className="self-stretch h-9 py-2.5 bg-sky-100 rounded-sm justify-center items-center gap-0.5 inline-flex">
            <div className="w-20 flex-col justify-center items-center gap-0.5 inline-flex">
                <div className="w-4 h-4 px-px pt-px pb-0.5 justify-center items-center inline-flex">
                <div className="w-3.5 h-3.5 relative">
                    <img src="/assets/OverviewIcon2.svg" />
                </div>
                </div>
                <div className="w-20 text-center text-slate-600 text-xs font-medium font-['Inter']">Project</div>
            </div>
            <div className="w-0.5 h-9 bg-slate-500 rounded-tr-sm rounded-br-sm" />
        </div>
            <div className="self-stretch h-9 py-2.5 rounded-sm justify-center items-center gap-0.5 inline-flex">
            <div className="w-20 flex-col justify-center items-center gap-0.5 inline-flex">
                <div className="w-4 h-4 pl-px pr-0.5 pt-px pb-0.5 justify-center items-center inline-flex">
                    <div className="w-3.5 h-3.5 relative">
                        <img src="/assets/ScansIcon.svg" />
                    </div>
                </div>
                <div className="w-20 text-center text-slate-400 text-xs font-medium font-['Inter']">Scans</div>
            </div>
            </div>
            <div className="self-stretch h-9 py-2.5 rounded-sm justify-center items-center gap-0.5 inline-flex">
            <div className="w-20 flex-col justify-center items-center gap-0.5 inline-flex">
                <div className="w-4 h-4 px-0.5 py-px justify-center items-center inline-flex">
                <div className="w-3.5 h-3.5 relative">
                    <img src="/assets/ScanSummaryIcon.svg" />
                </div>
                </div>
                <div className="w-20 text-center text-slate-400 text-xs font-medium font-['Inter']">Scan<br/>Summary</div>
            </div>
            </div>
            <div className="self-stretch h-9 py-2.5 rounded-sm justify-center items-center gap-0.5 inline-flex">
            <div className="w-20 flex-col justify-center items-center gap-0.5 inline-flex">
                <div className="w-4 h-4 px-px pt-px pb-0.5 justify-center items-center inline-flex">
                <div className="w-3.5 h-3.5 relative">
                    <img src="/assets/BoootArenIcon2.svg" />
                </div>
                </div>
                <div className="w-20 text-center text-slate-400 text-xs font-medium font-['Inter']">Arena</div>
            </div>
            </div>
            <div className="self-stretch h-9 py-2.5 rounded-sm justify-center items-center gap-0.5 inline-flex">
            <div className="w-20 flex-col justify-center items-center gap-0.5 inline-flex">
                <div className="w-4 h-4 pl-px pr-0.5 pt-px pb-0.5 justify-center items-center inline-flex">
                <div className="w-3.4 h-3.5 relative">
                    <img src="/assets/SimIcon.svg" />
                </div>
                </div>
                <div className="w-20 text-center text-slate-400 text-xs font-medium font-['Inter']">Sim</div>
            </div>
            </div>
            <div className="self-stretch h-9 py-2.5 rounded-sm justify-center items-center gap-0.5 inline-flex">
            <div className="w-20 flex-col justify-center items-center gap-0.5 inline-flex">
                <div className="w-4 h-4 justify-center items-center inline-flex">
                <div className="w-4 h-4 px-px py-px justify-center items-center inline-flex">
                    <div className="w-3.5 h-3.5 relative">
                        <img src="/assets/Log_Icon.svg" />
                    </div>
                </div>
                </div>
                <div className="w-20 text-center text-slate-400 text-xs font-medium font-['Inter']">Logs</div>
            </div>
            </div>
            <div className="self-stretch h-9 py-2.5 rounded-sm justify-center items-center gap-0.5 inline-flex">
            <div className="w-20 flex-col justify-center items-center gap-0.5 inline-flex">
                <div className="w-4 h-4 pr-px pb-px justify-center items-center inline-flex">
                <div className="w-4 h-4 p-px justify-center items-center inline-flex">
                    <div className="w-3.5 h-3.5 relative">
                        <img src="/assets/Chart_Icon.svg" />
                    </div>
                </div>
                </div>
                <div className="w-20 text-center text-slate-400 text-xs font-medium font-['Inter']">Charts</div>
            </div>
            </div>
        </div>
        </div>
    </nav>
  )
}

export default Sidebar