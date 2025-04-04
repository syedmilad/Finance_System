import React from 'react'
import GaugeChart from 'react-gauge-chart'

const GuageChart = () => {
  return (
    <div className='w-full h-full'>
        <GaugeChart
          id="gauge-chart3"
          nrOfLevels={1}
          colors={["#299D91"]}
          arcWidth={0.3}
          percent={0.37}
          textColor={'#299D91'}
          hideText={true} // If you want to hide the text
        />
    </div>
  )
}

export default GuageChart