import React from "react";
import RecentTransactionsChart from "./TransactionChart/RecentTransactionsChart";
import FinancialsSnapshot from "./FinancialsSnapshot/FinancialsSnapshot";
import OccupancyStatsChart from "./OccupancyStatsChart/OccupancyStatsChart";
import FacilityManagement from "./FacilityManagement/FacilityManagement";

const Overview = () => {
  return (
    <div className="flex flex-col md:flex-row sm:flex-row gap-4 h-full min-w-full  bg-[#ffff]">
      <div className="flex flex-[1.2] h-full w-full">
        <div className="w-full h-full rounded-[5px] border border-[#EFF5F8]" >
          <RecentTransactionsChart />
        </div>
      </div>
      <div className="flex flex-col space-y-4 gap-6 flex-[0.8] h-full w-full ">
        <div className="w-full max-h-[215px] min-h-[230px] h-full rounded-[5px] border border-[#EFF5F8]">
          <FinancialsSnapshot />
        </div>
        <div className="w-full max-h-[215px] min-h-[230px] h-full rounded-[5px] border border-[#EFF5F8]">
          <OccupancyStatsChart />
        </div>
        <div className="w-full max-h-[215px] min-h-[230px] h-full rounded-[5px] border border-[#EFF5F8]">
          <FacilityManagement />
        </div>
      </div>
    </div>
  );
};

export default Overview;
