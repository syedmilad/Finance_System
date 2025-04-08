import React from 'react'
import Chart from "react-apexcharts";


const ApexChart = ({ data }) => {
    return (
        <div className='w-[100%] h-[240px]  '>
            
            <Chart
                options={data.options}
                series={data.series}
                type="line"
                height="100%"
                width="100%"
            />
        </div>
    )
}

export default ApexChart