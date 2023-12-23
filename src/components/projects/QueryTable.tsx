const QueryTable = () => {
  const queriesData = [
    {
      name: "Query 1",
      score: 20,
      faithfulness: 56,
      context: 76,
      answers: 25,
    },
    {
      name: "Query 2",
      score: 99,
      faithfulness: 98,
      context: 98,
      answers: 78,
    },
    {
      name: "Query 3",
      score: 65,
      faithfulness: 75,
      context: 76,
      answers: 54,
    },
    {
      name: "Query 4",
      score: 32,
      faithfulness: 56,
      context: 71,
      answers: 25,
    },
    {
      name: "Query 5",
      score: 86,
      faithfulness: 92,
      context: 87,
      answers: 81,
    },
    {
      name: "Query 6",
      score: 35,
      faithfulness: 61,
      context: 54,
      answers: 33,
    },
    {
      name: "Query 7",
      score: 78,
      faithfulness: 81,
      context: 77,
      answers: 64,
    },
    {
      name: "Query 8",
      score: 18,
      faithfulness: 48,
      context: 69,
      answers: 59,
    },
    {
      name: "Query 9",
      score: 91,
      faithfulness: 96,
      context: 96,
      answers: 86,
    },
    {
      name: "Query 10",
      score: 53,
      faithfulness: 59,
      context: 87,
      answers: 32,
    },
  ];

  return (
    <div className="mt-[30px] md:px-6 px-4">
      <div className="lg:overflow-x-auto overflow-x-scroll">
        <table className="w-full table-fixed">
          <thead>
            <tr className="border-b-[1px] border-b-[#EEEEEE]">
              <th
                className="md:text-[18px] text-[14px] font-[600] leading-[140%] text-[#253238] md:w-[252px] w-[180px] p-[10px] whitespace-nowrap"
                align="left"
              >
                Query
              </th>
              <th className="md:text-[18px] text-[14px] font-[600] leading-[140%] text-[#253238] md:w-[252px] w-[180px] p-[10px] whitespace-nowrap">
                <div className="flex md:gap-[10px] gap-2 whitespace-nowrap items-start">
                  <span>TW Score</span>
                  <img
                    src={"/assets/info.svg"}
                    className="h-[12px] w-[12px]"
                    alt=""
                  />
                </div>
              </th>
              <th
                className="md:text-[18px] text-[14px] font-[600] leading-[140%] text-[#253238] md:w-[252px] w-[180px] p-[10px] whitespace-nowrap"
                align="center"
              >
                <div className="flex md:gap-[10px] gap-2 whitespace-nowrap items-start justify-center">
                  <span>Faithfulness</span>
                  <img
                    src={"/assets/info.svg"}
                    className="h-[12px] w-[12px]"
                    alt=""
                  />
                </div>
              </th>
              <th
                className="md:text-[18px] text-[14px] font-[600] leading-[140%] text-[#253238] md:w-[252px] w-[180px] p-[10px] whitespace-nowrap"
                align="center"
              >
                <div className="flex md:gap-[10px] gap-2 whitespace-nowrap items-start justify-center">
                  <span>Context Relevancy</span>
                  <img
                    src={"/assets/info.svg"}
                    className="h-[12px] w-[12px]"
                    alt=""
                  />
                </div>
              </th>
              <th
                className="md:text-[18px] text-[14px] font-[600] leading-[140%] text-[#253238] md:w-[252px] w-[180px] p-[10px] whitespace-nowrap"
                align="center"
              >
                <div className="flex md:gap-[10px] gap-2 whitespace-nowrap items-start justify-center">
                  <span>Answer Relevancy</span>
                  <img
                    src={"/assets/info.svg"}
                    className="h-[12px] w-[12px]"
                    alt=""
                  />
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {queriesData?.map((query, index) => (
              <tr
                className="text-[16px] font-[500] leading-[140%] text-[#90A4AF] hover:text-[#455B66] group"
                key={index}
              >
                <td className="whitespace-nowrap">
                  <div className="rounded-l-[16px] border-[1px] border-transparent border-b-[#EEEEEE] group-hover:border-t-[#EEEEEE] group-hover:border-l-[#EEEEEE] p-[10px] group-hover:bg-[#F5F8F8]">
                    {query.name}
                  </div>
                </td>
                <td
                  className={`whitespace-nowrap ${
                    query.score >= 75
                      ? "text-[#219653]"
                      : query.score >= 35
                      ? "text-[#F2C94C]"
                      : "text-[#EB5757]"
                  }`}
                >
                  <div className="border-[1px] border-transparent border-b-[#EEEEEE] group-hover:border-t-[#EEEEEE] p-[10px] group-hover:bg-[#F5F8F8]">
                    {query.score}
                  </div>
                </td>
                <td className="whitespace-nowrap" align="center">
                  <div className="border-[1px] border-transparent border-b-[#EEEEEE] group-hover:border-t-[#EEEEEE] p-[10px] group-hover:bg-[#F5F8F8]">
                    {query.faithfulness}
                  </div>
                </td>
                <td
                  className="whitespace-nowrap text-[14px] underline"
                  align="center"
                >
                  <div className="border-[1px] border-transparent border-b-[#EEEEEE] group-hover:border-t-[#EEEEEE] p-[10px] group-hover:bg-[#F5F8F8]">
                    {query.context}
                  </div>
                </td>
                <td
                  className="whitespace-nowrap text-[14px] underline"
                  align="center"
                >
                  <div className="rounded-r-[16px] border-[1px] border-transparent border-b-[#EEEEEE] group-hover:border-t-[#EEEEEE] group-hover:border-r-[#EEEEEE] p-[10px] group-hover:bg-[#F5F8F8]">
                    {query.answers}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-end gap-[16px] text-[12px] text-[#90A4AF] font-[500] mt-[10px] px-6">
        <span>1 of 8</span>
        <button>&#60;</button>
        <button>&#62;</button>
      </div>
    </div>
  );
};

export default QueryTable;
