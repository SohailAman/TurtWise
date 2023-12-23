const Scans = () => {
  return (
    <div>
      <h2 className="bg-[#E6F3F5] text-[#253238] text-[18px] py-[15px] md:px-6 px-4 rounded-t-2xl font-[600]">
        Scan 1
      </h2>
      <div className="md:py-5 md:px-6 p-4">
        <h3 className="text-[18px] text-[#253238] leading-[140%] font-[600] pb-[25px]">
          Scan summary:
        </h3>
        <div className="flex flex-col gap-[10px]">
          <h3 className="text-[16px] font-[500] leading-[140%] text-[#90A4AF]">
            Number of queries in the scan is:{" "}
            <span className="font-[600] text-[#455B66]">15</span>
          </h3>
          <h3 className="text-[16px] font-[500] leading-[140%] text-[#90A4AF]">
            Hallucinations: <span className="font-[600] text-[#455B66]">1</span>
          </h3>
          <h3 className="text-[16px] font-[500] leading-[140%] text-[#90A4AF]">
            Errors: <span className="font-[600] text-[#455B66]">0</span>
          </h3>
          <h3 className="text-[16px] font-[500] leading-[140%] text-[#90A4AF]">
            Most relevant sources of hallucinations
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Scans;
