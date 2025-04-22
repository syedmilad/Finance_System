import { useState } from "react";
import {
  Home,
  Phone,
  Briefcase,
  Users,
  FileText,
  Banknote,
  Building,
  Package,
  Settings,
  Monitor,
  Car,
  Cog,
} from "lucide-react";
import { sidebarWithMenuData } from "../data/sidebaData";
import clsx from "clsx";

const Sidebar = () => {
  const [active, setActive] = useState("portfolio");
  const [MenuItem, setMenuItem] = useState({
    name: "portfolio",
    label: "Portfolio",
  });
  const [subMenuItem, setSubMenuItem] = useState(null);

  console.log("subMenuItem==>", subMenuItem);

  return (
    <div className="flex h-screen bg-white py-[40px] px-[12px] space-x-4">
      {/* Sidebar */}
      <div className="bg-primary px-4 py-[60px] flex flex-col items-center space-y-6 rounded-2xl max-h-[784px] ">
        {sidebarWithMenuData?.map((item, index) => (
          <div
            className={clsx(
              "flex flex-col relative items-center px-4 py-1 rounded-[2px] cursor-pointer hover:bg-[#B5DEF2] ",
              item.name === MenuItem.name ? "bg-[#B5DEF2]" : ""
            )}
            onClick={() => setMenuItem(item)}
            key={index}
          >
            <img
              src={item?.icon}
              alt={item?.icon}
              className="w-[20px] h-[20px] object-contain"
            />

            {item.name === MenuItem.name && (
              <div className="absolute  top-0 left-[68px] flex flex-col items-start justify-start min-w-[150px] ">
                <span className="text-[#003A92] font-bold text-base">
                  {item?.submenuItem?.label}
                </span>
                <div className="flex flex-col items-start justify-start space-y-2 mt-2 px-2 w-full">
                  {item?.submenuItem?.items?.map((subItem, subIndex) => (
                    <span
                      onClick={() => setSubMenuItem(subItem)}
                      className={clsx(
                        "text-[#272729] font-normal text-sm px-2 hover:bg-[#E7F3F9] w-full  ",
                        subItem.name === subMenuItem?.name
                          ? "bg-[#E7F3F9]"
                          : ""
                      )}
                    >
                      {subItem.label}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
