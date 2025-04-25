import React, { useState } from "react";
import HeadUnits from "../../components/HeadUnits";
import Tabs from "../../components/Tabs";
import OverviewLeasing from "../../components/Leasing/OverviewLeasing/OverviewLeasing";
import Residents from "../../components/Leasing/Residents/Residents";
import UnitsLeasing from "../../components/Leasing/UnitsLeasing/UnitsLeasing";
import FinancialsLeasing from "../../components/Leasing/FinancialsLeasing/FinancialsLeasing";
import RequestWO from "../../components/Leasing/RequestWO/RequestWO";
import Checks from "../../components/Leasing/Checks/Checks";
import CommunicationLeasing from "../../components/Leasing/CommunicationLeasing/CommunicationLeasing";
import LegalLeasing from "../../components/Leasing/LegalLeasing/LegalLeasing";
import NotesLeasing from "../../components/Leasing/NotesLeasing/NotesLeasing";

const tabComponents = {
  Overview: OverviewLeasing,
  Residents: Residents,
  Units: UnitsLeasing,
  "Financials": FinancialsLeasing,
  "Request/WO": RequestWO,
  Checks: Checks,
  Communication: CommunicationLeasing,
  Legal: LegalLeasing,
  Notes: NotesLeasing,
};

const Units = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  const tabs = Object.keys(tabComponents);
  const ActiveComponent = tabComponents[activeTab];
  return (
    <div className="px-4 py-4 bg-[#ffff] flex flex-col h-full min-w-full">
      <div>
        <HeadUnits title="Tenant Name | Property | Unit No" status="Lease Status" btnTitle="Draft" />
      </div>
      <div className="mt-4">
        <Tabs tabs={tabs} setActiveTab={setActiveTab} activeTab={activeTab} />
      </div>
      {/* Content */}
      <div className="bg-white p-4 mt-4 min-h-screen ">
        <ActiveComponent />
      </div>
    </div>
  );
};

export default Units;
