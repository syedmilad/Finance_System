import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { facilityData } from '../../data/chartData';

// --- Icon Component (Example Filter Icon) ---
const FilterIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
    </svg>
);

// --- Horizontal Progress Bar Sub-component ---
const ProgressBar = ({ label, value, colorClass }) => (
    <div className="w-full">
        <span className="text-xs text-gray-500 block mb-1">{label}</span>
        <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden"> {/* Track */}
            <div
                className={`h-2 rounded-full ${colorClass}`} // Fill
                style={{ width: `${value}%` }}
                role="progressbar"
                aria-valuenow={value}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label={`${label} progress`}
            ></div>
        </div>
    </div>
);


// --- Main Facility Management Component ---
const FacilityManagement = ({ items = facilityData, completionPercentage = 75 }) => {

    // Data & Colors for Radial Chart
    const radialData = [
        { name: 'Complete', value: completionPercentage },
        { name: 'Incomplete', value: 100 - completionPercentage },
    ];
    const RADIAL_COMPLETE_COLOR = '#76DDE0'; // Custom Teal
    const RADIAL_BG_COLOR = '#F3F4F6';     // gray-100

    return (
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
            {/* Header */}
            <div className="flex justify-between items-start mb-5">
                <h2 className="text-lg font-semibold text-gray-800">
                    Facility Management
                </h2>
                <button className="p-1.5 bg-cyan-50 text-cyan-600 hover:bg-cyan-100 rounded-md transition-colors">
                    <FilterIcon />
                </button>
            </div>

            {/* Top Section: Progress Bars */}
            <div className="space-y-4 mb-6 pb-6 border-b border-gray-200">
                {items.map((item) => (
                    <ProgressBar key={item.label} {...item} />
                ))}
            </div>

            {/* Bottom Section: Completion Status */}
            <div className="flex items-center justify-between">
                {/* Left: Label */}
                <div className="flex-shrink-0 pr-4">
                    <h3 className="text-base font-medium text-gray-700">
                        Completion Status
                    </h3>
                </div>

                {/* Right: Radial Chart Area */}
                <div className="relative w-24 h-24 flex-shrink-0"> {/* Fixed size for chart */}
                    {/* Recharts Container */}
                    <div className="absolute inset-0">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                {/* Background Track */}
                                <Pie
                                    data={[{ value: 100 }]} // Always full circle
                                    dataKey="value"
                                    cx="50%"
                                    cy="50%"
                                    innerRadius="75%" // Adjust thickness
                                    outerRadius="90%" // Adjust thickness
                                    fill={RADIAL_BG_COLOR}
                                    startAngle={90}  // Start at top
                                    endAngle={-270} // End at top (full circle)
                                    stroke="none"
                                />
                                {/* Foreground Progress */}
                                <Pie
                                    data={radialData}
                                    dataKey="value"
                                    cx="50%"
                                    cy="50%"
                                    innerRadius="75%"
                                    outerRadius="90%"
                                    startAngle={90}
                                    endAngle={-270}
                                    cornerRadius={10} // Rounded ends
                                    stroke="none"
                                    paddingAngle={0}
                                >
                                    <Cell key={`cell-complete`} fill={RADIAL_COMPLETE_COLOR} />
                                    <Cell key={`cell-incomplete`} fill="transparent" />
                                </Pie>
                            </PieChart>
                        </ResponsiveContainer>
                    </div>

                    {/* Central Percentage Text */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                        <span className={`text-2xl font-medium text-[${RADIAL_COMPLETE_COLOR}]`}>
                            {completionPercentage}%
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FacilityManagement; // Export the component