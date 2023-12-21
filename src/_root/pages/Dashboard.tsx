

function Dashboard() {
  return (
    <>
    <div className="w-screen h-16 px-6 py-3.5 bg-white border-b border-neutral-200 justify-between items-start inline-flex">
        <div className="w-96 self-stretch justify-start items-center flex">
            <div className="pr-2.5 justify-start items-center gap-2.5 flex">
                <div className="w-14 h-8 relative">
                </div>
            </div>
            <div className="w-16 pl-2.5 py-2.5 rounded-sm justify-start items-center gap-2.5 flex">
                <div className="text-slate-600 text-sm font-medium font-['Inter']">Home</div>
                <div className="text-slate-600 text-sm font-medium font-['Inter']">-</div>
            </div>
            <div className="w-20 pl-2.5 py-2.5 rounded-sm justify-start items-center gap-2.5 flex">
                <div className="text-slate-600 text-sm font-medium font-['Inter']">Projects</div>
                <div className="text-slate-600 text-sm font-medium font-['Inter']">-</div>
            </div>
            <div className="w-32 pl-2.5 py-2.5 rounded-sm justify-start items-center gap-2.5 flex">
                <div className="w-3.5 h-4 relative">
                </div>
                <div className="text-slate-600 text-sm font-medium font-['Inter']">project name</div>
            </div>
        </div>
        <div className="justify-start items-center gap-8 flex">
            <div className="justify-start items-center gap-6 flex">
            <div className="w-9 h-9 justify-center items-center flex">
                <img className="w-9 h-9 rounded-3xl" src="https://via.placeholder.com/35x35" />
            </div>
            <div className="w-6 h-6 px-0.5 py-px justify-center items-center flex" />
            <div className="w-6 h-6 px-px py-px justify-center items-center flex">
                <div className="w-6 h-5 relative">
                </div>
            </div>
            <div className="w-6 h-6 relative" />
            </div>
        </div>
    </div>
    </>
  )
}

export default Dashboard